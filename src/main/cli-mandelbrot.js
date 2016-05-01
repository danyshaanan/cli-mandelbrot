#!/usr/bin/env node

'use strict'

const _ = require('lodash')
const clc = require('cli-color')

let def = require('./lib/def.json')
const keyPress = require('./lib/keyPress.js')
const calculateScreen = _.memoize(require('./lib/calculateScreen.js'), (def, w, h) => JSON.stringify({ def, w, h }))

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
  let output = moveToZero + calculateScreen(def, clc.width - 1, clc.height)
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
  def = keyPress(def, key)
  next()
})

next()
