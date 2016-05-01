#!/usr/bin/env node

'use strict'

const clc = require('cli-color')

let def = require('./lib/def.json')
const input = require('./lib/input.js')
const getScreen = require('./lib/cache.js').getScreen

let helpTextOn = true

const moveToZero = clc.moveTo(0, 0)
const baseHelpText = [
  'q: toggle help text',
  '0: toggle ascii mode',
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
  let output = moveToZero + getScreen(def, clc.width - 1, clc.height)
  if (helpTextOn) {
    output += moveToZero + clc.xterm(8)(`${JSON.stringify(def, null, 2)}\n${baseHelpText}`)
  }
  process.stdout.write(output)
}

process.stdin.setRawMode(true)
process.stdin.resume()
process.stdin.on('data', data => {
  const key = data.toString()[0]
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
