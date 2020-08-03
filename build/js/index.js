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

/***/ "./src sync recursive \\.(png|svg|jpg|gif)$":
/*!***************************************!*\
  !*** ./src sync \.(png|svg|jpg|gif)$ ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./assets/fonts/MaterialIcons-Regular.svg\": \"./src/assets/fonts/MaterialIcons-Regular.svg\",\n\t\"./assets/fonts/Montserrat-Bold.svg\": \"./src/assets/fonts/Montserrat-Bold.svg\",\n\t\"./assets/fonts/Montserrat-Regular.svg\": \"./src/assets/fonts/Montserrat-Regular.svg\",\n\t\"./assets/fonts/OpenSans-Bold.svg\": \"./src/assets/fonts/OpenSans-Bold.svg\",\n\t\"./assets/fonts/OpenSans-Regular.svg\": \"./src/assets/fonts/OpenSans-Regular.svg\",\n\t\"./assets/fonts/Quicksand-Bold.svg\": \"./src/assets/fonts/Quicksand-Bold.svg\",\n\t\"./assets/fonts/Quicksand-Regular.svg\": \"./src/assets/fonts/Quicksand-Regular.svg\",\n\t\"./assets/images/avatar-free.png\": \"./src/assets/images/avatar-free.png\",\n\t\"./assets/images/avatar.png\": \"./src/assets/images/avatar.png\",\n\t\"./components/logo/images/logo-gray.svg\": \"./src/components/logo/images/logo-gray.svg\",\n\t\"./components/logo/images/logo-mobile.svg\": \"./src/components/logo/images/logo-mobile.svg\",\n\t\"./components/logo/images/logo.svg\": \"./src/components/logo/images/logo.svg\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src sync recursive \\\\.(png|svg|jpg|gif)$\";\n\n//# sourceURL=webpack:///./src_sync_\\.(png%7Csvg%7Cjpg%7Cgif)$?");

/***/ }),

/***/ "./src/app/app.js":
/*!************************!*\
  !*** ./src/app/app.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/app/app.js?");

/***/ }),

/***/ "./src/assets/fonts/MaterialIcons-Regular.svg":
/*!****************************************************!*\
  !*** ./src/assets/fonts/MaterialIcons-Regular.svg ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"fonts/MaterialIcons-Regular.svg\");\n\n//# sourceURL=webpack:///./src/assets/fonts/MaterialIcons-Regular.svg?");

/***/ }),

/***/ "./src/assets/fonts/Montserrat-Bold.svg":
/*!**********************************************!*\
  !*** ./src/assets/fonts/Montserrat-Bold.svg ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"fonts/Montserrat-Bold.svg\");\n\n//# sourceURL=webpack:///./src/assets/fonts/Montserrat-Bold.svg?");

/***/ }),

/***/ "./src/assets/fonts/Montserrat-Regular.svg":
/*!*************************************************!*\
  !*** ./src/assets/fonts/Montserrat-Regular.svg ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"fonts/Montserrat-Regular.svg\");\n\n//# sourceURL=webpack:///./src/assets/fonts/Montserrat-Regular.svg?");

/***/ }),

/***/ "./src/assets/fonts/OpenSans-Bold.svg":
/*!********************************************!*\
  !*** ./src/assets/fonts/OpenSans-Bold.svg ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"fonts/OpenSans-Bold.svg\");\n\n//# sourceURL=webpack:///./src/assets/fonts/OpenSans-Bold.svg?");

/***/ }),

/***/ "./src/assets/fonts/OpenSans-Regular.svg":
/*!***********************************************!*\
  !*** ./src/assets/fonts/OpenSans-Regular.svg ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"fonts/OpenSans-Regular.svg\");\n\n//# sourceURL=webpack:///./src/assets/fonts/OpenSans-Regular.svg?");

/***/ }),

