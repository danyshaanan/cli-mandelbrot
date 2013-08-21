'use strict';

var clc = require('cli-color');
var rek = require('rekuire');

var calc = rek('grid').calc;
var def = rek('def');

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
  var text = [JSON.stringify(def,null,2),"w: up", "s: down", "a: left", "d: right", "r: zoom in", "f: zoom out", "t: more iterations", "g: less iterations", "o: quit",""].join("\n");
  var output = [clc.moveTo(0,0),calc(def),clc.moveTo(0,0),clc.xterm(8)(text)," "];
  process.stdout.write(output.join(''));
}
////////////////////////////////////////////////////////////////////////////////
