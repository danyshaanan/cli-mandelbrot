'use strict' /* eslint curly: [2,"multi"] */

module.exports = (x0, y0, iterations) => {
  let [x, y, i] = [x0, y0, 0]
  while (true) {
    if (x * x + y * y >= 4) return i
    ;[x, y, i] = [x * x - y * y + x0, 2 * x * y + y0, i + 1]
    if (i > iterations) return -1
  }
}
