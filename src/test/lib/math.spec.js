'use strict'

import test from 'ava'
import { iterationsToEscape } from '../../main/lib/math.js'

const knownValues = {
  '0': [ { x: 2, y: 2 }, { x: 1.84, y: -1 }, { x: 1.6, y: 1.96 } ],
  '1': [ { x: 1, y: 1 }, { x: 0.56, y: 1.12 }, { x: 0, y: -1.52 } ],
  '2': [ { x: 0.7, y: 0.7 }, { x: 0.6, y: 0.76 }, { x: -0.16, y: 1.2 } ],
  '3': [ { x: 0.55, y: 0.55 }, { x: 0.32, y: -0.92 }, { x: -1, y: -0.72 } ],
  '4': [ { x: 0.5, y: 0.5 }, { x: -1.44, y: 0.32 }, { x: -0.92, y: -0.56 } ],
  '5': [ { x: 0.45, y: 0.45 }, { x: -1.64, y: 0.12 }, { x: -0.72, y: -0.64 } ],
  '6': [ { x: 0.43, y: 0.43 }, { x: -0.2, y: -1.04 }, { x: 0.2, y: -0.68 } ],
  '7': [ { x: 0.42, y: 0.42 }, { x: -0.36, y: -0.72 }, { x: 0.36, y: 0.04 } ],
  '8': [ { x: 0.40, y: 0.40 }, { x: 0.32, y: 0.64 }, { x: -0.76, y: 0.36 } ],
  '9': [ { x: 0.399, y: 0.399 }, { x: 0.44, y: 0.2 }, { x: 0.44, y: -0.2 } ],
  '10': [ { x: 0.393, y: 0.393 }, { x: -0.28, y: -0.76 }, { x: -0.28, y: 0.76 } ],
  '-1': [ { x: 0, y: 0 }, { x: -1.32, y: 0.04 }, { x: -0.12, y: 0.12 } ]
}

Object.keys(knownValues).forEach(key => {
  const value = Number(key)
  knownValues[key].forEach(point => {
    test(`iterationsToEscape should return ${value} for [${point.x},${point.y}]`, t => {
      t.same(iterationsToEscape(point.x, point.y, 10), value, '...')
    })
  })
})
