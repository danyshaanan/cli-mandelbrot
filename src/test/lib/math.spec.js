'use strict'

import test from 'ava'
import { iterationsToEscape } from '../../main/lib/math.js'

test('iterationsToEscape should return 0 for [x, y] outside the radius', t => {
  const res = iterationsToEscape(4, 4, 1)
  t.same(res, 0, '...')
})
