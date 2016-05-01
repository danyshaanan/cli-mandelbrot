'use strict'

const _ = require('lodash')
const iterationsToEscape = require('../../main/lib/iterationsToEscape.js')

const trunc = a => Math.floor(a * 100) / 100
const shuffleAndCutTwo = a => _(a).shuffle().take(2).value()
const jump = 0.04

let pointsByIndex = []
let undefinedPoints = []

for (let i = -2; i <= 2; i += jump) {
  for (let j = -2; j <= 2; j += jump) {
    const p = { x: trunc(i), y: trunc(j) }
    const iterations = iterationsToEscape(i, j, 10)
    if (iterations === undefined) {
      undefinedPoints.push(p)
    } else {
      pointsByIndex[iterations] = pointsByIndex[iterations] || []
      pointsByIndex[iterations].push(p)
    }
  }
}

undefinedPoints = shuffleAndCutTwo(undefinedPoints)
pointsByIndex = _.map(pointsByIndex, shuffleAndCutTwo)

console.log(undefinedPoints)
console.log(pointsByIndex)
