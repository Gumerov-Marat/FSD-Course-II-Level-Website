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

/***/ "./src/components/dropdown/dropdown.js":
/*!*********************************************!*\
  !*** ./src/components/dropdown/dropdown.js ***!
  \*********************************************/
/*! exports provided: dropdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dropdown\", function() { return dropdown; });\nfunction dropdown(elementClassName) {\r\n  console.log('elementClassName');\r\n\r\n  let elementDropDown = document.querySelector(elementClassName),\r\n    gross = [],\r\n    optionMenu = {},\r\n    optionRow = [];\r\n\r\n\r\n  const correctMark = () => {\r\n    if (elementDropDown.classList.contains('dropdown_open')) {\r\n      elementDropDown.querySelector('.dropdown__marker').innerText = 'expand_less'\r\n    } else {\r\n      elementDropDown.querySelector('.dropdown__marker').innerText = 'expand_more'\r\n    }\r\n  };\r\n\r\n  const toggleDropdown = () => {\r\n    elementDropDown.classList.toggle('dropdown_open')\r\n    correctMark()\r\n  };\r\n\r\n  const dropDownClose = () => {\r\n    elementDropDown.classList.remove('dropdown_open')\r\n    correctMark()\r\n  };\r\n\r\n\r\n  function writeSelect() {\r\n    let commonValue = 0;\r\n    let commonString = '';\r\n    let isHaveCommon = false;\r\n    let addString = '';\r\n\r\n\r\n    function goodNaming(value, namingString) {\r\n\r\n      /*\r\n      if (value > 20) {\r\n          value -= 20\r\n          value = value % 10\r\n      }*/\r\n      // console.log(' выбираем имя для ', value, namingString)\r\n      if (value === 0) {\r\n        return namingString[2];\r\n      } else if (value === 1) {\r\n        return namingString[0];\r\n      } else if ((value > 1) && (value < 5)) {\r\n        return namingString[1];\r\n      } else if ((value > 4)) {\r\n        return namingString[2];\r\n      };\r\n    };\r\n\r\n    for (let i = 0; i < gross.length; i++) {\r\n      // console.log(optionRow[i].separate)\r\n      if (optionRow[i].separate.length > 1) {\r\n        // console.log('список нейминга больше 1')\r\n        // строка счиатется отдельно\r\n        if (gross[i] > 0) {\r\n          if (addString !== '') {\r\n            addString += ', ';\r\n          }\r\n          addString += gross[i] + ' ' + goodNaming(gross[i], optionRow[i].separate);\r\n        }\r\n      } else {\r\n        isHaveCommon = true;\r\n        commonValue += gross[i];\r\n      }\r\n    };\r\n\r\n    if (isHaveCommon) {\r\n      commonString = commonValue + ' ' + goodNaming(commonValue, optionMenu.naming);\r\n      if (addString !== '') {\r\n        commonString += ', ';\r\n      }\r\n    };\r\n\r\n    elementDropDown.querySelector('.dropdown__selection').innerHTML = commonString + addString;\r\n\r\n  };\r\n\r\n  document.addEventListener('click', event => {\r\n    if (!event.target.closest(elementClassName)) {\r\n      dropDownClose();\r\n    }\r\n  });\r\n\r\n  optionMenu.initSelection = elementDropDown.querySelector('.dropdown__selection').innerHTML\r\n  optionMenu.naming = elementDropDown.querySelector('.dropdown__menu').dataset.separate.split(',');\r\n\r\n\r\n  for (let i = 0; i < elementDropDown.querySelector('.dropdown__menu').childElementCount; i++) {\r\n\r\n    let elementRow = elementDropDown.querySelector('.dropdown__menu').children[i]\r\n\r\n    if (!elementRow.classList.contains('dropdown__menu-row_buttons')) {\r\n      // Обработка событий по нажатию кнопок инкремента и декремента\r\n      gross[i] = Number(elementRow.dataset.mincount)\r\n\r\n      optionRow[i] = {\r\n        mincount: gross[i],\r\n        maxcount: (Number(elementRow.dataset.maxcount)) ? Number(elementRow.dataset.maxcount) : Infinity,\r\n        separate: elementRow.dataset.separate.split(',')\r\n      }\r\n\r\n      elementRow.addEventListener('click', event => {\r\n        if (event.target.closest('.dropdown__control-decrement')) {\r\n          if (gross[i] > optionRow[i].mincount) {\r\n            gross[i]--;\r\n            elementRow.querySelector('.dropdown__control-count').innerHTML = gross[i]\r\n            writeSelect();\r\n          }\r\n        }\r\n        if (event.target.closest('.dropdown__control-increment')) {\r\n          if (gross[i] < optionRow[i].maxcount) {\r\n            gross[i]++;\r\n            elementRow.querySelector('.dropdown__control-count').innerHTML = gross[i];\r\n            writeSelect();\r\n          }\r\n        }\r\n      })\r\n    } else {\r\n      // Обработка событий по нажатию кнопок выбора и отмены\r\n      elementRow.addEventListener('click', event => {\r\n        if (event.target.closest('.dropdown__button-clear')) {\r\n          for (let i = 0; i < optionRow.length; i++) {\r\n            gross[i] = optionRow[i].mincount\r\n            elementDropDown.querySelector('.dropdown__menu').children[i].querySelector('.dropdown__control-count').innerHTML = gross[i]\r\n          }\r\n          elementDropDown.querySelector('.dropdown__selection').innerHTML = optionMenu.initSelection\r\n        }\r\n\r\n        if (event.target.closest('.dropdown__button-submit')) {\r\n          dropDownClose()\r\n        }\r\n      })\r\n    }\r\n  }\r\n\r\n   elementDropDown.addEventListener('click', event => {\r\n     if (!(event.target.closest('.dropdown__menu')) && (event.target.closest(elementClassName))) {\r\n       toggleDropdown()\r\n     }\r\n   });\r\n\r\n   function getValue() {\r\n     return gross\r\n   };\r\n\r\n   // console.log('настройка ', elementClassName, ' закончена')\r\n\r\n   correctMark();\r\n\r\n   return {\r\n     getValue: getValue\r\n   };\r\n\r\n};\n\n//# sourceURL=webpack:///./src/components/dropdown/dropdown.js?");

