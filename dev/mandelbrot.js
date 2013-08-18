'use strict';

var clc = require('cli-color');

var def = {
  pixelsPerUnit: Math.pow(2,0),//Math.pow(2,56),
  pixelHightByWidthRatio: 3,
  x: -1.149719506110225,
  y: -0.312197910519423,
  iterations: 200
}
// def = JSON.parse(JSON.stringify(def));

next();

function next() {
  if (def.pixelsPerUnit > Math.pow(2,56)) return;
  var output = [clc.moveTo(0,0),calc(),clc.moveTo(0,0),"def.pixelsPerUnit: ",def.pixelsPerUnit," "];
  process.stdout.write(output.join(''));
  // return;
  def.pixelsPerUnit *= 2;
  setTimeout(next, 250);
}
////////////////////////////////////////////////////////////////////////////////

function calc() {
  var xs = getXs();
  var ys = getYs();
  var output = '';
  for (var h = 0; h < clc.height; h++) {
    output += '\n';
    for (var w = 0; w < clc.width; w++) {
      var iterations = iterationsToEscape(xs[w],ys[h], def.iterations);
      var color = colorByIterations(iterations);
      output += color;
    }
  }
  return output;
}

function getXs() {
  var xs = [];
  for (var w = 0; w < clc.width; w++) {
    xs[w] = (w - clc.width/2)/def.pixelsPerUnit + def.x;
  }
  return xs;
}

function getYs() {
  var ys = [];
  for (var h = 0; h < clc.height; h++) {
    ys[h] = (h - clc.height/2)/def.pixelsPerUnit*def.pixelHightByWidthRatio + def.y;
  }
  return ys;
}


function colorByIterations(iterations) {
  if (iterations != -1) {
    var color = (iterations/240 * 200 + 55)|0;
    return clc.xterm(color)("0");
  }
  return clc.xterm(0)("0");
}

////////////////////////////////////////////////////////////////////////////////

function iterationsToEscape(x,y, iterations) {
  var x0 = x;
  var y0 = y;
  for (var i = 0; i < iterations; i++) {
    var tempY = 2*x*y + y0;
    x = x*x - y*y + x0;
    y = tempY;
    var r2 = x*x + y*y;
    if (r2 > 4) {
      return i;
    }
  }
  return -1;
}




