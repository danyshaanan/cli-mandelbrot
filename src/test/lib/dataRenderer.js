'use strict'

var _ = require('lodash')
var iterationsToEscape = require('../../main/lib/math.js').iterationsToEscape

var results = {}

const trunc = a => Math.floor(a * 100) / 100

var jump = 0.04

for (var i = -2; i <= 2; i += jump) {
  for (var j = -2; j <= 2; j += jump) {
    var p = { x: trunc(i), y: trunc(j) }
    var iterations = iterationsToEscape(i, j, 10)

    var cell = '' + iterations
    results[cell] = results[cell] || []
    results[cell].push(p)
  }
}

results = _.mapValues(results, a => _(a).shuffle().take(2).value())

console.log(results)
