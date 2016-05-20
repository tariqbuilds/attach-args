
'use strict'

module.exports = (constructorArgs) => {

  let attachPropertiesToClassInstance = (classRef, argsCSV) => {
    let argsArray = argsCSV.split(',').map(arg => arg.replace(/\/\*.*\*\//, '').trim()).filter(arg => arg)
    argsArray.forEach((arg, i) => classRef[arg] = constructorArgs[i])
  }

  return {
    toClass(classRef) {
      this.toNativeClass(classRef)
    },
    toNativeClass(classRef){
      let args = require('./class-type/native-es6')(classRef)
      attachPropertiesToClassInstance(classRef, args)
    },
    toBabelClass(classRef){
      let args = require('./class-type/babel-6')(classRef)
      attachPropertiesToClassInstance(classRef, args)
    },
  }

}
