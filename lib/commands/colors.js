"use strict";

var clc = require('cli-color');

module.exports = {
  colorByIterations: colorByIterations
};

var clcColors = [196,202,208,214,220,226,190,154,118,82,46,47,48,49,50,51,45,39,33,27,21,57,93,129,165,201];


function colorByIterations(iterations) {
  if (iterations != -1) {
    var color = clcColors[iterations%clcColors.length];
    return clc.xterm(color)("0");
  }
  return clc.xterm(0)("0");
}

