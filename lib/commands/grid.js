"use strict";

var math = require('./math.js');
var colorByIterations = require('./colors.js').colorByIterations;


module.exports = {
  calculateScreen: calculateScreen
};

function calculateScreen(def, w, h) {
  var xs = getXs(def, w);
  var ys = getYs(def, h);
  var output = '';
  for (var iy in ys) {
    output += '\n';
    for (var ix in xs) {
      var iterations = (def.julia.on ? math.iterationsToEscapeJulia : math.iterationsToEscape)(xs[ix],ys[iy], def.iterations, def.julia.a, def.julia.b);
      var color = colorByIterations(iterations);
      output += color;
    }
  }
  return output;
}

function getXs(def, width) {
  var xs = [];
  for (var w = 0; w < width; w++) {
    xs[w] = (w - width/2)/def.pixelsPerUnit + def.x;
  }
  return xs;
}

function getYs(def, height) {
  var ys = [];
  for (var h = 0; h < height; h++) {
    ys[h] = (h - height/2)/def.pixelsPerUnit*def.pixelHightByWidthRatio + def.y;
  }
  return ys;
}
