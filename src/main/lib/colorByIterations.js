'use strict'

const clc = require('cli-color')

const colors = [196, 202, 208, 214, 220, 226, 190, 154, 118, 82, 46, 47, 48, 49, 50, 51, 45, 39, 33, 27, 21, 57, 93, 129, 165, 201]

module.exports = i => clc.bgXterm(i === undefined ? 0 : colors[i % colors.length])(' ')
