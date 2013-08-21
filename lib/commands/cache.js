"use strict";

var rek = require('rekuire');
var calculateScreen = rek('grid').calculateScreen;

module.exports = {
  getScreen: getScreen
};

var cache = {};
var cacheSize = 20;

function getScreen(def) {
  var key = JSON.stringify(def);
  if (key in cache) {
    return cache[key];
  }
  while (Object.keys(cache).length > cacheSize) {
    delete cache[Object.keys(cache)[0]];
  }
  var val = cache[key] = calculateScreen(def);
  return val;
}