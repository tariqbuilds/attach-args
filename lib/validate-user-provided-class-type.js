'use strict'

var supportedClassTypes = require('supported-class-types')

module.exports = function (userProvidedClassType) {
  if (supportedClassTypes.indexOf(userProvidedClassType) === -1) {
    throw {
      err: 'Unsupported class type passed:' + userProvidedClassType,
      hint: 'Supported class types are: ' + supportedClassTypes.join(', '),
    }
  }
}
