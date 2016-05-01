'use strict'

function iterationsToEscape(x0, y0, iterations) {
  var x = x0
  var y = y0
  var i = 0

  function iterate() {
    i++
    var tempY = 2 * x * y + y0
    x = x * x - y * y + x0
    y = tempY
  }

  while (x * x + y * y < 4) {
    if (i === iterations) return -1
    iterate()
  }
  return i
}

module.exports = {
  iterationsToEscape: iterationsToEscape
}
