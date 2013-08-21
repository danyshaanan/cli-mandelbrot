'use strict';

var clc = require('cli-color');
var rek = require('rekuire');

var calc = rek('grid').calc;
var def = rek('def');
var input = rek('input');

function next() {
  var text = [JSON.stringify(def,null,2),"w: up", "s: down", "a: left", "d: right", "r: zoom in", "f: zoom out", "t: more iterations", "g: less iterations", "o: quit",""].join("\n");
  var output = [clc.moveTo(0,0),calc(def),clc.moveTo(0,0),clc.xterm(8)(text)].join('');
  process.stdout.write(output);
}

process.stdin.setRawMode(true);
process.stdin.resume();
process.stdin.on("data", function(data) {
  var key = data.toString()[0];
  if (key == "o") {
    process.exit();
  }
  def = input.keyPress(def, key);
  next();
});

next();
