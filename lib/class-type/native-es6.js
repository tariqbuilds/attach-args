'use strict'

let csvToArray = require('../args-csv-to-array-utility')

module.exports = function (classToParse) {
  try {

    let beginningOfConstructor = classToParse.constructor.toString().indexOf('constructor(')
    let endOfConstructor       = classToParse.constructor.toString().indexOf(')', beginningOfConstructor)
    let lengthOfConstructor    = endOfConstructor - beginningOfConstructor
    let constructorArgsAsCSV   = classToParse.constructor.toString().substr(beginningOfConstructor, lengthOfConstructor).replace('constructor(', '')

    if (!constructorArgsAsCSV || constructorArgsAsCSV.length < 1)
      throw "attach-args: No parameters defined for class constructor."

    return csvToArray(constructorArgsAsCSV)

  } catch(error) {
    console.error('attach-args: Could not parse provided native Class')
    console.error(error)
  }
}
