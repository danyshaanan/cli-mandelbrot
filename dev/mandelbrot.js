'use strict';

var clc = require('cli-color');

var def = {
  pixelsPerUnit: Math.pow(2,5),//Math.pow(2,56),
  pixelHightByWidthRatio: 3,
  x: -1.149719506110225,
  y: -0.312197910519423,
  iterations: 200
}
// def = JSON.parse(JSON.stringify(def));



process.stdin.setRawMode(true);
process.stdin.resume();
process.stdin.on("data", function(data) {
  var key = data.toString()[0];
  if (key == "o") {
    process.exit();
  } else if (key == "w") {
    def.y -= 10 / def.pixelsPerUnit;
  } else if (key == "a") {
    def.x -= 10 / def.pixelsPerUnit;
  } else if (key == "s") {
    def.y += 10 / def.pixelsPerUnit;
  } else if (key == "d") {
    def.x += 10 / def.pixelsPerUnit;
  } else if (key == "r") {
    def.pixelsPerUnit *= 2;
  } else if (key == "f") {
    def.pixelsPerUnit /= 2;
  } else if (key == "t") {
    def.iterations += 10;
  } else if (key == "g") {
    def.iterations -= 10;
  }
  next();
});

next();
function next() {
  var output = [clc.moveTo(0,0),calc(),clc.moveTo(0,0),"def: ",clc.yellow(JSON.stringify(def,null,2))," "];
  process.stdout.write(output.join(''));
}
////////////////////////////////////////////////////////////////////////////////

function calc() {
  var xs = getXs();
  var ys = getYs();
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




