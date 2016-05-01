'use strict'

const calculateScreen = require('./calculateScreen.js')

let cache = {}
const cacheSize = 20
const screenSize = {}

function checkSizeChange(w, h) {
  if (screenSize.w !== w || screenSize.h !== h) {
    cache = {}
    screenSize.w = w
    screenSize.h = h
  }
}

module.exports = (def, w, h) => {
  checkSizeChange(w, h)
  const key = JSON.stringify(def)
  if (key in cache) {
    return cache[key]
  }
  while (Object.keys(cache).length > cacheSize) {
    delete cache[Object.keys(cache)[0]]
  }
  const val = cache[key] = calculateScreen(def, w, h)
  return val
}
