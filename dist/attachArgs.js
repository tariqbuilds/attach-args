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
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
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