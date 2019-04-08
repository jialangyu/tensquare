'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '" http://192.168.79.216:7300/mock/5ca06639227c46163ab2f174"',
})
