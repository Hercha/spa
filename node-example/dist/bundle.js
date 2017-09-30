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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _functions = __webpack_require__(1);

(0, _functions.hello)(); // var hello = require( './functions.js' );
// hello();

// const foo = 'Helloo';
//foo = 5;
// let bar = 20;

// console.log(foo);
// console.log(bar);

// function hello(){
//     console.log('Hello!');
// }
// hello();

// var hello2 = () => console.log('Hi!');
//  hello2();

//  var hello3 = (param1) => {
//      console.log(param1);
//  }
//  hello3('Hej!');

//  var foo = {
//      prop1: 11,
//      prop2: function () {
//          console.log(this.prop1);
//      }
//  };

// foo.prop2();

//  var foo2 = {
//     prop1: 21,
//     prop2: () => {
//         console.log(foo2.prop1);
//     }
// };

//  foo2.prop2();

// import hello from './functions';
// hello();

// import foo from './functions';
// foo();

// import { num as custom_name} from './functions';
// console.log(custom_name);

// import hello, { num } from './functions';

console.log(_functions.num);

// const obj = {
//     prop1: 5,
//     prop2: 100
// };

//const prop2 = obj.prop2;
// const { prop1, prop2 } = obj;

// console.log( obj.prop2 );
// console.log( prop2 );

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
// var hello = function(){
//     console.log('Hello');
// };

// module.exports = hello;

// const hello = () => {
//     console.log("Helloo!");
// };

// export default hello;
var hello = exports.hello = function hello() {
    console.log("Helloo!!");
};
var num = exports.num = 55;

/***/ })
/******/ ]);