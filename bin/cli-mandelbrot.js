#!/usr/bin/env node

'use strict'

var clc = require('cli-color')

var def = require('../lib/def.json')
var input = require('../lib/input.js')
var getScreen = require('../lib/cache.js').getScreen

var helpTextOn = true

var moveToZero = clc.moveTo(0, 0)
var baseHelpText = [
  'q: toggle help text',
  'w: up',
  's: down',
  'a: left',
  'd: right',
  'r: zoom in',
  'f: zoom out',
  't: more iterations',
  'g: less iterations',
  'o: quit',
  ''
].join('\n')


function next() {
  var output = moveToZero + getScreen(def, clc.width - 1, clc.height)
  if (helpTextOn) {
    output += moveToZero + clc.xterm(8)(JSON.stringify(def, null, 2) + '\n' + baseHelpText)
  }
  process.stdout.write(output)
}

process.stdin.setRawMode(true)
process.stdin.resume()
process.stdin.on('data', function(data) {
  var key = data.toString()[0]
  if (key === 'o') {
    console.log(clc.reset)
    process.exit()
  } else if (key === 'q') {
    helpTextOn = !helpTextOn
  }
  def = input.keyPress(def, key)
  next()
})

next()
