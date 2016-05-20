var attachArgs =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	
	'use strict';

	var getConstructorArgsAsObject = __webpack_require__(1);

	module.exports = function (constructorArgs) {

	  var attachPropertiesToClassInstance = function attachPropertiesToClassInstance(classRef, argsCSV) {
	    var argsArray = argsCSV.split(',').map(function (arg) {
	      return arg.replace(/\/\*.*\*\//, '').trim();
	    }).filter(function (arg) {
	      return arg;
	    });
	    argsArray.forEach(function (arg, i) {
	      return classRef[arg] = constructorArgs[i];
	    });
	  };

	  return {
	    toClass: function toClass(classRef) {
	      this.toNativeClass(classRef);
	    },
	    toNativeClass: function toNativeClass(classRef) {
	      var args = __webpack_require__(6)(classRef);
	      attachPropertiesToClassInstance(classRef, args);
	    },
	    toBabelClass: function toBabelClass(classRef) {
	      var args = __webpack_require__(5)(classRef);
	      attachPropertiesToClassInstance(classRef, args);
	    }
	  };
	};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var supportedClassTypes = __webpack_require__(2);
	var validateUserProvidedClassType = __webpack_require__(3);

	module.exports = function getConstructorArgs(classRef, userProvidedClassType) {

	  // var to store our final results
	  var parsedClassArguments;

	  // if the user passed invalid userProvidedClassType, throw error
	  validateUserProvidedClassType(userProvidedClassType);

	  // if the user specified classType, try parsing it
	  if (userProvidedClassType) {
	    try {
	      parsedClassArguments = __webpack_require__(4)("./" + userProvidedClassType)(classRef);
	    } catch (parsingClassErr) {
	      throw {
	        err: 'Could not parse specified class type',
	        hint: 'The classType you passed (' + userProvidedClassType + ') did not help. I was not able to parse the provided class'
	      };
	    }

	    // otherwise, try to figure out what classType they are using
	  } else {

	      supportedClassTypes.forEach(function (supportedClassType) {
	        var wasAbleToParseArgs = __webpack_require__(4)("./" + supportedClassType)(classRef);
	        if (wasAbleToParseArgs !== false) parsedClassArguments = wasAbleToParseArgs;
	      });

	      if (!parsedClassArguments) {
	        throw {
	          err: 'Could not parse specified class type',
	          hint: 'The class you passed in could not be identified as one of the supported class types (' + supportedClassTypes.join(', ') + ')'
	        };
	      }
	    }

	  // thanks to: https://davidwalsh.name/javascript-arguments
	  return parsedClassArguments.split(',').map(function (arg) {
	    return arg.replace(/\/\*.*\*\//, '').trim();
	  }).filter(function (arg) {
	    return arg;
	  });
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	module.exports = ['native-es6', 'babel-6'];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var supportedClassTypes = __webpack_require__(2);

	module.exports = function (userProvidedClassType) {
	  if (userProvidedClassType && supportedClassTypes.indexOf(userProvidedClassType) === -1) {
	    throw {
	      err: 'Unsupported class type passed:' + userProvidedClassType,
	      hint: 'Supported class types are: ' + supportedClassTypes.join(', ')
	    };
	  }
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./babel-6": 5,
		"./babel-6.js": 5,
		"./native-es6": 6,
		"./native-es6.js": 6
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 4;


/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function (classToParse) {
	  try {
	    // thanks to: https://davidwalsh.name/javascript-arguments
	    return classToParse.constructor.toString().match(/function\s.*?\(([^)]*)\)/)[1];
	  } catch (err) {
	    return false;
	  }
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict'

	module.exports = function (classToParse) {
	  try {

	    eval("class foo{}");

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


/***/ }
/******/ ]);