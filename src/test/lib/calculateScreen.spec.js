'use strict'

import test from 'ava'
import calculateScreen from '../../main/lib/calculateScreen.js'

const def = {
  pixelsPerUnit: 32,
  pixelHightByWidthRatio: 3,
  x: -1.149719506110225,
  y: -0.312197910519423,
  iterations: 100
}

const result = calculateScreen(def, 2, 2)
const expected = '\u001b[48;5;190m \u001b[49m\u001b[48;5;190m \u001b[49m\n\u001b[48;5;39m \u001b[49m\u001b[48;5;0m \u001b[49m'

test('keyPress should do nothing for undefined key', t => {
  t.same(result, expected)
})
