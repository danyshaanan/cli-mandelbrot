'use strict'


function keyPress(def, key) {
  if (key === 'w') {
    def.y -= 10 / def.pixelsPerUnit
  } else if (key === 'a') {
    def.x -= 10 / def.pixelsPerUnit
  } else if (key === 's') {
    def.y += 10 / def.pixelsPerUnit
  } else if (key === 'd') {
    def.x += 10 / def.pixelsPerUnit
  } else if (key === 'r') {
    def.pixelsPerUnit *= 2
  } else if (key === 'f') {
    def.pixelsPerUnit /= 2
  } else if (key === 't') {
    def.iterations += 10
  } else if (key === 'g') {
    def.iterations -= 10
  } else if (key === '0') {
    def.ascii = !def.ascii
  }
  return def
}


module.exports = {
  keyPress: keyPress
}
