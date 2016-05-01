'use strict'

import _ from 'lodash'
import test from 'ava'
import keyPress from '../../main/lib/keyPress.js'

const def = {
  pixelsPerUnit: 10,
  pixelAspectRatio: 2.4,
  x: 0,
  y: 0,
  iterations: 10
}
let defClone

test.beforeEach(t => {
  defClone = _.clone(def)
})

'adfgrstw'.split('').forEach(letter => {
  test(`The "${letter}" key should change def`, t => {
    keyPress(defClone, letter)
    t.notDeepEqual(def, defClone)
  })
})

'bcehijklmnopquvxyz'.split('').forEach(letter => {
  test(`The "${letter}" key should not change def`, t => {
    keyPress(defClone, letter)
    t.deepEqual(def, defClone)
  })
})
