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

const moveToZero = clc.moveTo(0, 0)
const baseHelpText = `
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
`

const screen = def => moveToZero + calculateScreen(def, clc.width - 1, clc.height)
const helpText = def => moveToZero + clc.xterm(8)(`${JSON.stringify(def, null, 2)}\n${baseHelpText}`)

const print = () => {
  process.stdout.write(screen(def))
  if (helpTextOn) process.stdout.write(helpText(def))
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
