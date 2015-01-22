'use strict'

var math = require('./math.js')
var colorByIterations = require('./colors.js').colorByIterations


function emptyArray(length) {
  return Array.apply(null, { length: length })
}

function getXs(def, width) {
  return emptyArray(width).map(function(v, w) {
    return (w - width / 2) / def.pixelsPerUnit + def.x
  })
}

function getYs(def, height) {
  return emptyArray(height).map(function(v, h) {
    return (h - height / 2) / def.pixelsPerUnit * def.pixelHightByWidthRatio + def.y
  })
}

function calculateScreen(def, w, h) {
  var xs = getXs(def, w)
  var ys = getYs(def, h)
  return ys.map(function(y) {
    return xs.map(function(x) {
      return colorByIterations(math.iterationsToEscape(x, y, def.iterations))
    }).join('')
  }).join('\n')
}


module.exports = {
  calculateScreen: calculateScreen
}
