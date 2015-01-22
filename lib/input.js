'use strict'


var keyFuncs = {
  w: function(def) { def.y -= 10 / def.pixelsPerUnit },
  a: function(def) { def.x -= 10 / def.pixelsPerUnit },
  s: function(def) { def.y += 10 / def.pixelsPerUnit },
  d: function(def) { def.x += 10 / def.pixelsPerUnit },
  r: function(def) { def.pixelsPerUnit *= 2 },
  f: function(def) { def.pixelsPerUnit /= 2 },
  t: function(def) { def.iterations += 10 },
  g: function(def) { def.iterations -= 10 },
  '0': function(def) { def.ascii = !def.ascii }
}

function keyPress(def, key) {
  if (keyFuncs[key]) {
    keyFuncs[key](def)
  }
  return def
}


module.exports = {
  keyPress: keyPress
}
