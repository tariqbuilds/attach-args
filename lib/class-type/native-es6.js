'use strict'

module.exports = function (classToParse) {
  try {

    class foo {
      constructor() {
      }
    }

    // if so, parse native class
    var beginningOfConstructor = classToParse.constructor.toString().indexOf('constructor(')
    var endOfConstructor       = classToParse.constructor.toString().indexOf(')', beginningOfConstructor)
    var lengthOfConstructor    = endOfConstructor - beginningOfConstructor
    var argumentsOfConstructor = classToParse.constructor.toString().substr(beginningOfConstructor, lengthOfConstructor).replace('constructor(', '')

    return argumentsOfConstructor

  } catch(error) {
    return false
  }
}