/***/ }),

/***/ "./src/components/expandable-checkbox-list/expandable-checkbox-list.js":
/*!*****************************************************************************!*\
  !*** ./src/components/expandable-checkbox-list/expandable-checkbox-list.js ***!
  \*****************************************************************************/
/*! exports provided: expCheckboxList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"expCheckboxList\", function() { return expCheckboxList; });\nfunction expCheckboxList(elementClassName) {\r\n  let elementChekboxList = document.querySelector(elementClassName)\r\n\r\n  const toggleCheckboxList = () => {\r\n    elementChekboxList.classList.toggle('expandable-checkbox-list_open')\r\n  }\r\n\r\n  const closeCheckboxList = () => {\r\n    elementChekboxList.classList.remove('expandable-checkbox-list_open')\r\n  }\r\n\r\n\r\n  function correctMark() {\r\n    if (elementChekboxList.classList.contains('expandable-checkbox-list_open')) {\r\n      elementChekboxList.querySelector('.expandable-checkbox-list__toggle-marker').innerText = 'expand_less'\r\n    } else {\r\n      elementChekboxList.querySelector('.expandable-checkbox-list__toggle-marker').innerText = 'expand_more'\r\n    }\r\n  }\r\n\r\n  document.addEventListener('click', event => {\r\n    if (!event.target.closest(elementClassName)) {\r\n      closeCheckboxList()\r\n      correctMark()\r\n    }\r\n  })\r\n\r\n  document.addEventListener('click', event => {\r\n    if (!(event.target.closest('.expandable-checkbox-list__menu')) && (event.target.closest(elementClassName))) {\r\n      toggleCheckboxList()\r\n      correctMark()\r\n    }\r\n  })\r\n\r\n  function getList() {\r\n    let grossCheckList = []\r\n    for (let i = 0; i < elementChekboxList.querySelector('.expandable-checkbox-list__menu').children.length; i++) {\r\n      let fieldCheckboxElement = elementChekboxList.querySelector('.expandable-checkbox-list__menu').children[i]\r\n      grossCheckList[i] = {}\r\n      grossCheckList[i].fieldCheckboxName = fieldCheckboxElement.querySelector('.field-checkbox').dataset.name\r\n      grossCheckList[i].fieldCheckboxState = fieldCheckboxElement.querySelector('.field-checkbox__input').checked\r\n    }\r\n    return grossCheckList\r\n  }\r\n\r\n  correctMark()\r\n\r\n  return {\r\n    getList: getList\r\n  }\r\n}\n\n//# sourceURL=webpack:///./src/components/expandable-checkbox-list/expandable-checkbox-list.js?");

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

/***/ "./src/components/masked-text-field/masked-text-field.js":
/*!***************************************************************!*\
  !*** ./src/components/masked-text-field/masked-text-field.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/components/masked-text-field/masked-text-field.js?");

/***/ }),

