'use strict'

const iterationsToEscape = require('./iterationsToEscape.js')
const colorByIterations = require('./colorByIterations.js')

const getColor = (x, y, iterations) => colorByIterations(iterationsToEscape(x, y, iterations))

module.exports = (def, w, h) => {
  const xs = Array.from(Array(w), (_, i) => def.x + (i - w / 2) / def.pixelsPerUnit)
  const ys = Array.from(Array(h), (_, i) => def.y + (i - h / 2) / def.pixelsPerUnit * def.pixelAspectRatio)
  return ys.map(y => xs.map(x => getColor(x, y, def.iterations)).join('')).join('\n')
}
