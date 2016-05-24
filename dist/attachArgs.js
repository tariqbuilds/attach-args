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

	var parseClass = {
	  babel: __webpack_require__(1),
	  native: __webpack_require__(3)
	};

	module.exports = function (constructorArgs) {

	  var attachPropertiesToClassInstance = function attachPropertiesToClassInstance(classRef, argsArray) {
	    return argsArray.forEach(function (arg, i) {
	      return classRef[arg] = constructorArgs[i];
	    });
	  };

	  return {
	    to: function to(classRef) {
	      this.toClass(classRef);
	    },
	    toClass: function toClass(classRef) {
	      var args = parseClass.native(classRef);
	      attachPropertiesToClassInstance(classRef, args);
	    },
	    toBabelClass: function toBabelClass(classRef) {
	      var args = parseClass.babel(classRef);
	      attachPropertiesToClassInstance(classRef, args);
	    }
	  };
	};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var csvToArray = __webpack_require__(2);

	module.exports = function (classToParse) {
	  try {
	    // thanks to: https://davidwalsh.name/javascript-arguments
	    var regex = /function\s.*?\(([^)]*)\)/;
	    var constructorArgsAsCSV = classToParse.constructor.toString().match(regex)[1];

	    if (!constructorArgsAsCSV || constructorArgsAsCSV.length < 1) throw 'The constructor of your class does not have any parameters defined';

	    return csvToArray(constructorArgsAsCSV);
	  } catch (err) {
	    console.error('attach-args: Could not parse provided Babel Class');
	    console.error(err);
	  }
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function (argsCSV) {
	  return argsCSV.split(',').map(function (arg) {
	    return arg.replace(/\/\*.*\*\//, '').trim();
	  }).filter(function (arg) {
	    return arg;
	  });
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var csvToArray = __webpack_require__(2);

	module.exports = function (classToParse) {
	  try {

	    var beginningOfConstructor = classToParse.constructor.toString().indexOf('constructor(');
	    var endOfConstructor = classToParse.constructor.toString().indexOf(')', beginningOfConstructor);
	    var lengthOfConstructor = endOfConstructor - beginningOfConstructor;
	    var constructorArgsAsCSV = classToParse.constructor.toString().substr(beginningOfConstructor, lengthOfConstructor).replace('constructor(', '');

	    if (!constructorArgsAsCSV || constructorArgsAsCSV.length < 1) throw "attach-args: No parameters defined for class constructor.";

	    return csvToArray(constructorArgsAsCSV);
	  } catch (error) {
	    console.error('attach-args: Could not parse provided native Class');
	    console.error(error);
	  }
	};

/***/ }
/******/ ]);