
'use strict'

let parseClass = {
  babel: require('./class-type/babel-6'),
  native: require('./class-type/native-es6'),
}

module.exports = (constructorArgs) => {

  let attachPropertiesToClassInstance = (classRef, argsCSV) => {
    let argsArray = argsCSV.split(',').map(arg => arg.replace(/\/\*.*\*\//, '').trim()).filter(arg => arg)
    argsArray.forEach((arg, i) => classRef[arg] = constructorArgs[i])
  }

  return {
    to(classRef) {
      this.toClass(classRef)
    },
    toClass(classRef){
      let args = parseClass.native(classRef)
      attachPropertiesToClassInstance(classRef, args)
    },
    toBabelClass(classRef){
      let args = parseClass.babel(classRef)
      attachPropertiesToClassInstance(classRef, args)
    }
  }

}