/***/ "./src/assets/fonts/Quicksand-Bold.svg":
/*!*********************************************!*\
  !*** ./src/assets/fonts/Quicksand-Bold.svg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"fonts/Quicksand-Bold.svg\");\n\n//# sourceURL=webpack:///./src/assets/fonts/Quicksand-Bold.svg?");

/***/ }),

/***/ "./src/assets/fonts/Quicksand-Regular.svg":
/*!************************************************!*\
  !*** ./src/assets/fonts/Quicksand-Regular.svg ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"fonts/Quicksand-Regular.svg\");\n\n//# sourceURL=webpack:///./src/assets/fonts/Quicksand-Regular.svg?");

/***/ }),

/***/ "./src/assets/images/avatar-free.png":
/*!*******************************************!*\
  !*** ./src/assets/images/avatar-free.png ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/avatar-free.png\");\n\n//# sourceURL=webpack:///./src/assets/images/avatar-free.png?");

/***/ }),

/***/ "./src/assets/images/avatar.png":
/*!**************************************!*\
  !*** ./src/assets/images/avatar.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/avatar.png\");\n\n//# sourceURL=webpack:///./src/assets/images/avatar.png?");

/***/ }),

/***/ "./src/components/logo/images/logo-gray.svg":
/*!**************************************************!*\
  !*** ./src/components/logo/images/logo-gray.svg ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/logo-gray.svg\");\n\n//# sourceURL=webpack:///./src/components/logo/images/logo-gray.svg?");

/***/ }),

/***/ "./src/components/logo/images/logo-mobile.svg":
/*!****************************************************!*\
  !*** ./src/components/logo/images/logo-mobile.svg ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/logo-mobile.svg\");\n\n//# sourceURL=webpack:///./src/components/logo/images/logo-mobile.svg?");

/***/ }),

/***/ "./src/components/logo/images/logo.svg":
/*!*********************************************!*\
  !*** ./src/components/logo/images/logo.svg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/logo.svg\");\n\n//# sourceURL=webpack:///./src/components/logo/images/logo.svg?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.js */ \"./src/app/app.js\");\n/* harmony import */ var _app_app_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_app_app_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ \"./src/index.scss\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n// ВАЖНАЯ СТРОКА ДЛЯ ИМПОРТА ФАЙЛОВ В БИЛД НЕ УДАЛЯТь\r\n__webpack_require__(\"./src sync recursive \\\\.(png|svg|jpg|gif)$\");\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\\nSassError: File to import not found or unreadable: ../widget/widget.\\n        on line 2 of src/components/footer/footer.scss\\n        from line 6 of src/pages/headers-and-footers/headers-and-footers.scss\\n        from line 9 of C:\\\\projects4\\\\FSD-Course-II-Level-Website\\\\src\\\\index.scss\\n>> @import '../widget/widget';\\r\\n   ^\\n\\n    at C:\\\\projects4\\\\FSD-Course-II-Level-Website\\\\node_modules\\\\webpack\\\\lib\\\\NormalModule.js:316:20\\n    at C:\\\\projects4\\\\FSD-Course-II-Level-Website\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:367:11\\n    at C:\\\\projects4\\\\FSD-Course-II-Level-Website\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:233:18\\n    at context.callback (C:\\\\projects4\\\\FSD-Course-II-Level-Website\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:111:13)\\n    at Object.callback (C:\\\\projects4\\\\FSD-Course-II-Level-Website\\\\node_modules\\\\sass-loader\\\\dist\\\\index.js:73:7)\\n    at Object.done [as callback] (C:\\\\projects4\\\\FSD-Course-II-Level-Website\\\\node_modules\\\\neo-async\\\\async.js:8067:18)\\n    at options.error (C:\\\\projects4\\\\FSD-Course-II-Level-Website\\\\node_modules\\\\node-sass\\\\lib\\\\index.js:294:32)\");\n\n//# sourceURL=webpack:///./src/index.scss?");

/***/ })

/******/ });