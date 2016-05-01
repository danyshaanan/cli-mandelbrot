'use strict'

const _ = require('lodash')
const calculateScreen = require('./calculateScreen.js')

module.exports = _.memoize(calculateScreen, (def, w, h) => JSON.stringify({ def, w, h }))
