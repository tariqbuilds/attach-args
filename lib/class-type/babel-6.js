'use strict'

module.exports = function (classToParse) {
  try {
    // thanks to: https://davidwalsh.name/javascript-arguments
    return classToParse.constructor.toString().match(/function\s.*?\(([^)]*)\)/)[1]
  } catch(err) {
    return false
  }
}
