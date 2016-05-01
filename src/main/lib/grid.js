'use strict'

const math = require('./math.js')
const colorByIterations = require('./colors.js').colorByIterations

const emptyArray = l => Array.from(Array(l))

const getXs = (def, width) =>
  emptyArray(width).map(
    (v, w) => (w - width / 2) / def.pixelsPerUnit + def.x
  )

const getYs = (def, height) =>
  emptyArray(height).map(
    (v, h) => (h - height / 2) / def.pixelsPerUnit * def.pixelHightByWidthRatio + def.y
  )

const calculateScreen = (def, w, h) => {
  const xs = getXs(def, w)
  const ys = getYs(def, h)
  return ys.map(y =>
    xs.map(
      x => colorByIterations(math.iterationsToEscape(x, y, def.iterations), def.ascii)).join('')
  ).join('\n')
}

module.exports = { calculateScreen }