/***/ "./src/components/pagination/pagination.js":
/*!*************************************************!*\
  !*** ./src/components/pagination/pagination.js ***!
  \*************************************************/
/*! exports provided: Pager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Pager\", function() { return Pager; });\nclass Pager {\r\n  constructor(props = {}) {\r\n    // Принимает объект с ключами\r\n    // items        число элементов\r\n    // itemsOnPage  количество элементов на листе\r\n    // element      DOM елемент для пагинатора\r\n    this.items = props.items\r\n    this.pagerPrev = document.createElement('a')\r\n    this.pagerNext = document.createElement('a')\r\n    this.pagerPrev.classList.add('pager__item', 'pager__item_prev', 'pager__item_hiden')\r\n    this.pagerNext.classList.add('pager__item', 'pager__item_next')\r\n    this.pagerPrev.innerText = 'arrow_backforward'\r\n    this.pagerNext.innerText = 'arrow_forward'\r\n    this.pagerVisible = []\r\n    this.itemsOnPage = props.itemsOnPage\r\n    this.element = document.querySelector(props.element)\r\n    this.child = document.createDocumentFragment()\r\n\r\n    this.child.appendChild(this.pagerPrev)\r\n\r\n\r\n    for (let i = 0; i < this.itemsOnPage; i++) {\r\n\r\n      this.pagerVisible[i] = document.createElement('a')\r\n      this.pagerVisible[i].classList.add('pager__item')\r\n\r\n      // если число элементов меньше отображаемого числа, то создаем только их\r\n      if (i >= this.items) {\r\n        this.pagerVisible[i].classList.add('pager__item_empty')\r\n      } else {\r\n        this.pagerVisible[i].innerText = i + 1\r\n      }\r\n\r\n      this.child.appendChild(this.pagerVisible[i])\r\n    }\r\n\r\n    // Первый элемент активный\r\n    this.pagerVisible[0].classList.add('pager__item_active')\r\n\r\n    this.pagerVisible[0].classList.add('pager__item_activ')\r\n\r\n    if (this.items > this.itemsOnPage) {\r\n      this.pagerVisible[this.itemsOnPage - 2].classList.add('pager__item_free')\r\n      this.pagerVisible[this.itemsOnPage - 2].innerText = ''\r\n      this.pagerVisible[this.itemsOnPage - 1].innerText = this.items\r\n    }\r\n\r\n    if (this.items > 1) {\r\n      this.child.appendChild(this.pagerNext)\r\n    }\r\n\r\n    this.element.appendChild(this.child)\r\n  }\r\n\r\n}\r\n\n\n//# sourceURL=webpack:///./src/components/pagination/pagination.js?");

/***/ }),

