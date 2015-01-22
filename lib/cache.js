'use strict'

var calculateScreen = require('./grid.js').calculateScreen

var cache = {}
var cacheSize = 20
var screenSize = {}

function checkSizeChange(w, h) {
  if (screenSize.w !== w || screenSize.h !== h) {
    cache = {}
    screenSize.w = w
    screenSize.h = h
  }
}

function getScreen(def, w, h) {
  checkSizeChange(w, h)
  var key = JSON.stringify(def)
  if (key in cache) {
    return cache[key]
  }
  while (Object.keys(cache).length > cacheSize) {
    delete cache[Object.keys(cache)[0]]
  }
  var val = cache[key] = calculateScreen(def, w, h)
  return val
}


module.exports = {
  getScreen: getScreen
}
