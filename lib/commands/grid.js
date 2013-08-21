"use strict";

var clc = require('cli-color');
var rek = require('rekuire');
var iterationsToEscape = rek('math').iterationsToEscape;
var colorByIterations = rek('colors').colorByIterations;


module.exports = {
  calculateScreen: calculateScreen
};

function calculateScreen(def) {
  var xs = getXs(def);
  var ys = getYs(def);
  var output = '';
  for (var iy in ys) {
    output += '\n';
    for (var ix in xs) {
      var iterations = iterationsToEscape(xs[ix],ys[iy], def.iterations);
      var color = colorByIterations(iterations);
      output += color;
    }
  }
  return output;
}

function getXs(def) {
  var xs = [];
  for (var w = 0; w < clc.width; w++) {
    xs[w] = (w - clc.width/2)/def.pixelsPerUnit + def.x;
  }
  return xs;
}

function getYs(def) {
  var ys = [];
  for (var h = 0; h < clc.height; h++) {
    ys[h] = (h - clc.height/2)/def.pixelsPerUnit*def.pixelHightByWidthRatio + def.y;
  }
  return ys;
}

