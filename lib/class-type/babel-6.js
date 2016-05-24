'use strict'

let csvToArray = require('../args-csv-to-array-utility')

module.exports = function (classToParse) {
  try {
    // thanks to: https://davidwalsh.name/javascript-arguments
    let regex = /function\s.*?\(([^)]*)\)/
    let constructorArgsAsCSV = classToParse.constructor.toString().match(regex)[1]

    if (!constructorArgsAsCSV || constructorArgsAsCSV.length < 1)
      throw 'The constructor of your class does not have any parameters defined'

    return csvToArray(constructorArgsAsCSV)

  } catch(err) {
    console.error('attach-args: Could not parse provided Babel Class')
    console.error(err)
  }
}
