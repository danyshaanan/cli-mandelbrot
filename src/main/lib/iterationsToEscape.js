'use strict'

let t

module.exports = (x0, y0, iterations) => {
  let [x, y, i] = [x0, y0, 0]
  while (true) {
    if (x * x + y * y >= 4) return i
    t = x * x - y * y + x0
    y = 2 * x * y + y0
    x = t
    i++
    if (i > iterations) return undefined
  }
}
