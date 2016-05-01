'use strict'

const keyFuncs = {
  w: def => { def.y -= 10 / def.pixelsPerUnit },
  a: def => { def.x -= 10 / def.pixelsPerUnit },
  s: def => { def.y += 10 / def.pixelsPerUnit },
  d: def => { def.x += 10 / def.pixelsPerUnit },
  r: def => { def.pixelsPerUnit *= 2 },
  f: def => { def.pixelsPerUnit /= 2 },
  t: def => { def.iterations += 10 },
  g: def => { def.iterations -= 10 },
  '0': def => { def.ascii = !def.ascii }
}

const keyPress = (def, key) => {
  if (keyFuncs[key]) {
    keyFuncs[key](def)
  }
  return def
}

module.exports = keyPress
