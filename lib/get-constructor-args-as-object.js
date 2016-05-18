'use strict'

const supportedClassTypes           = require('./supported-class-types')
const validateUserProvidedClassType = require('./validate-user-provided-class-type')

module.exports = function getConstructorArgs(classRef, userProvidedClassType) {

  // var to store our final results
  var parsedClassArguments

  // if the user passed invalid userProvidedClassType, throw error
  validateUserProvidedClassType(userProvidedClassType)

  // if the user specified classType, try parsing it
  if (userProvidedClassType) {
    try {
      parsedClassArguments = require('./class-type/' + userProvidedClassType)(classRef)
    } catch (parsingClassErr) {
      throw {
        err: 'Could not parse specified class type',
        hint: 'The classType you passed (' + userProvidedClassType + ') did not help. I was not able to parse the provided class',
      }
    }

  // otherwise, try to figure out what classType they are using
  } else {

    supportedClassTypes.forEach(supportedClassType => {
      var wasAbleToParseArgs = require('./class-type/' + supportedClassType)(classRef)
      if (wasAbleToParseArgs !== false)
        parsedClassArguments = wasAbleToParseArgs
    })

    if (!parsedClassArguments) {
      throw {
        err: 'Could not parse specified class type',
        hint: 'The class you passed in could not be identified as one of the supported class types (' + supportedClassTypes.join(', ') + ')'
      }
    }
  }

  // thanks to: https://davidwalsh.name/javascript-arguments
  return parsedClassArguments.split(',')
    .map(arg => arg.replace(/\/\*.*\*\//, '').trim())
    .filter(arg => arg)
}
