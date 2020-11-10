/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/animateHeader.js":
/*!*************************************!*\
  !*** ./js/modules/animateHeader.js ***!
  \*************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ AnimateHeader\n/* harmony export */ });\nclass AnimateHeader {\r\n  constructor() {\r\n    this.header = document.querySelector(\"[data-header]\");\r\n    this.main = document.querySelector(\"[data-main]\");\r\n    this.changeOpacity = this.changeOpacity.bind(this);\r\n  }\r\n\r\n  changeOpacity() {\r\n    const windowPos = window.scrollY;\r\n    const opacityValue = 1 - (windowPos / 1000);\r\n    this.header.style.opacity = opacityValue;\r\n  }\r\n\r\n  init() {\r\n    this.header.classList.add(\"fixed\");\r\n    this.main.style.marginTop = this.header.offsetHeight + 50 + \"px\";\r\n    window.addEventListener(\"scroll\", this.changeOpacity);\r\n  }\r\n}\n\n//# sourceURL=webpack://template-architechture/./js/modules/animateHeader.js?");

/***/ }),

/***/ "./js/modules/animateNavigation.js":
/*!*****************************************!*\
  !*** ./js/modules/animateNavigation.js ***!
  \*****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ AnimateNavigation\n/* harmony export */ });\nclass AnimateNavigation {\r\n  constructor() {\r\n    this.navigation = document.querySelector(\"[data-navigation]\");\r\n    this.main = document.querySelector(\"[data-main]\");\r\n    this.showNavigation = this.showNavigation.bind(this);\r\n  }\r\n\r\n  showNavigation() {\r\n    const navigationTop = this.navigation.getClientRects()[0].top;\r\n    const mainTop = this.main.getClientRects()[0].top;\r\n    const opacityValue = ((navigationTop - mainTop) / navigationTop);\r\n    this.navigation.style.opacity = opacityValue;\r\n  }\r\n\r\n  init() {\r\n    this.navigation.style.opacity = 0;\r\n    window.addEventListener(\"scroll\", this.showNavigation);\r\n  }\r\n}\n\n//# sourceURL=webpack://template-architechture/./js/modules/animateNavigation.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_animateHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/animateHeader */ \"./js/modules/animateHeader.js\");\n/* harmony import */ var _modules_animateNavigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/animateNavigation */ \"./js/modules/animateNavigation.js\");\n;\r\n\r\n\r\nwindow.onload = () => {\r\n  const animateHeader = new _modules_animateHeader__WEBPACK_IMPORTED_MODULE_0__.default();\r\n  animateHeader.init();\r\n\r\n  const animateNavigation = new _modules_animateNavigation__WEBPACK_IMPORTED_MODULE_1__.default();\r\n  animateNavigation.init();\r\n}\n\n//# sourceURL=webpack://template-architechture/./js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./js/script.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;