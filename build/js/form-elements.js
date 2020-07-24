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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/form-elements/form-elements.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/dropdown/dropdown.js":
/*!*********************************************!*\
  !*** ./src/components/dropdown/dropdown.js ***!
  \*********************************************/
/*! exports provided: dropdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dropdown\", function() { return dropdown; });\nfunction dropdown(elementClassName) {\r\n  console.log('elementClassName');\r\n\r\n  let elementDropDown = document.querySelector(elementClassName),\r\n    gross = [],\r\n    optionMenu = {},\r\n    optionRow = [];\r\n\r\n\r\n  const correctMark = () => {\r\n    if (elementDropDown.classList.contains('dropdown_open')) {\r\n      elementDropDown.querySelector('.dropdown__marker').innerText = 'expand_less'\r\n    } else {\r\n      elementDropDown.querySelector('.dropdown__marker').innerText = 'expand_more'\r\n    }\r\n  };\r\n\r\n  const toggleDropdown = () => {\r\n    elementDropDown.classList.toggle('dropdown_open')\r\n    correctMark()\r\n  };\r\n\r\n  const dropDownClose = () => {\r\n    elementDropDown.classList.remove('dropdown_open')\r\n    correctMark()\r\n  };\r\n\r\n\r\n  function writeSelect() {\r\n    let commonValue = 0;\r\n    let commonString = '';\r\n    let isHaveCommon = false;\r\n    let addString = '';\r\n\r\n\r\n    function goodNaming(value, namingString) {\r\n\r\n      /*\r\n      if (value > 20) {\r\n          value -= 20\r\n          value = value % 10\r\n      }*/\r\n      // console.log(' выбираем имя для ', value, namingString)\r\n      if (value === 0) {\r\n        return namingString[2];\r\n      } else if (value === 1) {\r\n        return namingString[0];\r\n      } else if ((value > 1) && (value < 5)) {\r\n        return namingString[1];\r\n      } else if ((value > 4)) {\r\n        return namingString[2];\r\n      };\r\n    };\r\n\r\n    for (let i = 0; i < gross.length; i++) {\r\n      // console.log(optionRow[i].separate)\r\n      if (optionRow[i].separate.length > 1) {\r\n        // console.log('список нейминга больше 1')\r\n        // строка счиатется отдельно\r\n        if (gross[i] > 0) {\r\n          if (addString !== '') {\r\n            addString += ', ';\r\n          }\r\n          addString += gross[i] + ' ' + goodNaming(gross[i], optionRow[i].separate);\r\n        }\r\n      } else {\r\n        isHaveCommon = true;\r\n        commonValue += gross[i];\r\n      }\r\n    };\r\n\r\n    if (isHaveCommon) {\r\n      commonString = commonValue + ' ' + goodNaming(commonValue, optionMenu.naming);\r\n      if (addString !== '') {\r\n        commonString += ', ';\r\n      }\r\n    };\r\n\r\n    elementDropDown.querySelector('.dropdown__selection').innerHTML = commonString + addString;\r\n\r\n  };\r\n\r\n  document.addEventListener('click', event => {\r\n    if (!event.target.closest(elementClassName)) {\r\n      dropDownClose();\r\n    }\r\n  });\r\n\r\n  optionMenu.initSelection = elementDropDown.querySelector('.dropdown__selection').innerHTML\r\n  optionMenu.naming = elementDropDown.querySelector('.dropdown__menu').dataset.separate.split(',');\r\n\r\n\r\n  for (let i = 0; i < elementDropDown.querySelector('.dropdown__menu').childElementCount; i++) {\r\n\r\n    let elementRow = elementDropDown.querySelector('.dropdown__menu').children[i]\r\n\r\n    if (!elementRow.classList.contains('dropdown__menu-row_buttons')) {\r\n      // Обработка событий по нажатию кнопок инкремента и декремента\r\n      gross[i] = Number(elementRow.dataset.mincount)\r\n\r\n      optionRow[i] = {\r\n        mincount: gross[i],\r\n        maxcount: (Number(elementRow.dataset.maxcount)) ? Number(elementRow.dataset.maxcount) : Infinity,\r\n        separate: elementRow.dataset.separate.split(',')\r\n      }\r\n\r\n      elementRow.addEventListener('click', event => {\r\n        if (event.target.closest('.dropdown__control-decrement')) {\r\n          if (gross[i] > optionRow[i].mincount) {\r\n            gross[i]--;\r\n            elementRow.querySelector('.dropdown__control-count').innerHTML = gross[i]\r\n            writeSelect();\r\n          }\r\n        }\r\n        if (event.target.closest('.dropdown__control-increment')) {\r\n          if (gross[i] < optionRow[i].maxcount) {\r\n            gross[i]++;\r\n            elementRow.querySelector('.dropdown__control-count').innerHTML = gross[i];\r\n            writeSelect();\r\n          }\r\n        }\r\n      })\r\n    } else {\r\n      // Обработка событий по нажатию кнопок выбора и отмены\r\n      elementRow.addEventListener('click', event => {\r\n        if (event.target.closest('.dropdown__button-clear')) {\r\n          for (let i = 0; i < optionRow.length; i++) {\r\n            gross[i] = optionRow[i].mincount\r\n            elementDropDown.querySelector('.dropdown__menu').children[i].querySelector('.dropdown__control-count').innerHTML = gross[i]\r\n          }\r\n          elementDropDown.querySelector('.dropdown__selection').innerHTML = optionMenu.initSelection\r\n        }\r\n\r\n        if (event.target.closest('.dropdown__button-submit')) {\r\n          dropDownClose()\r\n        }\r\n      })\r\n    }\r\n  }\r\n\r\n   elementDropDown.addEventListener('click', event => {\r\n     if (!(event.target.closest('.dropdown__menu')) && (event.target.closest(elementClassName))) {\r\n       toggleDropdown()\r\n     }\r\n   });\r\n\r\n   function getValue() {\r\n     return gross\r\n   };\r\n\r\n   // console.log('настройка ', elementClassName, ' закончена')\r\n\r\n   correctMark();\r\n\r\n   return {\r\n     getValue: getValue\r\n   };\r\n\r\n};\n\n//# sourceURL=webpack:///./src/components/dropdown/dropdown.js?");

