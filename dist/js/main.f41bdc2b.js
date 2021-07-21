/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nError: Plugin/Preset files are not allowed to export objects, only functions. In /Users/creditease/Desktop/react_demo/node_modules/babel-preset-es2015/lib/index.js\\n    at createDescriptor (/Users/creditease/Desktop/react_demo/node_modules/@babel/core/lib/config/config-descriptors.js:211:11)\\n    at createDescriptor.next (<anonymous>)\\n    at evaluateSync (/Users/creditease/Desktop/react_demo/node_modules/gensync/index.js:251:28)\\n    at /Users/creditease/Desktop/react_demo/node_modules/gensync/index.js:31:34\\n    at Array.map (<anonymous>)\\n    at Function.sync (/Users/creditease/Desktop/react_demo/node_modules/gensync/index.js:31:22)\\n    at Function.all (/Users/creditease/Desktop/react_demo/node_modules/gensync/index.js:210:24)\\n    at Generator.next (<anonymous>)\\n    at createDescriptors (/Users/creditease/Desktop/react_demo/node_modules/@babel/core/lib/config/config-descriptors.js:142:41)\\n    at createDescriptors.next (<anonymous>)\\n    at createPresetDescriptors (/Users/creditease/Desktop/react_demo/node_modules/@babel/core/lib/config/config-descriptors.js:134:17)\\n    at createPresetDescriptors.next (<anonymous>)\\n    at presets (/Users/creditease/Desktop/react_demo/node_modules/@babel/core/lib/config/config-descriptors.js:73:26)\\n    at presets.next (<anonymous>)\\n    at mergeChainOpts (/Users/creditease/Desktop/react_demo/node_modules/@babel/core/lib/config/config-chain.js:420:34)\\n    at mergeChainOpts.next (<anonymous>)\\n    at /Users/creditease/Desktop/react_demo/node_modules/@babel/core/lib/config/config-chain.js:378:14\\n    at Generator.next (<anonymous>)\\n    at loadFileChain (/Users/creditease/Desktop/react_demo/node_modules/@babel/core/lib/config/config-chain.js:232:24)\\n    at loadFileChain.next (<anonymous>)\\n    at buildRootChain (/Users/creditease/Desktop/react_demo/node_modules/@babel/core/lib/config/config-chain.js:135:31)\\n    at buildRootChain.next (<anonymous>)\\n    at loadPrivatePartialConfig (/Users/creditease/Desktop/react_demo/node_modules/@babel/core/lib/config/partial.js:103:62)\\n    at loadPrivatePartialConfig.next (<anonymous>)\\n    at Function.<anonymous> (/Users/creditease/Desktop/react_demo/node_modules/@babel/core/lib/config/partial.js:149:25)\\n    at Generator.next (<anonymous>)\\n    at evaluateSync (/Users/creditease/Desktop/react_demo/node_modules/gensync/index.js:251:28)\\n    at Function.sync (/Users/creditease/Desktop/react_demo/node_modules/gensync/index.js:89:14)\\n    at Object.<anonymous> (/Users/creditease/Desktop/react_demo/node_modules/@babel/core/lib/config/index.js:46:61)\\n    at Object.<anonymous> (/Users/creditease/Desktop/react_demo/node_modules/babel-loader/lib/index.js:151:26)\");\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });