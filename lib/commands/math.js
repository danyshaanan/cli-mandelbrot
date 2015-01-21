'use strict';


module.exports = {
  iterationsToEscape: iterationsToEscape,
  iterationsToEscapeJulia: iterationsToEscapeJulia
};


function iterationsToEscape(x, y, iterations) {
  var x0 = x;
  var y0 = y;
  for (var i = 0; i < iterations; i++) {
    var tempY = 2 * x * y + y0;
    x = x * x - y * y + x0;
    y = tempY;
    var r2 = x * x + y * y;
    if (r2 > 4) {
      return i;
    }
  }
  return -1;
}


function iterationsToEscapeJulia(x, y, iterations, a, b) {
  for (var i = 0; i < iterations; i++) {
    var tempY = 2 * x * y + b;
    x = x * x - y * y + a;
    y = tempY;
    var r2 = x * x + y * y;
    if (r2 > 4) {
      return i;
    }
  }
  return -1;
}
