'use strict'

const _ = require('lodash')
const iterationsToEscape = require('../../main/lib/math.js').iterationsToEscape

let results = {}

const trunc = a => Math.floor(a * 100) / 100

const jump = 0.04

for (let i = -2; i <= 2; i += jump) {
  for (let j = -2; j <= 2; j += jump) {
    const p = { x: trunc(i), y: trunc(j) }
    const iterations = iterationsToEscape(i, j, 10)

    const cell = iterations.toString()
    results[cell] = results[cell] || []
    results[cell].push(p)
  }
}

results = _.mapValues(results, a => _(a).shuffle().take(2).value())

console.log(results)
