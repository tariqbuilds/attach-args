'use strict'

module.exports = argsCSV => argsCSV.split(',')
  .map(arg => arg.replace(/\/\*.*\*\//, '').trim())
  .filter(arg => arg)

