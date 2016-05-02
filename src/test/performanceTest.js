#!/usr/bin/env node

'use strict'

const clc = require('cli-color')
const calculateScreen = require('../main/lib/calculateScreen.js')

const average = (times, func) => {
  const start = Date.now()
  for (let i = times; i; i--) func()
  const end = Date.now()
  return (end - start) / times
}

const def = {
  pixelsPerUnit: 36028797018963970,
  pixelAspectRatio: 2.4,
  x: -1.1497195061102734,
  y: -0.31219791051937973,
  iterations: 230
}

console.log(average(10, () => calculateScreen(def, clc.width, clc.height)))