/***/ "./src/pages/form-elements/form-elements.js":
/*!**************************************************!*\
  !*** ./src/pages/form-elements/form-elements.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _form_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-elements */ \"./src/pages/form-elements/form-elements.js\");\n/* harmony import */ var _components_dropdown_dropdown_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/dropdown/dropdown.js */ \"./src/components/dropdown/dropdown.js\");\n/* harmony import */ var _components_masked_text_field_masked_text_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/masked-text-field/masked-text-field */ \"./src/components/masked-text-field/masked-text-field.js\");\n/* harmony import */ var _components_masked_text_field_masked_text_field__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_masked_text_field_masked_text_field__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_expandable_checkbox_list_expandable_checkbox_list_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/expandable-checkbox-list/expandable-checkbox-list.js */ \"./src/components/expandable-checkbox-list/expandable-checkbox-list.js\");\n/* harmony import */ var _components_pagination_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../components/pagination/pagination */ \"./src/components/pagination/pagination.js\");\n/* harmony import */ var _assets_images_avatar_free_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/images/avatar-free.png */ \"./src/assets/images/avatar-free.png\");\n/* harmony import */ var _assets_images_avatar_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/images/avatar.png */ \"./src/assets/images/avatar.png\");\n/* harmony import */ var _components_logo_images_logo_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/logo/images/logo.svg */ \"./src/components/logo/images/logo.svg\");\n/* harmony import */ var _components_logo_images_logo_gray_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/logo/images/logo-gray.svg */ \"./src/components/logo/images/logo-gray.svg\");\n/* harmony import */ var _components_logo_images_logo_mobile_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/logo/images/logo-mobile.svg */ \"./src/components/logo/images/logo-mobile.svg\");\n// Styles\r\n\r\n\r\n\r\n//import '../../components/field-checkbox/field-checkbox'; // неизвестный блок\r\n\r\n\r\n\r\n\r\n\r\n\r\nvar readyPage = (callback) => {\r\n  if (document.readyState != \"loading\") callback();\r\n  else document.addEventListener(\"DOMContentLoaded\", callback);\r\n}\r\n\r\n\r\nreadyPage(() => {\r\n  //const maskedTextDate = new MaskedTextField('date')\r\n\r\n  const demoDropDownVisitors = new _components_dropdown_dropdown_js__WEBPACK_IMPORTED_MODULE_1__[\"dropdown\"]('.dropdown-visitors');\r\n  const demoDropDownVisitorsWithoutClear = new _components_dropdown_dropdown_js__WEBPACK_IMPORTED_MODULE_1__[\"dropdown\"]('.dropdown-visitors-without-clear');\r\n  const demoDropDownVisitorsClear = new _components_dropdown_dropdown_js__WEBPACK_IMPORTED_MODULE_1__[\"dropdown\"]('.dropdown-visitors-clear');\r\n\r\n  const demoDropDownEnarenmentClose = new _components_dropdown_dropdown_js__WEBPACK_IMPORTED_MODULE_1__[\"dropdown\"]('.dropdown-envarenment-close');\r\n  const demoDropDownEnarenmentOpen = new _components_dropdown_dropdown_js__WEBPACK_IMPORTED_MODULE_1__[\"dropdown\"]('.dropdown-envarenment-open');\r\n\r\n\r\n   // блок Paginator\r\n   const pager = new _components_pagination_pagination__WEBPACK_IMPORTED_MODULE_4__[\"Pager\"]({\r\n     items: 15,\r\n     itemsOnPage: 5,\r\n     element: '.pager'\r\n   })\r\n});\r\n\r\n// изображения\r\n \r\n \r\n \r\n \r\n \r\n\r\n\r\n// собственные модули\r\n// import '../../modules/field-checkbox/field-checkbox'\r\n\r\n\n\n//# sourceURL=webpack:///./src/pages/form-elements/form-elements.js?");

/***/ })

/******/ });