/***/ }),

/***/ "./src/pages/form-elements/form-elements.js":
/*!**************************************************!*\
  !*** ./src/pages/form-elements/form-elements.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _form_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-elements */ \"./src/pages/form-elements/form-elements.js\");\n/* harmony import */ var _components_dropdown_dropdown_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/dropdown/dropdown.js */ \"./src/components/dropdown/dropdown.js\");\n// Styles\r\n\r\n\r\n\r\n\r\n\r\n\r\nvar readyPage = (callback) => {\r\n  if (document.readyState != \"loading\") callback();\r\n  else document.addEventListener(\"DOMContentLoaded\", callback);\r\n}\r\n\r\n\r\nreadyPage(() => {\r\n  //const maskedTextDate = new MaskedTextField('date')\r\n\r\n  const demoDropDownVisitors = new _components_dropdown_dropdown_js__WEBPACK_IMPORTED_MODULE_1__[\"dropdown\"]('.dropdown-visitors');\r\n  const demoDropDownVisitorsWithoutClear = new _components_dropdown_dropdown_js__WEBPACK_IMPORTED_MODULE_1__[\"dropdown\"]('.dropdown-visitors-without-clear');\r\n  const demoDropDownVisitorsClear = new _components_dropdown_dropdown_js__WEBPACK_IMPORTED_MODULE_1__[\"dropdown\"]('.dropdown-visitors-clear');\r\n\r\n  const demoDropDownEnarenmentClose = new _components_dropdown_dropdown_js__WEBPACK_IMPORTED_MODULE_1__[\"dropdown\"]('.dropdown-envarenment-close');\r\n  const demoDropDownEnarenmentOpen = new _components_dropdown_dropdown_js__WEBPACK_IMPORTED_MODULE_1__[\"dropdown\"]('.dropdown-envarenment-open');\r\n});\r\n\r\n// изображения\r\n// import '../../modules/comment/img/avatar-free.png'\r\n// import './images/avatar.png'\r\n// import '../../modules/logo/images/logo.svg'\r\n// import '../../modules/logo/images/logo-gray.svg'\r\n// import '../../modules/logo/images/logo-mobile.svg'\r\n\r\n\r\n// собственные модули\r\n// import '../../modules/field-checkbox/field-checkbox'\r\n\n\n//# sourceURL=webpack:///./src/pages/form-elements/form-elements.js?");

/***/ })

/******/ });