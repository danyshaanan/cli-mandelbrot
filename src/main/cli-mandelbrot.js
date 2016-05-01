#!/usr/bin/env node

'use strict'

const _ = require('lodash')
const clc = require('cli-color')
const keyPress = require('./lib/keyPress.js')
const def = require('./lib/def.json')

const calculateScreenOrig = require('./lib/calculateScreen.js')
const calculateScreenHash = (def, w, h) => JSON.stringify({ def, w, h })
const calculateScreen = _.memoize(calculateScreenOrig, calculateScreenHash)

let helpTextOn = true

const start = clc.moveTo(0, 0)
const toEnd = () => clc.moveTo(clc.width, clc.height)
const keys = {
  q: 'toggle help text',
  w: 'up',
  s: 'down',
  a: 'left',
  d: 'right',
  r: 'zoom in',
  f: 'zoom out',
  t: 'more iterations',
  g: 'less iterations',
  o: 'quit'
}

const stringify = o => _.map(o, (v, i) => `  ${i}: ${v}`).join('\n')
const calculateHelp = def => clc.xterm(8)(`\nDef: \n${stringify(def)}\n\nKeys:\n${stringify(keys)}`)

const print = () => {
  process.stdout.write(start + calculateScreen(def, clc.width, clc.height))
  if (helpTextOn) process.stdout.write(start + calculateHelp(def) + toEnd())
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
  keyPress(def, key)
  print()
})

print()
