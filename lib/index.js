'use strict'

var getConstructorArgs = require('./get-constructor-args-as-object')

// attaches provided arguments array to class as named properties
module.exports = function attachArgsToClass(classToParse, classArgs, classType) {

  // parse the arguments to the constructor
  // of the provided class
  // as an object
  var args = getConstructorArgs(classToParse, classType)


  // attach each argument to class instance
  args.forEach(function (arg, i){
    classToParse[arg] = classArgs[i]
  })

}
