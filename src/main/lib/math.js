'use strict'

function iterationsToEscape(x0, y0, iterations) {
  let x = x0
  let y = y0
  let i = 0

  function iterate() {
    i++
    [x, y] = [x * x - y * y + x0, 2 * x * y + y0]
  }

  while (x * x + y * y < 4) {
    if (i === iterations) return -1
    iterate()
  }
  return i
}

module.exports = { iterationsToEscape }
