'use strict'


module.exports = {
  iterationsToEscape: iterationsToEscape
}


function iterationsToEscape(x, y, iterations) {
  var x0 = x
  var y0 = y
  var i = -1
  while (++i < iterations) {
    var tempY = 2 * x * y + y0
    x = x * x - y * y + x0
    y = tempY
    var r2 = x * x + y * y
    if (r2 > 4) {
      return i
    }
  }
  return -1
}
