'use strict'

import test from 'ava'
import keyPress from '../../main/lib/keyPress.js'

const clone = o => JSON.parse(JSON.stringify(o))

const def = {
  pixelsPerUnit: 10,
  pixelHightByWidthRatio: 3,
  x: 0,
  y: 0,
  iterations: 10
}

test('keyPress should do nothing for undefined key', t => {
  const before = clone(def)
  const after = clone(def)
  keyPress(after, undefined)
  t.same(before, after, '...')
})

test('w should reduce y by 10 / before.pixelsPerUnit', t => {
  const before = clone(def)
  before.y -= 10 / before.pixelsPerUnit
  const after = clone(def)
  keyPress(after, 'w')
  t.same(before, after, '...')
})

test('s should increase y by 10 / before.pixelsPerUnit', t => {
  const before = clone(def)
  before.y += 10 / before.pixelsPerUnit
  const after = clone(def)
  keyPress(after, 's')
  t.same(before, after, '...')
})

test('a should reduce x by 10 / before.pixelsPerUnit', t => {
  const before = clone(def)
  before.x -= 10 / before.pixelsPerUnit
  const after = clone(def)
  keyPress(after, 'a')
  t.same(before, after, '...')
})

test('d should increase x by 10 / before.pixelsPerUnit', t => {
  const before = clone(def)
  before.x += 10 / before.pixelsPerUnit
  const after = clone(def)
  keyPress(after, 'd')
  t.same(before, after, '...')
})

test('r should multiply pixelsPerUnit by 2', t => {
  const before = clone(def)
  before.pixelsPerUnit *= 2
  const after = clone(def)
  keyPress(after, 'r')
  t.same(before, after, '...')
})

test('r should devide pixelsPerUnit by 2', t => {
  const before = clone(def)
  before.pixelsPerUnit /= 2
  const after = clone(def)
  keyPress(after, 'f')
  t.same(before, after, '...')
})

test('t should increase iterations by 10', t => {
  const before = clone(def)
  before.iterations += 10
  const after = clone(def)
  keyPress(after, 't')
  t.same(before, after, '...')
})

test('g should reduce iterations by 10', t => {
  const before = clone(def)
  before.iterations -= 10
  const after = clone(def)
  keyPress(after, 'g')
  t.same(before, after, '...')
})
