'use strict';

var clc = require('cli-color');
var rek = require('rekuire');

var iterationsToEscape = rek('math').iterationsToEscape;


var def = {
  pixelsPerUnit: Math.pow(2,5),//Math.pow(2,56),
  pixelHightByWidthRatio: 3,
  x: -1.149719506110225,
  y: -0.312197910519423,
  iterations: 100
}
// def = JSON.parse(JSON.stringify(def));

var clcColors = [196,202,208,214,220,226,190,154,118,82,46,47,48,49,50,51,45,39,33,27,21,57,93,129,165,201];

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
  var text = [JSON.stringify(def,null,2),"w: up", "s: down", "a: left", "d: right", "r: zoom in", "f: zoom out", "t: more iterations", "g: less iterations", "o: quit",""].join("\n");
  var output = [clc.moveTo(0,0),calc(),clc.moveTo(0,0),clc.xterm(8)(text)," "];
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
    var color = clcColors[iterations%clcColors.length];
    return clc.xterm(color)("0");
  }
  return clc.xterm(0)("0");
}

