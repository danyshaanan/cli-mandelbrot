'use strict';

var clc = require('cli-color');

var def = {
  pixelsPerUnit: Math.pow(2,0),//Math.pow(2,56),
  pixelHightByWidthRatio: 3,
  x: -1.149719506110225,
  y: -0.31219791051,
  iterations: 240
}
// def = JSON.parse(JSON.stringify(def));

next();

function next() {
  process.stdout.write(calc() + clc.moveTo(0,0) + "def.pixelsPerUnit: " + def.pixelsPerUnit + " " + clc.moveTo(1000,1000));
  def.pixelsPerUnit *= 2;
  if (def.pixelsPerUnit <= Math.pow(2,56)) {
    setTimeout(next, 250);
  }
}
////////////////////////////////////////////////////////////////////////////////

function calc() {
  var lines = [];
  for (var h = 0; h < clc.height; h++) {
    var line = [];
    for (var w = 0; w < clc.width; w++) {
      line.push(pixel(w,h));
    }
    lines.push(line.join(''));
  }
  return lines.join('\n');
}

function pixel(w,h) {
  var x = (w - clc.width/2)/def.pixelsPerUnit + def.x;
  var y = (h - clc.height/2)/def.pixelsPerUnit*def.pixelHightByWidthRatio + def.y;
  var x0 = x;
  var y0 = y;
  for (var i = 0; i < def.iterations; i++) {
    var tempY = 2*x*y + y0;
    x = x*x - y*y + x0;
    y = tempY;
    var r2 = x*x + y*y;
    if (r2 > 4) {
      var color = (i/240 * 200 + 55)|0;
      return clc.xterm(color)("0");
    }
  }
  return clc.xterm(0)("0");
}





