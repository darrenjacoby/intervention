/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayLikeToArray)
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithHoles)
/* harmony export */ });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithoutHoles)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.default)(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArray)
/* harmony export */ });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArrayLimit)
/* harmony export */ });
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableRest)
/* harmony export */ });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableSpread)
/* harmony export */ });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _slicedToArray)
/* harmony export */ });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return (0,_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__.default)(arr) || (0,_iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__.default)(arr, i) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__.default)(arr, i) || (0,_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__.default)();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _toConsumableArray)
/* harmony export */ });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__.default)(arr) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__.default)(arr) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__.default)(arr) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__.default)();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _unsupportedIterableToArray)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.default)(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.default)(o, minLen);
}

/***/ }),

/***/ "./resources/scripts/user-interface/components/Admin.js":
/*!**************************************************************!*\
  !*** ./resources/scripts/user-interface/components/Admin.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Page_Page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Page/Page */ "./resources/scripts/user-interface/components/Page/Page.js");
/* harmony import */ var _Page_Sidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Page/Sidebar */ "./resources/scripts/user-interface/components/Page/Sidebar.js");
/* harmony import */ var _Admin_Head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Admin/Head */ "./resources/scripts/user-interface/components/Admin/Head.js");
/* harmony import */ var _Admin_Components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Admin/Components */ "./resources/scripts/user-interface/components/Admin/Components.js");
/* harmony import */ var _AdminContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AdminContext */ "./resources/scripts/user-interface/components/AdminContext.js");
/* harmony import */ var _utils_admin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/admin */ "./resources/scripts/user-interface/utils/admin.js");
/* harmony import */ var _utils_wp__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/wp */ "./resources/scripts/user-interface/utils/wp.js");


 // import { usePrompt } from 'react-router-dom';











_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4___default().use(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4___default().createNonceMiddleware(intervention.nonce));
/*
const objHasProp = (obj, key) => {
  return Object.prototype.hasOwnProperty.call(obj, key);
};
*/

/**
 * Admin
 */

var Admin = function Admin() {
  var dataInit = {
    roles: {
      group: [],
      immutable: false
    },
    components: []
  };

  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)([dataInit]),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var _useState3 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState3, 2),
      index = _useState4[0],
      setIndex = _useState4[1];

  var _useState5 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(dataInit),
      _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState5, 2),
      dataIndex = _useState6[0],
      setDataIndex = _useState6[1];

  var _useState7 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState8 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState7, 2),
      isBlocking = _useState8[0],
      setIsBlocking = _useState8[1];

  var _useState9 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState10 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState9, 2),
      isLoaded = _useState10[0],
      setIsLoaded = _useState10[1];

  var get = function get() {
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4___default()({
      method: 'POST',
      url: intervention.route.admin.url
    }).then(function (res) {
      if (res !== null && res !== void 0 && res.data) {
        var sorted = (0,_utils_admin__WEBPACK_IMPORTED_MODULE_10__.sortDataByRoleKeys)(res.data, index);
        setData(sorted.data);
        setDataIndex(sorted.data[index]);
        setIsBlocking(false);
        setIsLoaded(true);
      }
    });
  };

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    return get();
  }, []);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    return setDataIndex(data[index]);
  }, [index]); // useEffect(() => console.log(dataIndex.components), [dataIndex]);

  /**
   * Render
   */

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_AdminContext__WEBPACK_IMPORTED_MODULE_9__.default.Provider, {
    value: {
      data: data,
      setData: setData,
      index: index,
      setIndex: setIndex,
      dataIndex: dataIndex,
      setDataIndex: setDataIndex,
      isBlocking: isBlocking,
      setIsBlocking: setIsBlocking
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_Page_Page__WEBPACK_IMPORTED_MODULE_5__.default, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "w-full flex-1"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_Admin_Head__WEBPACK_IMPORTED_MODULE_7__.default, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_Admin_Components__WEBPACK_IMPORTED_MODULE_8__.default, null)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_Page_Sidebar__WEBPACK_IMPORTED_MODULE_6__.default, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Panel, {
    className: "border-0 border-b border-gray-5"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_utils_wp__WEBPACK_IMPORTED_MODULE_11__.__)('Show'),
    icon: _wordpress_element__WEBPACK_IMPORTED_MODULE_1__.more,
    initialOpen: true,
    className: "w-full"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RadioControl, {
    selected: "all",
    options: [{
      label: (0,_utils_wp__WEBPACK_IMPORTED_MODULE_11__.__)('All'),
      value: 'all'
    }, {
      label: (0,_utils_wp__WEBPACK_IMPORTED_MODULE_11__.__)('Applied'),
      value: 'applied'
    }],
    onChange: function onChange(value) {
      return console.log(value);
    }
  })))))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Admin);

/***/ }),

/***/ "./resources/scripts/user-interface/components/Admin/AddRoleGroup.js":
/*!***************************************************************************!*\
  !*** ./resources/scripts/user-interface/components/Admin/AddRoleGroup.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _AdminContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../AdminContext */ "./resources/scripts/user-interface/components/AdminContext.js");
/* harmony import */ var _utils_wp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/wp */ "./resources/scripts/user-interface/utils/wp.js");







/**
 * Role Group Edit
 *
 * @returns <Roles />
 */

var AddRoleGroup = function AddRoleGroup() {
  var _useContext = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useContext)(_AdminContext__WEBPACK_IMPORTED_MODULE_4__.default),
      data = _useContext.data,
      setData = _useContext.setData,
      setIndex = _useContext.setIndex;

  var addRoleGroup = function addRoleGroup() {
    var roles = {
      group: ['administrator'],
      immutable: false
    };
    var template = {
      roles: roles,
      components: []
    };
    var addGroup = [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(data), [template]);
    setData(addGroup);
    setIndex(data.length);
  };
  /**
   * Add Role Group
   *
   * @returns <AddRoleGroup />
   */


  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    className: "is-secondary",
    onClick: function onClick() {
      return addRoleGroup();
    }
  }, (0,_utils_wp__WEBPACK_IMPORTED_MODULE_5__.__)('Add Group'));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddRoleGroup);

/***/ }),

/***/ "./resources/scripts/user-interface/components/Admin/ButtonSave.js":
/*!*************************************************************************!*\
  !*** ./resources/scripts/user-interface/components/Admin/ButtonSave.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _AdminContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../AdminContext */ "./resources/scripts/user-interface/components/AdminContext.js");
/* harmony import */ var _utils_wp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/wp */ "./resources/scripts/user-interface/utils/wp.js");
/* harmony import */ var _utils_admin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/admin */ "./resources/scripts/user-interface/utils/admin.js");
/* harmony import */ var _utils_arr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/arr */ "./resources/scripts/user-interface/utils/arr.js");










/**
 * Head
 */

var Save = function Save() {
  var _useContext = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useContext)(_AdminContext__WEBPACK_IMPORTED_MODULE_5__.default),
      data = _useContext.data,
      setData = _useContext.setData,
      index = _useContext.index,
      setIndex = _useContext.setIndex,
      isBlocking = _useContext.isBlocking,
      setIsBlocking = _useContext.setIsBlocking;

  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)((0,_utils_wp__WEBPACK_IMPORTED_MODULE_6__.__)('Save')),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState, 2),
      buttonText = _useState2[0],
      setButtonText = _useState2[1];
  /**
   * Handle Save
   */


  var handleSave = function handleSave() {
    setButtonText((0,_utils_wp__WEBPACK_IMPORTED_MODULE_6__.__)('Saving'));

    var save = function save() {
      _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4___default()({
        url: intervention.route.admin.url,
        method: 'POST',
        data: {
          data: middleware,
          save: true
        }
      }).then(function (res) {
        if (res !== null && res !== void 0 && res.data) {
          var sorted = (0,_utils_admin__WEBPACK_IMPORTED_MODULE_7__.sortDataByRoleKeys)(res.data, index);
          setData(sorted.data); // setIndex(sorted.index);

          setButtonText((0,_utils_wp__WEBPACK_IMPORTED_MODULE_6__.__)('Save'));
          setIsBlocking(false);
        }
      });
    };

    var escape = function escape() {
      setButtonText((0,_utils_wp__WEBPACK_IMPORTED_MODULE_6__.__)('Save'));
    };
    /*
    const rolesAsKeys = applied.reduce((carry, { roles }) => {
      carry.push(roles.join('|'));
      return carry;
    }, []);
    */

    /**
     * Convert to object for saving
     *
     * @returns {object}
     */


    var middleware = data.reduce(function (carry, _ref) {
      var roles = _ref.roles,
          components = _ref.components;
      var removeImmutableComponents = Object.entries(components).reduce(function (carry, _ref2) {
        var _ref3 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_ref2, 2),
            k = _ref3[0],
            _ref3$ = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_ref3[1], 2),
            value = _ref3$[0],
            immutable = _ref3$[1];

        if (immutable !== true) {
          carry[k] = [value, false];
        }

        return carry;
      }, {});
      /*
      if (Object.keys(components).length > 0) {
        carry[roles.join('|')] = removeImmutableComponents;
      }
      */

      carry[roles.group.join('|')] = removeImmutableComponents;
      return carry;
    }, {});
    /**
     * Empty Role Group Found
     *
     * @returns {boolean}
     */

    var emptyRoleGroupFound = function emptyRoleGroupFound() {
      return Object.keys(middleware).includes('');
    };
    /**
     * Duplicate Role Group Found
     *
     * @returns {boolean}
     */


    var duplicateRoleGroupFound = function duplicateRoleGroupFound() {
      var rolesAsKeys = data.reduce(function (carry, _ref4) {
        var roles = _ref4.roles;
        carry.push(roles.group.join('|'));
        return carry;
      }, []);
      return (0,_utils_arr__WEBPACK_IMPORTED_MODULE_8__.arrayHasDuplicates)(rolesAsKeys);
    };

    if (emptyRoleGroupFound()) {
      var msg = (0,_utils_wp__WEBPACK_IMPORTED_MODULE_6__.__)('Empty role group found, please assign a role or delete the group before saving.');

      window.alert(msg);
      escape();
      return;
    }

    if (duplicateRoleGroupFound()) {
      var _msg = (0,_utils_wp__WEBPACK_IMPORTED_MODULE_6__.__)('Found matching user groups, proceeding to save will merge groups.');

      var proceed = window.confirm(_msg);
      proceed ? save() : escape();
      return;
    }

    save();
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    className: "is-primary",
    onClick: function onClick() {
      return handleSave();
    },
    disabled: isBlocking === true
  }, buttonText);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Save);

/***/ }),

/***/ "./resources/scripts/user-interface/components/Admin/Components.js":
/*!*************************************************************************!*\
  !*** ./resources/scripts/user-interface/components/Admin/Components.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _AdminContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../AdminContext */ "./resources/scripts/user-interface/components/AdminContext.js");
/* harmony import */ var _ComponentsContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ComponentsContext */ "./resources/scripts/user-interface/components/Admin/ComponentsContext.js");
/* harmony import */ var _Components_HierachicalItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Components/HierachicalItem */ "./resources/scripts/user-interface/components/Admin/Components/HierachicalItem.js");
/* harmony import */ var _Components_BooleanItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Components/BooleanItem */ "./resources/scripts/user-interface/components/Admin/Components/BooleanItem.js");
/* harmony import */ var _Components_BooleanGroup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Components/BooleanGroup */ "./resources/scripts/user-interface/components/Admin/Components/BooleanGroup.js");
/* harmony import */ var _Components_TextItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Components/TextItem */ "./resources/scripts/user-interface/components/Admin/Components/TextItem.js");
/* harmony import */ var _Components_NumberItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Components/NumberItem */ "./resources/scripts/user-interface/components/Admin/Components/NumberItem.js");
/* harmony import */ var _Components_RouteItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Components/RouteItem */ "./resources/scripts/user-interface/components/Admin/Components/RouteItem.js");
/* harmony import */ var _utils_admin__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/admin */ "./resources/scripts/user-interface/utils/admin.js");
/* harmony import */ var _utils_wp__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils/wp */ "./resources/scripts/user-interface/utils/wp.js");














var staticComponentsData = intervention.route.admin.data.components;
/**
 * Components
 *
 * @returns {<List />}
 */

var Components = function Components() {
  var _useContext = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useContext)(_AdminContext__WEBPACK_IMPORTED_MODULE_3__.default),
      dataIndex = _useContext.dataIndex;

  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState, 2),
      path = _useState2[0],
      setPath = _useState2[1];

  var _useState3 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState3, 2),
      edited = _useState4[0],
      setEdited = _useState4[1];

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    setEdited(dataIndex.components);
  }, [dataIndex]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    console.log({
      edited: edited
    });
  }, [edited]);
  /**
   * Api
   *
   * @param {object} edited
   * @returns
   */

  var api = function api() {
    var toggle = function toggle(key) {
      return !(0,_utils_admin__WEBPACK_IMPORTED_MODULE_11__.objHasKey)(edited, key) ? add(key) : remove(key);
    };

    var add = function add(key) {
      var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      return edited[key] = [value, false];
    };

    var remove = function remove(key) {
      return (0,_utils_admin__WEBPACK_IMPORTED_MODULE_11__.objHasKey)(edited, key) && edited[key][1] === false && delete edited[key];
    };

    var get = function get() {
      return edited;
    };

    return Object.freeze({
      toggle: toggle,
      add: add,
      remove: remove,
      get: get
    });
  };
  /**
   * Get Edited
   *
   * @param {string} k
   * @returns {array} [ {boolean|string} value, {boolean} immutable ]
   */


  var getEdited = function getEdited(k) {
    var key = (0,_utils_admin__WEBPACK_IMPORTED_MODULE_11__.getInterventionKey)(k);
    return Object.keys(edited).includes(key) ? edited[key] : [false, false];
  };
  /**
   * Get Static Components Data
   *
   * @param {string} path
   * @returns {object} { {key} key: {boolean|object} value  }
   */


  var getStaticComponentsData = function getStaticComponentsData(path) {
    var get = function get() {
      var paths = path.split('/');
      return paths.reduce(function (carry, item) {
        carry = (0,_utils_admin__WEBPACK_IMPORTED_MODULE_11__.objHasKey)(carry, item) ? carry[item] : carry;
        return carry;
      }, staticComponentsData);
    };

    return path !== '' ? get() : staticComponentsData;
  };
  /**
   * Breadcrumb
   *
   * @returns <Breadcrumb />
   */


  var Breadcrumb = function Breadcrumb() {
    var paths = path.split('/');

    var handler = function handler(k) {
      var pos = path.indexOf(k) + k.length;
      setPath(path.substring(0, pos));
    };

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "flex"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "cursor-pointer",
      onClick: function onClick() {
        return handler('');
      }
    }, (0,_utils_wp__WEBPACK_IMPORTED_MODULE_12__.__)('root')), paths.map(function (item) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
        key: item,
        className: "cursor-pointer",
        onClick: function onClick() {
          return handler(item);
        }
      }, (0,_utils_admin__WEBPACK_IMPORTED_MODULE_11__.getInterventionKey)(item));
    }));
  };
  /**
   * Routing
   *
   * @param {object} item
   * @returns <Routing />
   */


  var Routing = function Routing(_ref) {
    var k = _ref.item;
    var key = path !== '' ? "".concat(path, "/").concat(k) : k;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_Components_HierachicalItem__WEBPACK_IMPORTED_MODULE_5__.isHierachical)(k) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_Components_HierachicalItem__WEBPACK_IMPORTED_MODULE_5__.Hierachical, {
      item: key
    }), (0,_Components_BooleanItem__WEBPACK_IMPORTED_MODULE_6__.isBooleanItem)(k) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_Components_BooleanItem__WEBPACK_IMPORTED_MODULE_6__.BooleanItem, {
      item: key
    }), (0,_Components_TextItem__WEBPACK_IMPORTED_MODULE_8__.isTextItem)(k) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_Components_TextItem__WEBPACK_IMPORTED_MODULE_8__.TextItem, {
      item: key
    }), (0,_Components_NumberItem__WEBPACK_IMPORTED_MODULE_9__.isNumberItem)(k) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_Components_NumberItem__WEBPACK_IMPORTED_MODULE_9__.NumberItem, {
      item: key
    }), (0,_Components_BooleanGroup__WEBPACK_IMPORTED_MODULE_7__.isBooleanGroup)(k) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_Components_BooleanGroup__WEBPACK_IMPORTED_MODULE_7__.BooleanGroup, {
      item: key
    }));
  };

  var firstPathKey = Object.keys(getStaticComponentsData(path))[0];

  var RouteGroup = function RouteGroup() {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_Components_RouteItem__WEBPACK_IMPORTED_MODULE_10__.RouteItem, {
      item: "".concat(path, "/").concat(firstPathKey)
    }, Object.keys(getStaticComponentsData(path)).map(function (key) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Routing, {
        key: key,
        item: key
      });
    })));
  };
  /*
  const Group = () => {
    return (
      <>
        <Route item={firstPathKey}>
          {Object.keys(getStaticComponentsData(path)).map((key) => (
            <Routing key={key} item={key} />
          ))}
        </Route>
      </>
    );
  };
  */


  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_ComponentsContext__WEBPACK_IMPORTED_MODULE_4__.default.Provider, {
    value: {
      edited: edited,
      getEdited: getEdited,
      setEdited: setEdited,
      setPath: setPath,
      api: api,
      getStaticComponentsData: getStaticComponentsData
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Breadcrumb, null), (0,_Components_RouteItem__WEBPACK_IMPORTED_MODULE_10__.isRouteItem)(firstPathKey) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(RouteGroup, null), !(0,_Components_RouteItem__WEBPACK_IMPORTED_MODULE_10__.isRouteItem)(firstPathKey) && Object.keys(getStaticComponentsData(path)).map(function (key) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Routing, {
      key: key,
      item: key
    });
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Components);

/***/ }),

/***/ "./resources/scripts/user-interface/components/Admin/Components/BooleanGroup.js":
/*!**************************************************************************************!*\
  !*** ./resources/scripts/user-interface/components/Admin/Components/BooleanGroup.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isBooleanGroup": () => (/* binding */ isBooleanGroup),
/* harmony export */   "BooleanGroup": () => (/* binding */ BooleanGroup)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ComponentsContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ComponentsContext */ "./resources/scripts/user-interface/components/Admin/ComponentsContext.js");
/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Row */ "./resources/scripts/user-interface/components/Admin/Components/Row.js");
/* harmony import */ var _utils_admin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/admin */ "./resources/scripts/user-interface/utils/admin.js");
/* harmony import */ var _utils_wp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/wp */ "./resources/scripts/user-interface/utils/wp.js");








/**
 * Is Boolean Group
 *
 * @param {string} k
 * @returns {boolean}
 */

var isBooleanGroup = function isBooleanGroup(k) {
  return k.includes(':group');
};
/**
 * Boolean Group
 *
 * @param {object} { key: {string} key }
 * @returns <BooleanGroup />
 */


var BooleanGroup = function BooleanGroup(_ref) {
  var parentKey = _ref.item;

  var _useContext = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useContext)(_ComponentsContext__WEBPACK_IMPORTED_MODULE_3__.default),
      api = _useContext.api,
      getEdited = _useContext.getEdited,
      setEdited = _useContext.setEdited,
      getStaticComponentsData = _useContext.getStaticComponentsData;

  var childDataKeys = Object.keys(getStaticComponentsData(parentKey));
  var childDataFormatted = childDataKeys.reduce(function (carry, k) {
    carry.push((0,_utils_admin__WEBPACK_IMPORTED_MODULE_5__.getInterventionKey)("".concat(parentKey, "/").concat(k)));
    return carry;
  }, []);
  var initSelected = childDataFormatted.reduce(function (carry, k) {
    if (getEdited(k)[0]) {
      carry.push(k);
    }

    return carry;
  }, []);

  var _getEdited = getEdited(parentKey),
      _getEdited2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_getEdited, 2),
      parentValue = _getEdited2[0],
      parentImmutable = _getEdited2[1];

  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(parentValue ? childDataFormatted : initSelected),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useState, 2),
      selected = _useState2[0],
      setSelected = _useState2[1];

  var firstUpdate = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useRef)(true);
  /**
   * Parent On Effect Api
   *
   * @description group `api` calls for when parent is selected.
   */

  var parentOnEffectApi = function parentOnEffectApi() {
    selected.map(function (k) {
      return api().remove(k);
    });
    api().add((0,_utils_admin__WEBPACK_IMPORTED_MODULE_5__.getInterventionKey)(parentKey));
  };
  /**
   * Parent Off Effect Api
   *
   * @description group `api` calls for when parent is deselected.
   */


  var parentOffEffectApi = function parentOffEffectApi() {
    selected.map(function (k) {
      return api().add(k);
    });
    api().remove((0,_utils_admin__WEBPACK_IMPORTED_MODULE_5__.getInterventionKey)(parentKey));
  };
  /**
   * Effect
   *
   * @description after first update, watch `selected` for changes and run `api` calls.
   */


  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    var parentOnState = childDataKeys.length === selected.length;
    parentOnState ? parentOnEffectApi() : parentOffEffectApi();
    setEdited(api().get()); // setParentOn(parentOnState);
  }, [selected]);
  /**
   * Parent Item
   *
   * @returns <ParentItem />
   */

  var ParentItem = function ParentItem() {
    var handler = function handler() {
      if (parentImmutable) {
        return;
      }

      var selectedChange = selected.length === childDataKeys.length ? [] : childDataFormatted;
      setSelected(selectedChange);
    };

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", {
      onClick: function onClick() {
        return handler();
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_Row__WEBPACK_IMPORTED_MODULE_4__.Row, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_Row__WEBPACK_IMPORTED_MODULE_4__.RowState, {
      state: selected.length === childDataKeys.length,
      immutable: parentImmutable
    }), (0,_utils_admin__WEBPACK_IMPORTED_MODULE_5__.getInterventionKey)(parentKey)));
  };
  /**
   * Boolean Item
   *
   * @param {string} key
   * @returns <BooleanItem />
   */


  var BooleanItem = function BooleanItem(_ref2) {
    var key = _ref2.item;
    var state = selected.includes((0,_utils_admin__WEBPACK_IMPORTED_MODULE_5__.getInterventionKey)(key));

    var _getEdited3 = getEdited(key),
        _getEdited4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_getEdited3, 2),
        immutable = _getEdited4[1];

    var handler = function handler() {
      if (parentImmutable || immutable) {
        return;
      }

      var selectedExclItem = selected.filter(function (k) {
        return key !== k;
      });
      var selectedChange = selected.includes(key) ? selectedExclItem : [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(selected), [key]);
      setSelected(selectedChange);
    };

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", {
      onClick: function onClick() {
        return handler();
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_Row__WEBPACK_IMPORTED_MODULE_4__.Row, {
      item: key
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_Row__WEBPACK_IMPORTED_MODULE_4__.RowState, {
      state: state,
      immutable: parentImmutable || immutable
    }), key));
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(ParentItem, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", {
    className: "pl-48"
  }, childDataFormatted.map(function (k) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(BooleanItem, {
      key: k,
      item: k
    });
  })));
};



/***/ }),

/***/ "./resources/scripts/user-interface/components/Admin/Components/BooleanItem.js":
/*!*************************************************************************************!*\
  !*** ./resources/scripts/user-interface/components/Admin/Components/BooleanItem.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isBooleanItem": () => (/* binding */ isBooleanItem),
/* harmony export */   "BooleanItem": () => (/* binding */ BooleanItem)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ComponentsContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ComponentsContext */ "./resources/scripts/user-interface/components/Admin/ComponentsContext.js");
/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Row */ "./resources/scripts/user-interface/components/Admin/Components/Row.js");
/* harmony import */ var _utils_admin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/admin */ "./resources/scripts/user-interface/utils/admin.js");







var isBooleanItem = function isBooleanItem(k) {
  return !k.includes(':');
};
/**
 * Boolean Item
 *
 * @param {object} { key: {string} key }
 * @returns <BooleanItem />
 */


var BooleanItem = function BooleanItem(_ref) {
  var key = _ref.item;

  var _useContext = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useContext)(_ComponentsContext__WEBPACK_IMPORTED_MODULE_2__.default),
      api = _useContext.api,
      getEdited = _useContext.getEdited,
      setEdited = _useContext.setEdited;

  var _getEdited = getEdited(key),
      _getEdited2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_getEdited, 2),
      value = _getEdited2[0],
      immutable = _getEdited2[1];

  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(value),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var handler = function handler() {
    if (immutable) {
      return;
    }

    api().toggle((0,_utils_admin__WEBPACK_IMPORTED_MODULE_4__.getInterventionKey)(key));
    setEdited(api().get());
    setState(!state);
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    onClick: function onClick() {
      return handler();
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_Row__WEBPACK_IMPORTED_MODULE_3__.Row, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_Row__WEBPACK_IMPORTED_MODULE_3__.RowState, {
    state: value,
    immutable: immutable
  }), (0,_utils_admin__WEBPACK_IMPORTED_MODULE_4__.getInterventionKey)(key)));
};



/***/ }),

/***/ "./resources/scripts/user-interface/components/Admin/Components/HierachicalItem.js":
/*!*****************************************************************************************!*\
  !*** ./resources/scripts/user-interface/components/Admin/Components/HierachicalItem.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isHierachical": () => (/* binding */ isHierachical),
/* harmony export */   "Hierachical": () => (/* binding */ Hierachical)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ComponentsContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ComponentsContext */ "./resources/scripts/user-interface/components/Admin/ComponentsContext.js");
/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Row */ "./resources/scripts/user-interface/components/Admin/Components/Row.js");
/* harmony import */ var _utils_admin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/admin */ "./resources/scripts/user-interface/utils/admin.js");







var isHierachical = function isHierachical(k) {
  return k.includes(':hierachical');
};
/**
 * Hierachical
 *
 * @param {object} { key: {string} key }
 * @returns <HierachicalItem />
 */


var Hierachical = function Hierachical(_ref) {
  var key = _ref.item;

  var _useContext = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useContext)(_ComponentsContext__WEBPACK_IMPORTED_MODULE_2__.default),
      setPath = _useContext.setPath;

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    onClick: function onClick() {
      return setPath(key);
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Row__WEBPACK_IMPORTED_MODULE_3__.Row, null, (0,_utils_admin__WEBPACK_IMPORTED_MODULE_4__.getInterventionKey)(key), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    className: " ml-4 flex items-center justify-center text-primary-10 text-16 p-0 border-2 ",
    icon: "arrow-right-alt"
  })));
};



/***/ }),

/***/ "./resources/scripts/user-interface/components/Admin/Components/NumberItem.js":
/*!************************************************************************************!*\
  !*** ./resources/scripts/user-interface/components/Admin/Components/NumberItem.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isNumberItem": () => (/* binding */ isNumberItem),
/* harmony export */   "NumberItem": () => (/* binding */ NumberItem)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TextItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TextItem */ "./resources/scripts/user-interface/components/Admin/Components/TextItem.js");
/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Row */ "./resources/scripts/user-interface/components/Admin/Components/Row.js");
/* harmony import */ var _utils_admin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/admin */ "./resources/scripts/user-interface/utils/admin.js");
/* harmony import */ var _utils_wp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/wp */ "./resources/scripts/user-interface/utils/wp.js");








var isNumberItem = function isNumberItem(k) {
  return k.includes(':number');
};
/**
 * Number Item
 *
 * @param {object} { key: {string} key }
 * @returns <TextItem />
 */


var NumberItem = function NumberItem(_ref) {
  var key = _ref.item;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_TextItem__WEBPACK_IMPORTED_MODULE_2__.TextItem, {
    item: key,
    type: "number"
  });
};



/***/ }),

/***/ "./resources/scripts/user-interface/components/Admin/Components/RouteItem.js":
/*!***********************************************************************************!*\
  !*** ./resources/scripts/user-interface/components/Admin/Components/RouteItem.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isRouteItem": () => (/* binding */ isRouteItem),
/* harmony export */   "RouteItem": () => (/* binding */ RouteItem)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ComponentsContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ComponentsContext */ "./resources/scripts/user-interface/components/Admin/ComponentsContext.js");
/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Row */ "./resources/scripts/user-interface/components/Admin/Components/Row.js");
/* harmony import */ var _utils_admin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/admin */ "./resources/scripts/user-interface/utils/admin.js");
/* harmony import */ var _utils_wp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../utils/wp */ "./resources/scripts/user-interface/utils/wp.js");









/**
 * Get Option Label
 *
 * @param {string} value
 * @returns {string}
 */

var getOptionLabel = function getOptionLabel(value) {
  return value.replaceAll('-', ' ').split('.').map(function (str) {
    return str.split(' ').map(function (word) {
      return word[0].toUpperCase() + word.substring(1);
    }).join(' ');
  }).join('/');
};
/**
 * Routing Options
 *
 * @description get `pagenow` options that include `.`.
 */


var routingOptions = intervention.route.admin.data.pagenow.filter(function (value) {
  return value.includes('.');
}).filter(Boolean);
/**
 * Routing Options Select Control
 *
 * @description format `routingOptions` for WordPress `<SelectControl>` component.
 */

var routingOptionsSelectControl = routingOptions.map(function (value) {
  var label = getOptionLabel(value);
  return {
    label: label,
    value: value
  };
});
/**
 * Options All
 *
 * @description create blank entry item and merge with `routingOptionsSelectControl`.
 */

var optionsAll = [{
  label: '',
  value: ''
}].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(routingOptionsSelectControl));
/**
 * Is Route
 *
 * @param {string} k
 * @returns {boolean}
 */

var isRouteItem = function isRouteItem(k) {
  return k.includes(':route');
};
/**
 * Route
 *
 * @param {object} { key: {string} key }
 * @returns <HierachicalItem />
 */


var RouteItem = function RouteItem(_ref) {
  var key = _ref.item,
      children = _ref.children;
  var interventionKey = (0,_utils_admin__WEBPACK_IMPORTED_MODULE_6__.getInterventionKey)(key);

  var _useContext = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useContext)(_ComponentsContext__WEBPACK_IMPORTED_MODULE_4__.default),
      api = _useContext.api,
      edited = _useContext.edited,
      getEdited = _useContext.getEdited,
      setEdited = _useContext.setEdited;

  var _getEdited = getEdited(key),
      _getEdited2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_getEdited, 2),
      value = _getEdited2[0],
      immutable = _getEdited2[1];

  var init = value === false ? '' : value;

  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(init),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1]; // const sanitizeKey = key.replace(':route', '');

  /**
   * Immutable Option
   *
   * @param {string} value
   * @returns {array}
   */


  var immutableOption = function immutableOption(value) {
    var label = getOptionLabel(value);
    return [{
      label: label,
      value: value
    }];
  };
  /**
   * Excl Key From Options
   *
   * @param {array} options
   * @returns {array}
   */


  var exclKeyFromOptions = function exclKeyFromOptions(options) {
    return options.filter(function (item) {
      return item.value.startsWith(interventionKey) === false;
    }).filter(Boolean);
  };

  var options = immutable ? immutableOption(state) : exclKeyFromOptions(optionsAll);
  /**
   * Effect
   */

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    state !== '' ? api().add(interventionKey, state) : api().remove(interventionKey);
    setEdited(api().get());
    console.log({
      state: state
    });
    console.log({
      interventionKey: interventionKey
    });
    console.log({
      edited: edited
    });
  }, [state]);
  /**
   * Handler
   *
   * @param {string} value
   */

  var handler = function handler(value) {
    if (immutable) {
      return;
    }

    setState(value);
  };
  /**
   * Render
   */


  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_Row__WEBPACK_IMPORTED_MODULE_5__.Row, {
    item: key
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_Row__WEBPACK_IMPORTED_MODULE_5__.RowState, {
    state: state,
    immutable: immutable
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", {
    className: "flex w-full items-center"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", {
    className: "w-1/2"
  }, (0,_utils_admin__WEBPACK_IMPORTED_MODULE_6__.getInterventionKey)(key)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", {
    className: "w-1/2 flex items-center border-l border-gray-2"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: "Route",
    hideLabelFromVision: true,
    value: state,
    disabled: immutable,
    options: options,
    onChange: function onChange(route) {
      return handler(route);
    }
  }), immutable === false && state !== '' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    onClick: function onClick() {
      return handler('');
    }
  }, (0,_utils_wp__WEBPACK_IMPORTED_MODULE_7__.__)('Undo'))))), state === '' && children);
};



/***/ }),

/***/ "./resources/scripts/user-interface/components/Admin/Components/Row.js":
/*!*****************************************************************************!*\
  !*** ./resources/scripts/user-interface/components/Admin/Components/Row.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Row": () => (/* binding */ Row),
/* harmony export */   "RowState": () => (/* binding */ RowState)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_wp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/wp */ "./resources/scripts/user-interface/utils/wp.js");


/**
 * Row
 *
 * @param {object} param
 * @returns {<Row />}
 */

var Row = function Row(_ref) {
  var children = _ref.children;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: " flex-1 text-13 lg:text-14 leading-none text-gray-50 border-gray-2 border-b h-[44px] truncate cursor-pointer flex items-center "
  }, children);
};
/**
 * Row State
 *
 * @param {object} param
 * @returns {<State />}
 */


var RowState = function RowState(_ref2) {
  var _ref2$state = _ref2.state,
      state = _ref2$state === void 0 ? false : _ref2$state,
      _ref2$immutable = _ref2.immutable,
      immutable = _ref2$immutable === void 0 ? false : _ref2$immutable;

  var removed = function removed() {
    return state === true;
  };

  var edited = function edited() {
    return typeof state !== 'boolean' && state !== '';
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: " w-[50px] h-full flex items-center justify-center text-primary-10 border border-gray-5 font-600"
  }, removed() && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: ""
  }, (0,_utils_wp__WEBPACK_IMPORTED_MODULE_1__.__)('R')), edited() && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: ""
  }, (0,_utils_wp__WEBPACK_IMPORTED_MODULE_1__.__)('E')), immutable && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: ""
  }, (0,_utils_wp__WEBPACK_IMPORTED_MODULE_1__.__)('H')));
};



/***/ }),

/***/ "./resources/scripts/user-interface/components/Admin/Components/TextItem.js":
/*!**********************************************************************************!*\
  !*** ./resources/scripts/user-interface/components/Admin/Components/TextItem.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isTextItem": () => (/* binding */ isTextItem),
/* harmony export */   "TextItem": () => (/* binding */ TextItem)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ComponentsContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ComponentsContext */ "./resources/scripts/user-interface/components/Admin/ComponentsContext.js");
/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Row */ "./resources/scripts/user-interface/components/Admin/Components/Row.js");
/* harmony import */ var _utils_admin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/admin */ "./resources/scripts/user-interface/utils/admin.js");
/* harmony import */ var _utils_wp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/wp */ "./resources/scripts/user-interface/utils/wp.js");









var isTextItem = function isTextItem(k) {
  return k.includes(':text');
};
/**
 * Text Item
 *
 * @param {object} { key: {string} key }
 * @returns <TextItem />
 */


var TextItem = function TextItem(_ref) {
  var key = _ref.item,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'text' : _ref$type;

  var _useContext = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useContext)(_ComponentsContext__WEBPACK_IMPORTED_MODULE_3__.default),
      api = _useContext.api,
      getEdited = _useContext.getEdited,
      setEdited = _useContext.setEdited;

  var _getEdited = getEdited(key),
      _getEdited2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_getEdited, 2),
      value = _getEdited2[0],
      immutable = _getEdited2[1];

  var init = value === false ? '' : value;

  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(init),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    state !== '' ? api().add((0,_utils_admin__WEBPACK_IMPORTED_MODULE_5__.getInterventionKey)(key), state) : api().remove((0,_utils_admin__WEBPACK_IMPORTED_MODULE_5__.getInterventionKey)(key));
    setEdited(api().get());
  }, [state]);

  var handler = function handler(value) {
    if (immutable) {
      return;
    }

    if (type === 'number') {
      value = value <= 0 ? '' : value;
    }

    setState(value);
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_Row__WEBPACK_IMPORTED_MODULE_4__.Row, {
    item: key
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_Row__WEBPACK_IMPORTED_MODULE_4__.RowState, {
    state: state,
    immutable: immutable
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "flex w-full items-center"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "w-1/2"
  }, (0,_utils_admin__WEBPACK_IMPORTED_MODULE_5__.getInterventionKey)(key)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: " w-1/2 flex items-center border-l border-gray-2"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: false,
    hideLabelFromVision: false,
    value: state,
    placeholder: '',
    type: type,
    disabled: immutable,
    onChange: function onChange(value) {
      return handler(value);
    }
  }), state !== '' && immutable === false && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    onClick: function onClick() {
      return handler('');
    }
  }, (0,_utils_wp__WEBPACK_IMPORTED_MODULE_6__.__)('Undo')))));
};



/***/ }),

/***/ "./resources/scripts/user-interface/components/Admin/ComponentsContext.js":
/*!********************************************************************************!*\
  !*** ./resources/scripts/user-interface/components/Admin/ComponentsContext.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var ComponentsContext = react__WEBPACK_IMPORTED_MODULE_0___default().createContext();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ComponentsContext);

/***/ }),

/***/ "./resources/scripts/user-interface/components/Admin/Head.js":
/*!*******************************************************************!*\
  !*** ./resources/scripts/user-interface/components/Admin/Head.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _RoleGroups__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RoleGroups */ "./resources/scripts/user-interface/components/Admin/RoleGroups.js");
/* harmony import */ var _RoleGroupEdit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RoleGroupEdit */ "./resources/scripts/user-interface/components/Admin/RoleGroupEdit.js");
/* harmony import */ var _AddRoleGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AddRoleGroup */ "./resources/scripts/user-interface/components/Admin/AddRoleGroup.js");
/* harmony import */ var _ButtonSave__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ButtonSave */ "./resources/scripts/user-interface/components/Admin/ButtonSave.js");
/* harmony import */ var _utils_wp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/wp */ "./resources/scripts/user-interface/utils/wp.js");







/**
 * Head
 */

var Head = function Head() {
  {
    /*
      <Toolbar>
        <div className="flex flex-wrap items-center text-14 text-gray-90">
          <span className="font-500 mr-10">{__('Admin')}</span>
          <div className="w-1 h-[49px] bg-gray-5"></div>
        </div>
        <Button
          className="is-primary"
          onClick={() => handleSave()}
          disabled={isBlocking === false}
        >
          {buttonText}
        </Button>
      </Toolbar>
    */
  }
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: " relative n:sticky n:top-0 n:md:top-[32px] w-full flex justify-between border-b border-gray-5 bg-white z-10"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex-1"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: " flex items-center justify-between h-[50px] pl-12 pr-16"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_RoleGroups__WEBPACK_IMPORTED_MODULE_2__.default, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "w-1 h-[50px] bg-gray-5 mx-12"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex items-center"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_AddRoleGroup__WEBPACK_IMPORTED_MODULE_4__.default, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "w-8"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ButtonSave__WEBPACK_IMPORTED_MODULE_5__.default, null)))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Head);

/***/ }),

/***/ "./resources/scripts/user-interface/components/Admin/RoleGroupEdit.js":
/*!****************************************************************************!*\
  !*** ./resources/scripts/user-interface/components/Admin/RoleGroupEdit.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _AdminContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../AdminContext */ "./resources/scripts/user-interface/components/AdminContext.js");
/* harmony import */ var _utils_wp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/wp */ "./resources/scripts/user-interface/utils/wp.js");







/**
 * Registered user roles from WordPress.
 */

var registeredRoles = intervention.route.admin.data.roles;
var registeredRolesKeys = Object.keys(registeredRoles);
/**
 * Role Group Edit
 *
 * @returns <Roles />
 */

var RoleGroupEdit = function RoleGroupEdit() {
  var _useContext = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useContext)(_AdminContext__WEBPACK_IMPORTED_MODULE_4__.default),
      data = _useContext.data,
      setData = _useContext.setData,
      index = _useContext.index,
      setIndex = _useContext.setIndex,
      setIsBlocking = _useContext.setIsBlocking;

  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useState, 2),
      edit = _useState2[0],
      setEdit = _useState2[1];

  var isImmutableItem = function isImmutableItem() {
    return data[index].roles.immutable === true;
  };
  /**
   * Toggle Role In Group
   *
   * @param {string} role
   */


  var toggleRoleInGroup = function toggleRoleInGroup(role) {
    var add = function add(item) {
      return [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(item.roles.group), [role]);
    };

    var remove = function remove(item) {
      return item.roles.group.filter(function (item) {
        return item !== role;
      });
    };

    var sortRoles = function sortRoles(sort) {
      return registeredRolesKeys.filter(function (v) {
        return sort.includes(v);
      });
    };

    var indexRole = data.map(function (item, i) {
      if (i === index) {
        item.roles.group = item.roles.group.includes(role) ? remove(item) : add(item);
        item.roles.group = sortRoles(item.roles.group);
      }

      return item;
    });
    setData(indexRole);
    setIsBlocking(true);
  };
  /**
   * Delete Role Group
   *
   * @description Remove the role group `index` from `data`.
   */


  var deleteRoleGroup = function deleteRoleGroup() {
    var indexHasComponents = Object.keys(data[index].components).length > 0;

    if (indexHasComponents) {
      var proceed = window.confirm('Proceed? Deleted group settings will be lost.');

      if (proceed === false) {
        return;
      }
    }

    var removeGroup = data.filter(function (item, i) {
      return i !== index;
    });
    var newIndex = index === 0 ? index : index - 1;
    setData(removeGroup);
    setIndex(newIndex);
    setIsBlocking(true);
  };
  /**
   * Role List
   *
   * @description Display role list using `registeredRoles` from WordPress.
   *
   * @return <RoleList>
   */


  var RoleList = function RoleList() {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", {
      className: "flex flex-wrap items-center"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", {
      className: "w-1 h-[48px] bg-gray-2 mr-12"
    }), Object.entries(registeredRoles).map(function (_ref) {
      var _ref2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_ref, 2),
          key = _ref2[0],
          name = _ref2[1].name;

      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", {
        key: key,
        className: "\n            cursor-pointer\n            mr-6\n            last:mr-12\n            py-[2px]\n            border\n            rounded\n            px-[4px]\n            ".concat(data[index].roles.group.includes(key) ? 'text-primary-10 border-primary-10' : 'text-gray-50 border-gray-2 hover:border-gray-5', "\n          "),
        onClick: function onClick() {
          return toggleRoleInGroup(key);
        }
      }, key);
    }));
  };
  /**
   * Remove Role Group
   *
   * @description Remove role group layout
   *
   * @returns <RemoveRoleGroup />
   */


  var RemoveRoleGroup = function RemoveRoleGroup() {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("a", {
      href: "#",
      className: " text-gray-50 no-underline active:text-red hover:text-red focus:text-red",
      onClick: function onClick() {
        return deleteRoleGroup();
      }
    }, (0,_utils_wp__WEBPACK_IMPORTED_MODULE_5__.__)('Delete'));
  };
  /**
   * Editable Group
   *
   * @description
   */


  var EditableRoleGroup = function EditableRoleGroup() {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", {
      className: "flex items-center"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("a", {
      href: "#",
      className: "mr-12 ".concat(edit ? 'no-underline text-gray-90' : 'underline'),
      onClick: function onClick(event) {
        event.preventDefault();
        setEdit(!edit);
      }
    }, (0,_utils_wp__WEBPACK_IMPORTED_MODULE_5__.__)('Edit')), edit && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(RoleList, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", {
      className: "w-1 h-[50px] bg-gray-5 mr-12"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(RemoveRoleGroup, null));
  };
  /**
   * Hardcoded Group
   */


  var HardcodedRoleGroup = function HardcodedRoleGroup() {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("span", {
      className: "text-gray-50 flex items-center"
    }, (0,_utils_wp__WEBPACK_IMPORTED_MODULE_5__.__)('Hardcoded'));
  };
  /**
   * Render
   */


  return isImmutableItem() ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(HardcodedRoleGroup, null) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(EditableRoleGroup, null);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RoleGroupEdit);

/***/ }),

/***/ "./resources/scripts/user-interface/components/Admin/RoleGroups.js":
/*!*************************************************************************!*\
  !*** ./resources/scripts/user-interface/components/Admin/RoleGroups.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _AdminContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../AdminContext */ "./resources/scripts/user-interface/components/AdminContext.js");
/* harmony import */ var _utils_wp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/wp */ "./resources/scripts/user-interface/utils/wp.js");
/* harmony import */ var _utils_admin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/admin */ "./resources/scripts/user-interface/utils/admin.js");





 // import { arrayHasDuplicates } from '../utils/arr';


/**
 * Role Groups
 */

var RoleGroups = function RoleGroups() {
  var _useContext = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useContext)(_AdminContext__WEBPACK_IMPORTED_MODULE_3__.default),
      data = _useContext.data,
      setIndex = _useContext.setIndex,
      index = _useContext.index;

  var options = data.map(function (item, i) {
    var name = (0,_utils_admin__WEBPACK_IMPORTED_MODULE_5__.getRolesAsNiceName)(item.roles.group);
    return {
      key: i,
      name: name
    };
  });

  var handler = function handler(selectedItem) {
    // setState(value);
    setIndex(selectedItem.key);
  }; // const [state, setState] = useState(index);


  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex flex-wrap items-center"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.CustomSelectControl, {
    label: "Route",
    hideLabelFromVision: true,
    value: options.find(function (option) {
      return option.key === index;
    }),
    options: options,
    onChange: function onChange(_ref) {
      var selectedItem = _ref.selectedItem;
      return handler(selectedItem);
    }
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RoleGroups);

/***/ }),

/***/ "./resources/scripts/user-interface/components/AdminContext.js":
/*!*********************************************************************!*\
  !*** ./resources/scripts/user-interface/components/AdminContext.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var AdminContext = react__WEBPACK_IMPORTED_MODULE_0___default().createContext();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdminContext);

/***/ }),

/***/ "./resources/scripts/user-interface/components/App.js":
/*!************************************************************!*\
  !*** ./resources/scripts/user-interface/components/App.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var _Page_WordPressContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Page/WordPressContainer */ "./resources/scripts/user-interface/components/Page/WordPressContainer.js");
/* harmony import */ var _Head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Head */ "./resources/scripts/user-interface/components/Head.js");
/* harmony import */ var _Admin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Admin */ "./resources/scripts/user-interface/components/Admin.js");
/* harmony import */ var _Export__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Export */ "./resources/scripts/user-interface/components/Export.js");
/* harmony import */ var _Application__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Application */ "./resources/scripts/user-interface/components/Application.js");








/**
 * App
 */

var App = function App() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)((react__WEBPACK_IMPORTED_MODULE_1___default().StrictMode), null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.HashRouter, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Page_WordPressContainer__WEBPACK_IMPORTED_MODULE_2__.default, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Head__WEBPACK_IMPORTED_MODULE_3__.default, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Routes, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Admin__WEBPACK_IMPORTED_MODULE_4__.default, {
    path: "/",
    exact: true
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Application__WEBPACK_IMPORTED_MODULE_6__.default, {
    path: "/application"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Export__WEBPACK_IMPORTED_MODULE_5__.default, {
    path: "/export"
  })))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./resources/scripts/user-interface/components/Application.js":
/*!********************************************************************!*\
  !*** ./resources/scripts/user-interface/components/Application.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Page_Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Page/Page */ "./resources/scripts/user-interface/components/Page/Page.js");
/* harmony import */ var _Page_Sidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Page/Sidebar */ "./resources/scripts/user-interface/components/Page/Sidebar.js");
/* harmony import */ var _Page_Toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Page/Toolbar */ "./resources/scripts/user-interface/components/Page/Toolbar.js");
/* harmony import */ var _Page_Loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Page/Loader */ "./resources/scripts/user-interface/components/Page/Loader.js");
/* harmony import */ var _Application_Notice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Application/Notice */ "./resources/scripts/user-interface/components/Application/Notice.js");
/* harmony import */ var _Application_Row__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Application/Row */ "./resources/scripts/user-interface/components/Application/Row.js");
/* harmony import */ var _Application_RowEmpty__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Application/RowEmpty */ "./resources/scripts/user-interface/components/Application/RowEmpty.js");
/* harmony import */ var _utils_wp__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/wp */ "./resources/scripts/user-interface/utils/wp.js");














_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3___default().use(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3___default().createNonceMiddleware(intervention.nonce));

var Application = function Application() {
  var storage = sessionStorage.getItem('intervention-tools-application-radio');

  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState, 2),
      init = _useState2[0],
      setInit = _useState2[1];

  var _useState3 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(storage ? storage : 'all'),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState3, 2),
      radio = _useState4[0],
      setRadio = _useState4[1];

  var _useState5 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState5, 2),
      data = _useState6[0],
      setData = _useState6[1];

  var _useState7 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _useState8 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState7, 2),
      list = _useState8[0],
      setList = _useState8[1];

  var _useState9 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
      _useState10 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState9, 2),
      diff = _useState10[0],
      setDiff = _useState10[1];

  var _useState11 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)({
    completed: [],
    skipped: []
  }),
      _useState12 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState11, 2),
      imported = _useState12[0],
      setImported = _useState12[1];

  var _useState13 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)((0,_utils_wp__WEBPACK_IMPORTED_MODULE_11__.__)('Import')),
      _useState14 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState13, 2),
      buttonText = _useState14[0],
      setButtonText = _useState14[1];
  /**
   * Init
   */


  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    /**
     * Fetch the data from `Import.php`.
     */
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3___default()({
      method: 'POST',
      url: intervention.route.application.url
    }).then(function (res) {
      setData(res.items);
      setDiff(res.diff);
      setInit(true);
    });
  }, []);
  /**
   * Radio Filter
   */

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    setList(filterList(radio));
    sessionStorage.setItem('intervention-tools-application-radio', radio);
  }, [data, radio]);
  /**
   * Filter List
   */

  var filterList = function filterList(filter) {
    return data.filter(function (_ref) {
      var intervention = _ref.intervention,
          database = _ref.database;

      if (filter === 'match') {
        return intervention.value === database.value;
      }

      if (filter === 'mismatch') {
        return intervention.value !== database.value;
      }

      return true;
    });
  };
  /**
   * Handle Import
   */


  var handleImport = function handleImport() {
    setButtonText((0,_utils_wp__WEBPACK_IMPORTED_MODULE_11__.__)('Importing'));
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3___default()({
      url: intervention.route.application.url,
      method: 'POST',
      data: {
        "import": true
      }
    }).then(function (res) {
      setData(res.items);
      setDiff(res.diff);
      setImported(res.imported);
      setButtonText((0,_utils_wp__WEBPACK_IMPORTED_MODULE_11__.__)('Import'));
    });
  };
  /**
   * Render
   */


  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_Page_Page__WEBPACK_IMPORTED_MODULE_4__.default, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_Page_Sidebar__WEBPACK_IMPORTED_MODULE_5__.default, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Panel, {
    className: "border-0 border-b border-gray-5"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_utils_wp__WEBPACK_IMPORTED_MODULE_11__.__)('Show'),
    icon: _wordpress_element__WEBPACK_IMPORTED_MODULE_1__.more,
    initialOpen: true,
    className: "w-full"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RadioControl, {
    selected: radio,
    options: [{
      label: (0,_utils_wp__WEBPACK_IMPORTED_MODULE_11__.__)('All'),
      value: 'all'
    }, {
      label: (0,_utils_wp__WEBPACK_IMPORTED_MODULE_11__.__)('Mismatch'),
      value: 'mismatch'
    }, {
      label: (0,_utils_wp__WEBPACK_IMPORTED_MODULE_11__.__)('Match'),
      value: 'match'
    }],
    onChange: function onChange(value) {
      return setRadio(value);
    }
  }))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "w-full flex-1"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_Page_Toolbar__WEBPACK_IMPORTED_MODULE_6__.default, {
    className: "flex"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", null, init && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_Application_Notice__WEBPACK_IMPORTED_MODULE_8__.default, {
    imported: imported,
    diff: diff,
    setRadio: setRadio
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    className: "is-primary",
    onClick: function onClick() {
      return handleImport();
    },
    disabled: diff === 0
  }, buttonText)), !init && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_Page_Loader__WEBPACK_IMPORTED_MODULE_7__.default, null), init && list.length === 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_Application_RowEmpty__WEBPACK_IMPORTED_MODULE_10__.default, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: ""
  }, list.map(function (_ref2) {
    var intervention = _ref2.intervention,
        database = _ref2.database;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_Application_Row__WEBPACK_IMPORTED_MODULE_9__.default, {
      key: database.key,
      intervention: intervention,
      database: database
    });
  }))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Application);

/***/ }),

/***/ "./resources/scripts/user-interface/components/Application/Notice.js":
/*!***************************************************************************!*\
  !*** ./resources/scripts/user-interface/components/Application/Notice.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Page_Notice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Page/Notice */ "./resources/scripts/user-interface/components/Page/Notice.js");
/* harmony import */ var _utils_wp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/wp */ "./resources/scripts/user-interface/utils/wp.js");




/**
 * Import Notice
 *
 * @param {object} props
 */

var ImportNotice = function ImportNotice(_ref) {
  var imported = _ref.imported,
      diff = _ref.diff,
      setRadio = _ref.setRadio;
  var match = (0,_utils_wp__WEBPACK_IMPORTED_MODULE_3__.__)('Intervention—Database match') + '.';
  /**
   * Handle Diffs Link
   *
   * @param {object} event
   */

  var handleDiffsLink = function handleDiffsLink(event) {
    event.preventDefault();
    setRadio('mismatch');
  };
  /**
   * Skipped
   */


  if (imported.skipped.length > 0) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Page_Notice__WEBPACK_IMPORTED_MODULE_2__.default, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_utils_wp__WEBPACK_IMPORTED_MODULE_3__.__)('Imported %1$s and %2$s failed'), imported.completed.length, imported.skipped.length), '.');
  }
  /**
   * Completed
   */


  if (imported.completed.length > 0) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Page_Notice__WEBPACK_IMPORTED_MODULE_2__.default, {
      highlight: true
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_utils_wp__WEBPACK_IMPORTED_MODULE_3__.__)('Imported %s'), imported.completed.length), ". ", match);
  }
  /**
   * Diffs
   */


  if (diff > 0) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Page_Notice__WEBPACK_IMPORTED_MODULE_2__.default, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "flex items-center"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "font-500 text-gray-90 mr-8"
    }, (0,_utils_wp__WEBPACK_IMPORTED_MODULE_3__.__)('Application')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "w-1 h-[48px] bg-gray-5 mt-1 mr-8"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      className: "pl-4",
      href: "#",
      onClick: handleDiffsLink
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_utils_wp__WEBPACK_IMPORTED_MODULE_3__.__)('%s mismatch'), diff))));
  }
  /**
   * Matching
   */


  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Page_Notice__WEBPACK_IMPORTED_MODULE_2__.default, null, match);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImportNotice);

/***/ }),

/***/ "./resources/scripts/user-interface/components/Application/Row.js":
/*!************************************************************************!*\
  !*** ./resources/scripts/user-interface/components/Application/Row.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Page_PseudoFade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Page/PseudoFade */ "./resources/scripts/user-interface/components/Page/PseudoFade.js");


/**
 * Row From To
 *
 * @param {object} props
 */

var RowFromTo = function RowFromTo(_ref) {
  var valueFrom = _ref.valueFrom,
      valueTo = _ref.valueTo;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, valueFrom !== '' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "mr-[6px]"
  }, String(valueFrom)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: " px-[6px] py-[2px] text-primary-10 rounded border border-primary-10"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "mr-4 text-12"
  }, String.fromCharCode(8594)), String(valueTo)));
};
/**
 * Row
 *
 * @param {object} props
 */


var Row = function Row(_ref2) {
  var intervention = _ref2.intervention,
      database = _ref2.database;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: " flex h-[44px] text-13 lg:text-14 leading-none text-gray-50 border-b border-gray-2 last:-mb-1"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: " relative w-1/2 px-[16px] pt-1 flex items-center truncate"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, intervention.key), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Page_PseudoFade__WEBPACK_IMPORTED_MODULE_1__.default, null)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: " relative w-1/2 pt-1 px-12 flex flex-wrap items-center border-l border-gray-2 truncate"
  }, intervention.value !== database.value ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RowFromTo, {
    valueFrom: database.value,
    valueTo: intervention.value
  }) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, String(intervention.value)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Page_PseudoFade__WEBPACK_IMPORTED_MODULE_1__.default, null)));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Row);

/***/ }),

/***/ "./resources/scripts/user-interface/components/Application/RowEmpty.js":
/*!*****************************************************************************!*\
  !*** ./resources/scripts/user-interface/components/Application/RowEmpty.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_wp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/wp */ "./resources/scripts/user-interface/utils/wp.js");


/**
 * Import Row Empty
 */

var RowEmpty = function RowEmpty() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: " h-[44px] lg:h-[40px] px-16 flex items-center text-14 leading-none text-gray-50 last:border-0"
  }, (0,_utils_wp__WEBPACK_IMPORTED_MODULE_1__.__)('Nothing found'), ".");
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RowEmpty);

/***/ }),

/***/ "./resources/scripts/user-interface/components/Export.js":
/*!***************************************************************!*\
  !*** ./resources/scripts/user-interface/components/Export.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Page_Page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Page/Page */ "./resources/scripts/user-interface/components/Page/Page.js");
/* harmony import */ var _Page_CodeBlock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Page/CodeBlock */ "./resources/scripts/user-interface/components/Page/CodeBlock.js");
/* harmony import */ var _Page_Sidebar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Page/Sidebar */ "./resources/scripts/user-interface/components/Page/Sidebar.js");
/* harmony import */ var _Page_Toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Page/Toolbar */ "./resources/scripts/user-interface/components/Page/Toolbar.js");
/* harmony import */ var _Page_ButtonCopy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Page/ButtonCopy */ "./resources/scripts/user-interface/components/Page/ButtonCopy.js");
/* harmony import */ var _Page_Loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Page/Loader */ "./resources/scripts/user-interface/components/Page/Loader.js");
/* harmony import */ var _utils_wp__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/wp */ "./resources/scripts/user-interface/utils/wp.js");













/**
 * Group List
 *
 * List of checkbox items which can be filtered.
 */

var groupList = [{
  id: 'theme',
  title: 'Theme'
}, {
  id: 'plugins',
  title: 'Plugins'
}, {
  id: 'general',
  title: 'General'
}, {
  id: 'writing',
  title: 'Writing'
}, {
  id: 'reading',
  title: 'Reading'
}, {
  id: 'discussion',
  title: 'Discussion'
}, {
  id: 'media',
  title: 'Media'
}, {
  id: 'permalinks',
  title: 'Permalinks'
}, {
  id: 'privacy',
  title: 'Privacy'
}];
/**
 * WordPress Fetch Nonce
 */

_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4___default().use(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4___default().createNonceMiddleware(intervention.nonce));
/**
 * Fetch Get Checked Items
 *
 * Filter/reduce `checkedItems` to only get keys with state `true`.
 *
 * @param {Map} items
 * @returns {string}
 */

var getListItems = function getListItems(checkedItems) {
  var getKeysEqualToTrue = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(checkedItems.entries()).reduce(function (carry, item) {
    var _item = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(item, 2),
        k = _item[0],
        v = _item[1];

    if (v === true) {
      carry.push(k);
    }

    return carry;
  }, []);

  return getKeysEqualToTrue;
};
/**
 * Set List
 *
 * Fetch `groupList` and set all keys to `true`, used for `toggle all`.
 *
 * @param {boolean} state
 * @returns {Map}
 */


var setList = function setList() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var groupListMap = new Map();
  groupList.map(function (item) {
    Array.isArray(state) ? groupListMap.set(item.id, state.includes(item.id)) : groupListMap.set(item.id, state);
  });
  return groupListMap;
};
/**
 * List Has False
 *
 * Used for `toggle all` controls.
 *
 * @returns {boolean}
 */


var listHasFalse = function listHasFalse(checkedItems) {
  var valuesArray = Array.from(checkedItems.values());
  return valuesArray.includes(false);
};
/**
 * Export
 */


var Export = function Export() {
  var storage = sessionStorage.getItem('intervention-tools-export-groups');

  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)({
    items: storage ? setList(JSON.parse(storage)) : setList(true)
  }),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState, 2),
      checked = _useState2[0],
      setChecked = _useState2[1];

  var _useState3 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState3, 2),
      codeBlock = _useState4[0],
      setCodeBlock = _useState4[1];

  var _useState5 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(true),
      _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState5, 2),
      loading = _useState6[0],
      setLoading = _useState6[1];
  /**
   * Change`checked`
   *
   * Fetch new response from `UserInterface/Tools/Export.php`.
   */


  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    setLoading(true);
    var groups = getListItems(checked.items);
    /**
     * Fetch the code preview from `Export.php`.
     */

    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4___default()({
      url: intervention.route["export"].url,
      method: 'POST',
      data: {
        groups: groups
      }
    }).then(function (res) {
      setCodeBlock(res);
      setLoading(false);
    });
    /**
     * Save session storage.
     */

    sessionStorage.setItem('intervention-tools-export-groups', JSON.stringify(groups));
  }, [checked]);
  /**
   * Handle Change
   *
   * Change `checked.items` to new group states.
   *
   * @param {Map} group
   * @param {boolean} state
   */

  var handleChange = function handleChange(group, state) {
    setChecked({
      items: checked.items.set(group, state)
    });
  };
  /**
   * Render
   */


  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_Page_Page__WEBPACK_IMPORTED_MODULE_5__.default, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_Page_Sidebar__WEBPACK_IMPORTED_MODULE_7__.default, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Panel, {
    className: "border-0 border-b border-gray-5"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_utils_wp__WEBPACK_IMPORTED_MODULE_11__.__)('Application', 'intervention'),
    icon: _wordpress_element__WEBPACK_IMPORTED_MODULE_2__.more,
    initialOpen: true,
    className: "w-full"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", {
    className: "flex flex-wrap w-full"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", {
    className: "w-1/2 md:w-1/4 lg:w-full xl:w-1/2 mb-8"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CheckboxControl, {
    label: (0,_utils_wp__WEBPACK_IMPORTED_MODULE_11__.__)('Toggle All', 'intervention'),
    checked: !listHasFalse(checked.items),
    onChange: function onChange() {
      return setChecked({
        items: setList(listHasFalse(checked.items))
      });
    }
  })), groupList.map(function (_ref) {
    var _checked$items$get;

    var id = _ref.id,
        title = _ref.title;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", {
      key: id,
      className: "w-1/2 md:w-1/4 lg:w-full xl:w-1/2 mb-8"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CheckboxControl, {
      label: (0,_utils_wp__WEBPACK_IMPORTED_MODULE_11__.__)(title),
      checked: (_checked$items$get = checked.items.get(id)) !== null && _checked$items$get !== void 0 ? _checked$items$get : false,
      onChange: function onChange(state) {
        return handleChange(id, state);
      }
    }));
  })))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", {
    className: "flex-1 w-1/2"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_Page_Toolbar__WEBPACK_IMPORTED_MODULE_8__.default, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", {
    className: "flex flex-wrap items-center text-14 text-gray-90"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("span", {
    className: "font-500 text-gray-90 mr-12"
  }, (0,_utils_wp__WEBPACK_IMPORTED_MODULE_11__.__)('Export')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", {
    className: "w-1 h-[48px] bg-gray-5 mt-1 mr-8"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("a", {
    href: "https://github.com/soberwp/intervention/blob/master/.github/application-export.md",
    className: "pl-4"
  }, (0,_utils_wp__WEBPACK_IMPORTED_MODULE_11__.__)('Help'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_Page_ButtonCopy__WEBPACK_IMPORTED_MODULE_9__.default, {
    textToCopy: codeBlock
  })), codeBlock === false && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_Page_Loader__WEBPACK_IMPORTED_MODULE_10__.default, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_Page_CodeBlock__WEBPACK_IMPORTED_MODULE_6__.default, {
    loading: loading
  }, codeBlock)));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Export);

/***/ }),

/***/ "./resources/scripts/user-interface/components/Head.js":
/*!*************************************************************!*\
  !*** ./resources/scripts/user-interface/components/Head.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Head_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Head/Header */ "./resources/scripts/user-interface/components/Head/Header.js");
/* harmony import */ var _Head_Name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Head/Name */ "./resources/scripts/user-interface/components/Head/Name.js");
/* harmony import */ var _Head_NavLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Head/NavLink */ "./resources/scripts/user-interface/components/Head/NavLink.js");
/* harmony import */ var _Head_OutboundLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Head/OutboundLink */ "./resources/scripts/user-interface/components/Head/OutboundLink.js");
/* harmony import */ var _utils_wp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/wp */ "./resources/scripts/user-interface/utils/wp.js");






/**
 * Head
 */

var Head = function Head() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Head_Header__WEBPACK_IMPORTED_MODULE_1__.default, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex flex-wrap"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Head_Name__WEBPACK_IMPORTED_MODULE_2__.default, null, "Intervention"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex flex-wrap items-center"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Head_NavLink__WEBPACK_IMPORTED_MODULE_3__.default, {
    to: "/"
  }, (0,_utils_wp__WEBPACK_IMPORTED_MODULE_5__.__)('Admin')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Head_NavLink__WEBPACK_IMPORTED_MODULE_3__.default, {
    to: "/application"
  }, (0,_utils_wp__WEBPACK_IMPORTED_MODULE_5__.__)('Application')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Head_NavLink__WEBPACK_IMPORTED_MODULE_3__.default, {
    to: "/export"
  }, (0,_utils_wp__WEBPACK_IMPORTED_MODULE_5__.__)('Export')))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "hidden md:flex md:flex-wrap items-center"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Head_OutboundLink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "https://github.com/soberwp/intervention"
  }, (0,_utils_wp__WEBPACK_IMPORTED_MODULE_5__.__)('Documentation')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "h-full flex items-center border-l border-gray-5 pl-12 ml-12 text-14 text-gray-50"
  }, _utils_wp__WEBPACK_IMPORTED_MODULE_5__.version)));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Head);

/***/ }),

/***/ "./resources/scripts/user-interface/components/Head/Header.js":
/*!********************************************************************!*\
  !*** ./resources/scripts/user-interface/components/Head/Header.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


var Name = function Name(_ref) {
  var children = _ref.children;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: " flex justify-between h-[60px] py-0 px-16 z-30 bg-white border-b border-gray-5"
  }, children);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Name);

/***/ }),

/***/ "./resources/scripts/user-interface/components/Head/Name.js":
/*!******************************************************************!*\
  !*** ./resources/scripts/user-interface/components/Head/Name.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


var Name = function Name(_ref) {
  var children = _ref.children;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: " flex items-center mr-[18px] font-600 text-20 text-gray-90"
  }, children);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Name);

/***/ }),

/***/ "./resources/scripts/user-interface/components/Head/NavLink.js":
/*!*********************************************************************!*\
  !*** ./resources/scripts/user-interface/components/Head/NavLink.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");



var NavLink = function NavLink(_ref) {
  var to = _ref.to,
      children = _ref.children;
  var match = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useMatch)(to);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.NavLink, {
    to: to,
    className: "\n        flex\n        items-center\n        h-[36px]\n        mx-[2px]\n        mt-2\n        px-[6px]\n        leading-none\n        no-underline\n        text-14\n        rounded\n        border\n        first:ml-0\n        hover:text-primary\n        active:shadow-none\n        focus:shadow-none\n        hover:shadow-none\n        ".concat(match ? 'font-500 text-primary-10 border-primary-10' : 'font-400 text-gray-60 border-white')
  }, children);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavLink);

/***/ }),

/***/ "./resources/scripts/user-interface/components/Head/OutboundLink.js":
/*!**************************************************************************!*\
  !*** ./resources/scripts/user-interface/components/Head/OutboundLink.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


// import { ExternalLink } from '@wordpress/components';
var Outbound = function Outbound(_ref) {
  var href = _ref.href,
      children = _ref.children;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: href,
    className: " flex items-center mx-4 h-full no-underline text-14 text-gray-50"
  }, children);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Outbound);

/***/ }),

/***/ "./resources/scripts/user-interface/components/Page/ButtonCopy.js":
/*!************************************************************************!*\
  !*** ./resources/scripts/user-interface/components/Page/ButtonCopy.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-copy-to-clipboard */ "./node_modules/react-copy-to-clipboard/lib/index.js");
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_wp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/wp */ "./resources/scripts/user-interface/utils/wp.js");






/**
 * Button Copy
 *
 * @param {object} props
 */

var ButtonCopy = function ButtonCopy(_ref) {
  var textToCopy = _ref.textToCopy;

  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)((0,_utils_wp__WEBPACK_IMPORTED_MODULE_4__.__)('Copy')),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState, 2),
      copied = _useState2[0],
      setCopied = _useState2[1];

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var timer = setTimeout(function () {
      return setCopied((0,_utils_wp__WEBPACK_IMPORTED_MODULE_4__.__)('Copy'));
    }, 5000);
    return function () {
      return clearTimeout(timer);
    };
  }, [copied]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_3__.CopyToClipboard, {
    text: textToCopy,
    onCopy: function onCopy() {
      return setCopied((0,_utils_wp__WEBPACK_IMPORTED_MODULE_4__.__)('Copied'));
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    className: "is-secondary"
  }, copied));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ButtonCopy);

/***/ }),

/***/ "./resources/scripts/user-interface/components/Page/CodeBlock.js":
/*!***********************************************************************!*\
  !*** ./resources/scripts/user-interface/components/Page/CodeBlock.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prismjs */ "./node_modules/prismjs/prism.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prismjs_components_prism_markup_templating__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prismjs/components/prism-markup-templating */ "./node_modules/prismjs/components/prism-markup-templating.js");
/* harmony import */ var prismjs_components_prism_markup_templating__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_markup_templating__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prismjs_components_prism_php__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prismjs/components/prism-php */ "./node_modules/prismjs/components/prism-php.js");
/* harmony import */ var prismjs_components_prism_php__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_php__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _PseudoFade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PseudoFade */ "./resources/scripts/user-interface/components/Page/PseudoFade.js");






/**
 * Code Block
 *
 * @param {object} props
 */

var CodeBlock = function CodeBlock(_ref) {
  var loading = _ref.loading,
      children = _ref.children;
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    return prismjs__WEBPACK_IMPORTED_MODULE_1___default().highlightAll();
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "\n        relative\n        py-20\n        px-16\n        transition-opacity\n        ".concat(loading ? 'opacity-75' : '', "\n      ")
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("pre", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("code", {
    className: "language-php text-14"
  }, children)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_PseudoFade__WEBPACK_IMPORTED_MODULE_4__.default, null));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CodeBlock);

/***/ }),

/***/ "./resources/scripts/user-interface/components/Page/Loader.js":
/*!********************************************************************!*\
  !*** ./resources/scripts/user-interface/components/Page/Loader.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Loader
 */

var Loader = function Loader() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "px-16 py-20"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Spinner, null));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loader);

/***/ }),

/***/ "./resources/scripts/user-interface/components/Page/Notice.js":
/*!********************************************************************!*\
  !*** ./resources/scripts/user-interface/components/Page/Notice.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Notice
 *
 * @param {object} props
 */
var Notice = function Notice(_ref) {
  var children = _ref.children,
      highlight = _ref.highlight;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "\n          w-full\n          min-h-[50px]\n          py-14\n          flex\n          items-center\n          ".concat(highlight ? 'border-l-[3px] border-primary pl-[13px] pr-16' : '', "\n      ")
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "m-0 text-14"
  }, children)));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Notice);

/***/ }),

/***/ "./resources/scripts/user-interface/components/Page/Page.js":
/*!******************************************************************!*\
  !*** ./resources/scripts/user-interface/components/Page/Page.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Page
 *
 * @param {object} props
 */
var Page = function Page(_ref) {
  var children = _ref.children;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bg-white flex-1 flex flex-wrap w-full"
  }, children);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);

/***/ }),

/***/ "./resources/scripts/user-interface/components/Page/PseudoFade.js":
/*!************************************************************************!*\
  !*** ./resources/scripts/user-interface/components/Page/PseudoFade.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Pseudo Fade
 */
var PseudoFade = function PseudoFade() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: " absolute top-0 right-0 w-[40px] h-full bg-gradient-to-r from-transparent to-white"
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PseudoFade);

/***/ }),

/***/ "./resources/scripts/user-interface/components/Page/Sidebar.js":
/*!*********************************************************************!*\
  !*** ./resources/scripts/user-interface/components/Page/Sidebar.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Sidebar
 *
 * @param {object} props
 */
var Sidebar = function Sidebar(_ref) {
  var children = _ref.children;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: " w-full lg:w-[240px] xl:w-[360px] 2xl:w-[480px] flex flex-col lg:border-l border-gray-5 lg:order-1"
  }, children);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidebar);

/***/ }),

/***/ "./resources/scripts/user-interface/components/Page/Toolbar.js":
/*!*********************************************************************!*\
  !*** ./resources/scripts/user-interface/components/Page/Toolbar.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Toolbar
 *
 * @param {object} props
 */
var Toolbar = function Toolbar(_ref) {
  var children = _ref.children;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: " relative sticky top-0 md:top-[32px] w-full h-[50px] px-16 py-4 flex items-center justify-between border-b border-gray-5 bg-white z-10"
  }, children);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Toolbar);

/***/ }),

/***/ "./resources/scripts/user-interface/components/Page/WordPressContainer.js":
/*!********************************************************************************!*\
  !*** ./resources/scripts/user-interface/components/Page/WordPressContainer.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * WordPress Container
 *
 * @param {object} props
 */
var WordPressContainer = function WordPressContainer(_ref) {
  var children = _ref.children;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "relative -ml-10 md:-ml-20"
  }, children);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WordPressContainer);

/***/ }),

/***/ "./resources/scripts/user-interface/utils/admin.js":
/*!*********************************************************!*\
  !*** ./resources/scripts/user-interface/utils/admin.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRolesAsNiceName": () => (/* binding */ getRolesAsNiceName),
/* harmony export */   "sortDataByRoleKeys": () => (/* binding */ sortDataByRoleKeys),
/* harmony export */   "getInterventionKey": () => (/* binding */ getInterventionKey),
/* harmony export */   "objHasKey": () => (/* binding */ objHasKey)
/* harmony export */ });
/**
 * Get Roles as Nicename
 *
 * @param {array} roles
 * @returns {string}
 */
var getRolesAsNiceName = function getRolesAsNiceName(roles) {
  var joined = roles.join(', '); // const caps = joined.charAt(0).toUpperCase() + joined.slice(1);

  var andPos = joined.lastIndexOf(',');
  return andPos > 0 ? joined.substring(0, andPos) + ' and ' + joined.substring(andPos + 1) : joined;
};
/**
 * Sort Applied By Registered Roles Key
 *
 * @param {object} applied
 * @param {number} i
 * @returns {object}
 */

var sortDataByRoleKeys = function sortDataByRoleKeys(data, i) {
  var roleKeys = Object.keys(intervention.route.admin.data.roles);
  var findIndex = data[i].roles.group.join();
  data.sort(function (a, b) {
    var indexA = roleKeys.indexOf(a.roles.group[0]);
    var indexB = roleKeys.indexOf(b.roles.group[0]);

    if (indexA > indexB) {
      return 1;
    }

    if (indexA < indexB) {
      return -1;
    }

    return 0;
  });
  var indexFound = data.reduce(function (carry, item, index) {
    if (findIndex === item.roles.group.join()) {
      carry = index;
    }

    return carry;
  }, i);
  var index = indexFound ? indexFound : 0;
  return {
    data: data,
    index: index
  };
};
/**
 * Get Intervention Key
 *
 * @param {string} k
 * @returns {string}
 */

var getInterventionKey = function getInterventionKey() {
  var k = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  /**
   * Replace component identifiers
   */
  var replace = [':hierachical', ':text', ':number', ':group', ':exemption', '/:route'];
  replace.forEach(function (item) {
    k = k.replaceAll(item, '');
  });
  /**
   * Replace `/` with `.` to match Intervention
   */

  k = k.replaceAll('/', '.');
  return k;
};
var objHasKey = function objHasKey(obj, k) {
  return Object.prototype.hasOwnProperty.call(obj, k) && k !== '';
};

/***/ }),

/***/ "./resources/scripts/user-interface/utils/arr.js":
/*!*******************************************************!*\
  !*** ./resources/scripts/user-interface/utils/arr.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "arrayHasDuplicates": () => (/* binding */ arrayHasDuplicates)
/* harmony export */ });
var arrayHasDuplicates = function arrayHasDuplicates(array) {
  return new Set(array).size !== array.length;
};

/***/ }),

/***/ "./resources/scripts/user-interface/utils/wp.js":
/*!******************************************************!*\
  !*** ./resources/scripts/user-interface/utils/wp.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__": () => (/* binding */ __),
/* harmony export */   "version": () => (/* binding */ version)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);

var __ = function __(text) {
  return (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)(text, 'intervention');
};
var version = 'v2.0.0-rc';

/***/ }),

/***/ "./node_modules/copy-to-clipboard/index.js":
/*!*************************************************!*\
  !*** ./node_modules/copy-to-clipboard/index.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var deselectCurrent = __webpack_require__(/*! toggle-selection */ "./node_modules/toggle-selection/index.js");

var clipboardToIE11Formatting = {
  "text/plain": "Text",
  "text/html": "Url",
  "default": "Text"
}

var defaultMessage = "Copy to clipboard: #{key}, Enter";

function format(message) {
  var copyKey = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
  return message.replace(/#{\s*key\s*}/g, copyKey);
}

function copy(text, options) {
  var debug,
    message,
    reselectPrevious,
    range,
    selection,
    mark,
    success = false;
  if (!options) {
    options = {};
  }
  debug = options.debug || false;
  try {
    reselectPrevious = deselectCurrent();

    range = document.createRange();
    selection = document.getSelection();

    mark = document.createElement("span");
    mark.textContent = text;
    // reset user styles for span element
    mark.style.all = "unset";
    // prevents scrolling to the end of the page
    mark.style.position = "fixed";
    mark.style.top = 0;
    mark.style.clip = "rect(0, 0, 0, 0)";
    // used to preserve spaces and line breaks
    mark.style.whiteSpace = "pre";
    // do not inherit user-select (it may be `none`)
    mark.style.webkitUserSelect = "text";
    mark.style.MozUserSelect = "text";
    mark.style.msUserSelect = "text";
    mark.style.userSelect = "text";
    mark.addEventListener("copy", function(e) {
      e.stopPropagation();
      if (options.format) {
        e.preventDefault();
        if (typeof e.clipboardData === "undefined") { // IE 11
          debug && console.warn("unable to use e.clipboardData");
          debug && console.warn("trying IE specific stuff");
          window.clipboardData.clearData();
          var format = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting["default"]
          window.clipboardData.setData(format, text);
        } else { // all other browsers
          e.clipboardData.clearData();
          e.clipboardData.setData(options.format, text);
        }
      }
      if (options.onCopy) {
        e.preventDefault();
        options.onCopy(e.clipboardData);
      }
    });

    document.body.appendChild(mark);

    range.selectNodeContents(mark);
    selection.addRange(range);

    var successful = document.execCommand("copy");
    if (!successful) {
      throw new Error("copy command was unsuccessful");
    }
    success = true;
  } catch (err) {
    debug && console.error("unable to copy using execCommand: ", err);
    debug && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(options.format || "text", text);
      options.onCopy && options.onCopy(window.clipboardData);
      success = true;
    } catch (err) {
      debug && console.error("unable to copy using clipboardData: ", err);
      debug && console.error("falling back to prompt");
      message = format("message" in options ? options.message : defaultMessage);
      window.prompt(message, text);
    }
  } finally {
    if (selection) {
      if (typeof selection.removeRange == "function") {
        selection.removeRange(range);
      } else {
        selection.removeAllRanges();
      }
    }

    if (mark) {
      document.body.removeChild(mark);
    }
    reselectPrevious();
  }

  return success;
}

module.exports = copy;


/***/ }),

/***/ "./node_modules/history/index.js":
/*!***************************************!*\
  !*** ./node_modules/history/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Action": () => (/* binding */ r),
/* harmony export */   "createBrowserHistory": () => (/* binding */ createBrowserHistory),
/* harmony export */   "createHashHistory": () => (/* binding */ createHashHistory),
/* harmony export */   "createMemoryHistory": () => (/* binding */ createMemoryHistory),
/* harmony export */   "createPath": () => (/* binding */ I),
/* harmony export */   "parsePath": () => (/* binding */ J)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
var r,B=r||(r={});B.Pop="POP";B.Push="PUSH";B.Replace="REPLACE";var C= true?function(b){return Object.freeze(b)}:0;function D(b,h){if(!b){"undefined"!==typeof console&&console.warn(h);try{throw Error(h);}catch(k){}}}function E(b){b.preventDefault();b.returnValue=""}
function F(){var b=[];return{get length(){return b.length},push:function(h){b.push(h);return function(){b=b.filter(function(k){return k!==h})}},call:function(h){b.forEach(function(k){return k&&k(h)})}}}function H(){return Math.random().toString(36).substr(2,8)}function I(b){var h=b.pathname,k=b.search;b=b.hash;return(void 0===h?"/":h)+(void 0===k?"":k)+(void 0===b?"":b)}
function J(b){var h={};if(b){var k=b.indexOf("#");0<=k&&(h.hash=b.substr(k),b=b.substr(0,k));k=b.indexOf("?");0<=k&&(h.search=b.substr(k),b=b.substr(0,k));b&&(h.pathname=b)}return h}
function createBrowserHistory(b){function h(){var c=p.location,a=m.state||{};return[a.idx,C({pathname:c.pathname,search:c.search,hash:c.hash,state:a.usr||null,key:a.key||"default"})]}function k(c){return"string"===typeof c?c:I(c)}function x(c,a){void 0===a&&(a=null);return C((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({},q,"string"===typeof c?J(c):c,{state:a,key:H()}))}function z(c){t=c;c=h();v=c[0];q=c[1];d.call({action:t,location:q})}function A(c,a){function e(){A(c,a)}var l=r.Push,g=x(c,a);if(!f.length||(f.call({action:l,
location:g,retry:e}),!1)){var n=[{usr:g.state,key:g.key,idx:v+1},k(g)];g=n[0];n=n[1];try{m.pushState(g,"",n)}catch(G){p.location.assign(n)}z(l)}}function y(c,a){function e(){y(c,a)}var l=r.Replace,g=x(c,a);f.length&&(f.call({action:l,location:g,retry:e}),1)||(g=[{usr:g.state,key:g.key,idx:v},k(g)],m.replaceState(g[0],"",g[1]),z(l))}function w(c){m.go(c)}void 0===b&&(b={});b=b.window;var p=void 0===b?document.defaultView:b,m=p.history,u=null;p.addEventListener("popstate",function(){if(u)f.call(u),
u=null;else{var c=r.Pop,a=h(),e=a[0];a=a[1];if(f.length)if(null!=e){var l=v-e;l&&(u={action:c,location:a,retry:function(){w(-1*l)}},w(l))}else true?D(!1,"You are trying to block a POP navigation to a location that was not created by the history library. The block will fail silently in production, but in general you should do all navigation with the history library (instead of using window.history.pushState directly) to avoid this situation."):0;else z(c)}});var t=
r.Pop;b=h();var v=b[0],q=b[1],d=F(),f=F();null==v&&(v=0,m.replaceState((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({},m.state,{idx:v}),""));return{get action(){return t},get location(){return q},createHref:k,push:A,replace:y,go:w,back:function(){w(-1)},forward:function(){w(1)},listen:function(c){return d.push(c)},block:function(c){var a=f.push(c);1===f.length&&p.addEventListener("beforeunload",E);return function(){a();f.length||p.removeEventListener("beforeunload",E)}}}};
function createHashHistory(b){function h(){var a=J(m.location.hash.substr(1)),e=a.pathname,l=a.search;a=a.hash;var g=u.state||{};return[g.idx,C({pathname:void 0===e?"/":e,search:void 0===l?"":l,hash:void 0===a?"":a,state:g.usr||null,key:g.key||"default"})]}function k(){if(t)c.call(t),t=null;else{var a=r.Pop,e=h(),l=e[0];e=e[1];if(c.length)if(null!=l){var g=q-l;g&&(t={action:a,location:e,retry:function(){p(-1*g)}},p(g))}else true?D(!1,"You are trying to block a POP navigation to a location that was not created by the history library. The block will fail silently in production, but in general you should do all navigation with the history library (instead of using window.history.pushState directly) to avoid this situation."):
0;else A(a)}}function x(a){var e=document.querySelector("base"),l="";e&&e.getAttribute("href")&&(e=m.location.href,l=e.indexOf("#"),l=-1===l?e:e.slice(0,l));return l+"#"+("string"===typeof a?a:I(a))}function z(a,e){void 0===e&&(e=null);return C((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({},d,"string"===typeof a?J(a):a,{state:e,key:H()}))}function A(a){v=a;a=h();q=a[0];d=a[1];f.call({action:v,location:d})}function y(a,e){function l(){y(a,e)}var g=r.Push,n=z(a,e); true?D("/"===n.pathname.charAt(0),
"Relative pathnames are not supported in hash history.push("+JSON.stringify(a)+")"):0;if(!c.length||(c.call({action:g,location:n,retry:l}),!1)){var G=[{usr:n.state,key:n.key,idx:q+1},x(n)];n=G[0];G=G[1];try{u.pushState(n,"",G)}catch(K){m.location.assign(G)}A(g)}}function w(a,e){function l(){w(a,e)}var g=r.Replace,n=z(a,e); true?D("/"===n.pathname.charAt(0),"Relative pathnames are not supported in hash history.replace("+JSON.stringify(a)+")"):0;c.length&&(c.call({action:g,
location:n,retry:l}),1)||(n=[{usr:n.state,key:n.key,idx:q},x(n)],u.replaceState(n[0],"",n[1]),A(g))}function p(a){u.go(a)}void 0===b&&(b={});b=b.window;var m=void 0===b?document.defaultView:b,u=m.history,t=null;m.addEventListener("popstate",k);m.addEventListener("hashchange",function(){var a=h()[1];I(a)!==I(d)&&k()});var v=r.Pop;b=h();var q=b[0],d=b[1],f=F(),c=F();null==q&&(q=0,u.replaceState((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({},u.state,{idx:q}),""));return{get action(){return v},get location(){return d},createHref:x,push:y,
replace:w,go:p,back:function(){p(-1)},forward:function(){p(1)},listen:function(a){return f.push(a)},block:function(a){var e=c.push(a);1===c.length&&m.addEventListener("beforeunload",E);return function(){e();c.length||m.removeEventListener("beforeunload",E)}}}};
function createMemoryHistory(b){function h(d,f){void 0===f&&(f=null);return C((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({},t,"string"===typeof d?J(d):d,{state:f,key:H()}))}function k(d,f,c){return!q.length||(q.call({action:d,location:f,retry:c}),!1)}function x(d,f){u=d;t=f;v.call({action:u,location:t})}function z(d,f){var c=r.Push,a=h(d,f); true?D("/"===t.pathname.charAt(0),"Relative pathnames are not supported in memory history.push("+JSON.stringify(d)+")"):0;k(c,a,function(){z(d,f)})&&
(m+=1,p.splice(m,p.length,a),x(c,a))}function A(d,f){var c=r.Replace,a=h(d,f); true?D("/"===t.pathname.charAt(0),"Relative pathnames are not supported in memory history.replace("+JSON.stringify(d)+")"):0;k(c,a,function(){A(d,f)})&&(p[m]=a,x(c,a))}function y(d){var f=Math.min(Math.max(m+d,0),p.length-1),c=r.Pop,a=p[f];k(c,a,function(){y(d)})&&(m=f,x(c,a))}void 0===b&&(b={});var w=b;b=w.initialEntries;w=w.initialIndex;var p=(void 0===b?["/"]:b).map(function(d){var f=
C((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({pathname:"/",search:"",hash:"",state:null,key:H()},"string"===typeof d?J(d):d)); true?D("/"===f.pathname.charAt(0),"Relative pathnames are not supported in createMemoryHistory({ initialEntries }) (invalid entry: "+JSON.stringify(d)+")"):0;return f}),m=Math.min(Math.max(null==w?p.length-1:w,0),p.length-1),u=r.Pop,t=p[m],v=F(),q=F();return{get index(){return m},get action(){return u},get location(){return t},createHref:function(d){return"string"===typeof d?
d:I(d)},push:z,replace:A,go:y,back:function(){y(-1)},forward:function(){y(1)},listen:function(d){return v.push(d)},block:function(d){return q.push(d)}}};
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/prismjs/components/prism-markup-templating.js":
/*!********************************************************************!*\
  !*** ./node_modules/prismjs/components/prism-markup-templating.js ***!
  \********************************************************************/
/***/ (() => {

(function (Prism) {

	/**
	 * Returns the placeholder for the given language id and index.
	 *
	 * @param {string} language
	 * @param {string|number} index
	 * @returns {string}
	 */
	function getPlaceholder(language, index) {
		return '___' + language.toUpperCase() + index + '___';
	}

	Object.defineProperties(Prism.languages['markup-templating'] = {}, {
		buildPlaceholders: {
			/**
			 * Tokenize all inline templating expressions matching `placeholderPattern`.
			 *
			 * If `replaceFilter` is provided, only matches of `placeholderPattern` for which `replaceFilter` returns
			 * `true` will be replaced.
			 *
			 * @param {object} env The environment of the `before-tokenize` hook.
			 * @param {string} language The language id.
			 * @param {RegExp} placeholderPattern The matches of this pattern will be replaced by placeholders.
			 * @param {(match: string) => boolean} [replaceFilter]
			 */
			value: function (env, language, placeholderPattern, replaceFilter) {
				if (env.language !== language) {
					return;
				}

				var tokenStack = env.tokenStack = [];

				env.code = env.code.replace(placeholderPattern, function (match) {
					if (typeof replaceFilter === 'function' && !replaceFilter(match)) {
						return match;
					}
					var i = tokenStack.length;
					var placeholder;

					// Check for existing strings
					while (env.code.indexOf(placeholder = getPlaceholder(language, i)) !== -1) {
						++i;
					}

					// Create a sparse array
					tokenStack[i] = match;

					return placeholder;
				});

				// Switch the grammar to markup
				env.grammar = Prism.languages.markup;
			}
		},
		tokenizePlaceholders: {
			/**
			 * Replace placeholders with proper tokens after tokenizing.
			 *
			 * @param {object} env The environment of the `after-tokenize` hook.
			 * @param {string} language The language id.
			 */
			value: function (env, language) {
				if (env.language !== language || !env.tokenStack) {
					return;
				}

				// Switch the grammar back
				env.grammar = Prism.languages[language];

				var j = 0;
				var keys = Object.keys(env.tokenStack);

				function walkTokens(tokens) {
					for (var i = 0; i < tokens.length; i++) {
						// all placeholders are replaced already
						if (j >= keys.length) {
							break;
						}

						var token = tokens[i];
						if (typeof token === 'string' || (token.content && typeof token.content === 'string')) {
							var k = keys[j];
							var t = env.tokenStack[k];
							var s = typeof token === 'string' ? token : token.content;
							var placeholder = getPlaceholder(language, k);

							var index = s.indexOf(placeholder);
							if (index > -1) {
								++j;

								var before = s.substring(0, index);
								var middle = new Prism.Token(language, Prism.tokenize(t, env.grammar), 'language-' + language, t);
								var after = s.substring(index + placeholder.length);

								var replacement = [];
								if (before) {
									replacement.push.apply(replacement, walkTokens([before]));
								}
								replacement.push(middle);
								if (after) {
									replacement.push.apply(replacement, walkTokens([after]));
								}

								if (typeof token === 'string') {
									tokens.splice.apply(tokens, [i, 1].concat(replacement));
								} else {
									token.content = replacement;
								}
							}
						} else if (token.content /* && typeof token.content !== 'string' */) {
							walkTokens(token.content);
						}
					}

					return tokens;
				}

				walkTokens(env.tokens);
			}
		}
	});

}(Prism));


/***/ }),

/***/ "./node_modules/prismjs/components/prism-php.js":
/*!******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-php.js ***!
  \******************************************************/
/***/ (() => {

/**
 * Original by Aaron Harun: http://aahacreative.com/2012/07/31/php-syntax-highlighting-prism/
 * Modified by Miles Johnson: http://milesj.me
 * Rewritten by Tom Pavelec
 *
 * Supports PHP 5.3 - 8.0
 */
(function (Prism) {
	var comment = /\/\*[\s\S]*?\*\/|\/\/.*|#(?!\[).*/;
	var constant = [
		{
			pattern: /\b(?:false|true)\b/i,
			alias: 'boolean'
		},
		{
			pattern: /(::\s*)\b[a-z_]\w*\b(?!\s*\()/i,
			greedy: true,
			lookbehind: true,
		},
		{
			pattern: /(\b(?:case|const)\s+)\b[a-z_]\w*(?=\s*[;=])/i,
			greedy: true,
			lookbehind: true,
		},
		/\b(?:null)\b/i,
		/\b[A-Z_][A-Z0-9_]*\b(?!\s*\()/,
	];
	var number = /\b0b[01]+(?:_[01]+)*\b|\b0o[0-7]+(?:_[0-7]+)*\b|\b0x[\da-f]+(?:_[\da-f]+)*\b|(?:\b\d+(?:_\d+)*\.?(?:\d+(?:_\d+)*)?|\B\.\d+)(?:e[+-]?\d+)?/i;
	var operator = /<?=>|\?\?=?|\.{3}|\??->|[!=]=?=?|::|\*\*=?|--|\+\+|&&|\|\||<<|>>|[?~]|[/^|%*&<>.+-]=?/;
	var punctuation = /[{}\[\](),:;]/;

	Prism.languages.php = {
		'delimiter': {
			pattern: /\?>$|^<\?(?:php(?=\s)|=)?/i,
			alias: 'important'
		},
		'comment': comment,
		'variable': /\$+(?:\w+\b|(?=\{))/i,
		'package': {
			pattern: /(namespace\s+|use\s+(?:function\s+)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
			lookbehind: true,
			inside: {
				'punctuation': /\\/
			}
		},
		'class-name-definition': {
			pattern: /(\b(?:class|enum|interface|trait)\s+)\b[a-z_]\w*(?!\\)\b/i,
			lookbehind: true,
			alias: 'class-name'
		},
		'function-definition': {
			pattern: /(\bfunction\s+)[a-z_]\w*(?=\s*\()/i,
			lookbehind: true,
			alias: 'function'
		},
		'keyword': [
			{
				pattern: /(\(\s*)\b(?:bool|boolean|int|integer|float|string|object|array)\b(?=\s*\))/i,
				alias: 'type-casting',
				greedy: true,
				lookbehind: true
			},
			{
				pattern: /([(,?]\s*)\b(?:bool|int|float|string|object|array(?!\s*\()|mixed|self|static|callable|iterable|(?:null|false)(?=\s*\|))\b(?=\s*\$)/i,
				alias: 'type-hint',
				greedy: true,
				lookbehind: true
			},
			{
				pattern: /([(,?]\s*[\w|]\|\s*)(?:null|false)\b(?=\s*\$)/i,
				alias: 'type-hint',
				greedy: true,
				lookbehind: true
			},
			{
				pattern: /(\)\s*:\s*(?:\?\s*)?)\b(?:bool|int|float|string|object|void|array(?!\s*\()|mixed|self|static|callable|iterable|(?:null|false)(?=\s*\|))\b/i,
				alias: 'return-type',
				greedy: true,
				lookbehind: true
			},
			{
				pattern: /(\)\s*:\s*(?:\?\s*)?[\w|]\|\s*)(?:null|false)\b/i,
				alias: 'return-type',
				greedy: true,
				lookbehind: true
			},
			{
				pattern: /\b(?:bool|int|float|string|object|void|array(?!\s*\()|mixed|iterable|(?:null|false)(?=\s*\|))\b/i,
				alias: 'type-declaration',
				greedy: true
			},
			{
				pattern: /(\|\s*)(?:null|false)\b/i,
				alias: 'type-declaration',
				greedy: true,
				lookbehind: true
			},
			{
				pattern: /\b(?:parent|self|static)(?=\s*::)/i,
				alias: 'static-context',
				greedy: true
			},
			{
				// yield from
				pattern: /(\byield\s+)from\b/i,
				lookbehind: true
			},
			// `class` is always a keyword unlike other keywords
			/\bclass\b/i,
			{
				// https://www.php.net/manual/en/reserved.keywords.php
				//
				// keywords cannot be preceded by "->"
				// the complex lookbehind means `(?<!(?:->|::)\s*)`
				pattern: /((?:^|[^\s>:]|(?:^|[^-])>|(?:^|[^:]):)\s*)\b(?:__halt_compiler|abstract|and|array|as|break|callable|case|catch|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|enum|eval|exit|extends|final|finally|fn|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|namespace|match|new|or|parent|print|private|protected|public|require|require_once|return|self|static|switch|throw|trait|try|unset|use|var|while|xor|yield)\b/i,
				lookbehind: true
			}
		],
		'argument-name': {
			pattern: /([(,]\s+)\b[a-z_]\w*(?=\s*:(?!:))/i,
			lookbehind: true
		},
		'class-name': [
			{
				pattern: /(\b(?:extends|implements|instanceof|new(?!\s+self|\s+static))\s+|\bcatch\s*\()\b[a-z_]\w*(?!\\)\b/i,
				greedy: true,
				lookbehind: true
			},
			{
				pattern: /(\|\s*)\b[a-z_]\w*(?!\\)\b/i,
				greedy: true,
				lookbehind: true
			},
			{
				pattern: /\b[a-z_]\w*(?!\\)\b(?=\s*\|)/i,
				greedy: true
			},
			{
				pattern: /(\|\s*)(?:\\?\b[a-z_]\w*)+\b/i,
				alias: 'class-name-fully-qualified',
				greedy: true,
				lookbehind: true,
				inside: {
					'punctuation': /\\/
				}
			},
			{
				pattern: /(?:\\?\b[a-z_]\w*)+\b(?=\s*\|)/i,
				alias: 'class-name-fully-qualified',
				greedy: true,
				inside: {
					'punctuation': /\\/
				}
			},
			{
				pattern: /(\b(?:extends|implements|instanceof|new(?!\s+self\b|\s+static\b))\s+|\bcatch\s*\()(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
				alias: 'class-name-fully-qualified',
				greedy: true,
				lookbehind: true,
				inside: {
					'punctuation': /\\/
				}
			},
			{
				pattern: /\b[a-z_]\w*(?=\s*\$)/i,
				alias: 'type-declaration',
				greedy: true
			},
			{
				pattern: /(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,
				alias: ['class-name-fully-qualified', 'type-declaration'],
				greedy: true,
				inside: {
					'punctuation': /\\/
				}
			},
			{
				pattern: /\b[a-z_]\w*(?=\s*::)/i,
				alias: 'static-context',
				greedy: true
			},
			{
				pattern: /(?:\\?\b[a-z_]\w*)+(?=\s*::)/i,
				alias: ['class-name-fully-qualified', 'static-context'],
				greedy: true,
				inside: {
					'punctuation': /\\/
				}
			},
			{
				pattern: /([(,?]\s*)[a-z_]\w*(?=\s*\$)/i,
				alias: 'type-hint',
				greedy: true,
				lookbehind: true
			},
			{
				pattern: /([(,?]\s*)(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,
				alias: ['class-name-fully-qualified', 'type-hint'],
				greedy: true,
				lookbehind: true,
				inside: {
					'punctuation': /\\/
				}
			},
			{
				pattern: /(\)\s*:\s*(?:\?\s*)?)\b[a-z_]\w*(?!\\)\b/i,
				alias: 'return-type',
				greedy: true,
				lookbehind: true
			},
			{
				pattern: /(\)\s*:\s*(?:\?\s*)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
				alias: ['class-name-fully-qualified', 'return-type'],
				greedy: true,
				lookbehind: true,
				inside: {
					'punctuation': /\\/
				}
			}
		],
		'constant': constant,
		'function': {
			pattern: /(^|[^\\\w])\\?[a-z_](?:[\w\\]*\w)?(?=\s*\()/i,
			lookbehind: true,
			inside: {
				'punctuation': /\\/
			}
		},
		'property': {
			pattern: /(->\s*)\w+/,
			lookbehind: true
		},
		'number': number,
		'operator': operator,
		'punctuation': punctuation
	};

	var string_interpolation = {
		pattern: /\{\$(?:\{(?:\{[^{}]+\}|[^{}]+)\}|[^{}])+\}|(^|[^\\{])\$+(?:\w+(?:\[[^\r\n\[\]]+\]|->\w+)?)/,
		lookbehind: true,
		inside: Prism.languages.php
	};

	var string = [
		{
			pattern: /<<<'([^']+)'[\r\n](?:.*[\r\n])*?\1;/,
			alias: 'nowdoc-string',
			greedy: true,
			inside: {
				'delimiter': {
					pattern: /^<<<'[^']+'|[a-z_]\w*;$/i,
					alias: 'symbol',
					inside: {
						'punctuation': /^<<<'?|[';]$/
					}
				}
			}
		},
		{
			pattern: /<<<(?:"([^"]+)"[\r\n](?:.*[\r\n])*?\1;|([a-z_]\w*)[\r\n](?:.*[\r\n])*?\2;)/i,
			alias: 'heredoc-string',
			greedy: true,
			inside: {
				'delimiter': {
					pattern: /^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,
					alias: 'symbol',
					inside: {
						'punctuation': /^<<<"?|[";]$/
					}
				},
				'interpolation': string_interpolation
			}
		},
		{
			pattern: /`(?:\\[\s\S]|[^\\`])*`/,
			alias: 'backtick-quoted-string',
			greedy: true
		},
		{
			pattern: /'(?:\\[\s\S]|[^\\'])*'/,
			alias: 'single-quoted-string',
			greedy: true
		},
		{
			pattern: /"(?:\\[\s\S]|[^\\"])*"/,
			alias: 'double-quoted-string',
			greedy: true,
			inside: {
				'interpolation': string_interpolation
			}
		}
	];

	Prism.languages.insertBefore('php', 'variable', {
		'string': string,
		'attribute': {
			pattern: /#\[(?:[^"'\/#]|\/(?![*/])|\/\/.*$|#(?!\[).*$|\/\*(?:[^*]|\*(?!\/))*\*\/|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')+\](?=\s*[a-z$#])/im,
			greedy: true,
			inside: {
				'attribute-content': {
					pattern: /^(#\[)[\s\S]+(?=\]$)/,
					lookbehind: true,
					// inside can appear subset of php
					inside: {
						'comment': comment,
						'string': string,
						'attribute-class-name': [
							{
								pattern: /([^:]|^)\b[a-z_]\w*(?!\\)\b/i,
								alias: 'class-name',
								greedy: true,
								lookbehind: true
							},
							{
								pattern: /([^:]|^)(?:\\?\b[a-z_]\w*)+/i,
								alias: [
									'class-name',
									'class-name-fully-qualified'
								],
								greedy: true,
								lookbehind: true,
								inside: {
									'punctuation': /\\/
								}
							}
						],
						'constant': constant,
						'number': number,
						'operator': operator,
						'punctuation': punctuation
					}
				},
				'delimiter': {
					pattern: /^#\[|\]$/,
					alias: 'punctuation'
				}
			}
		},
	});

	Prism.hooks.add('before-tokenize', function (env) {
		if (!/<\?/.test(env.code)) {
			return;
		}

		var phpPattern = /<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#(?!\[))(?:[^?\n\r]|\?(?!>))*(?=$|\?>|[\r\n])|#\[|\/\*(?:[^*]|\*(?!\/))*(?:\*\/|$))*?(?:\?>|$)/gi;
		Prism.languages['markup-templating'].buildPlaceholders(env, 'php', phpPattern);
	});

	Prism.hooks.add('after-tokenize', function (env) {
		Prism.languages['markup-templating'].tokenizePlaceholders(env, 'php');
	});

}(Prism));


/***/ }),

/***/ "./node_modules/prismjs/prism.js":
/*!***************************************!*\
  !*** ./node_modules/prismjs/prism.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


/* **********************************************
     Begin prism-core.js
********************************************** */

/// <reference lib="WebWorker"/>

var _self = (typeof window !== 'undefined')
	? window   // if in browser
	: (
		(typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope)
			? self // if in worker
			: {}   // if in node js
	);

/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */
var Prism = (function (_self) {

	// Private helper vars
	var lang = /\blang(?:uage)?-([\w-]+)\b/i;
	var uniqueId = 0;

	// The grammar object for plaintext
	var plainTextGrammar = {};


	var _ = {
		/**
		 * By default, Prism will attempt to highlight all code elements (by calling {@link Prism.highlightAll}) on the
		 * current page after the page finished loading. This might be a problem if e.g. you wanted to asynchronously load
		 * additional languages or plugins yourself.
		 *
		 * By setting this value to `true`, Prism will not automatically highlight all code elements on the page.
		 *
		 * You obviously have to change this value before the automatic highlighting started. To do this, you can add an
		 * empty Prism object into the global scope before loading the Prism script like this:
		 *
		 * ```js
		 * window.Prism = window.Prism || {};
		 * Prism.manual = true;
		 * // add a new <script> to load Prism's script
		 * ```
		 *
		 * @default false
		 * @type {boolean}
		 * @memberof Prism
		 * @public
		 */
		manual: _self.Prism && _self.Prism.manual,
		disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,

		/**
		 * A namespace for utility methods.
		 *
		 * All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
		 * change or disappear at any time.
		 *
		 * @namespace
		 * @memberof Prism
		 */
		util: {
			encode: function encode(tokens) {
				if (tokens instanceof Token) {
					return new Token(tokens.type, encode(tokens.content), tokens.alias);
				} else if (Array.isArray(tokens)) {
					return tokens.map(encode);
				} else {
					return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
				}
			},

			/**
			 * Returns the name of the type of the given value.
			 *
			 * @param {any} o
			 * @returns {string}
			 * @example
			 * type(null)      === 'Null'
			 * type(undefined) === 'Undefined'
			 * type(123)       === 'Number'
			 * type('foo')     === 'String'
			 * type(true)      === 'Boolean'
			 * type([1, 2])    === 'Array'
			 * type({})        === 'Object'
			 * type(String)    === 'Function'
			 * type(/abc+/)    === 'RegExp'
			 */
			type: function (o) {
				return Object.prototype.toString.call(o).slice(8, -1);
			},

			/**
			 * Returns a unique number for the given object. Later calls will still return the same number.
			 *
			 * @param {Object} obj
			 * @returns {number}
			 */
			objId: function (obj) {
				if (!obj['__id']) {
					Object.defineProperty(obj, '__id', { value: ++uniqueId });
				}
				return obj['__id'];
			},

			/**
			 * Creates a deep clone of the given object.
			 *
			 * The main intended use of this function is to clone language definitions.
			 *
			 * @param {T} o
			 * @param {Record<number, any>} [visited]
			 * @returns {T}
			 * @template T
			 */
			clone: function deepClone(o, visited) {
				visited = visited || {};

				var clone; var id;
				switch (_.util.type(o)) {
					case 'Object':
						id = _.util.objId(o);
						if (visited[id]) {
							return visited[id];
						}
						clone = /** @type {Record<string, any>} */ ({});
						visited[id] = clone;

						for (var key in o) {
							if (o.hasOwnProperty(key)) {
								clone[key] = deepClone(o[key], visited);
							}
						}

						return /** @type {any} */ (clone);

					case 'Array':
						id = _.util.objId(o);
						if (visited[id]) {
							return visited[id];
						}
						clone = [];
						visited[id] = clone;

						(/** @type {Array} */(/** @type {any} */(o))).forEach(function (v, i) {
							clone[i] = deepClone(v, visited);
						});

						return /** @type {any} */ (clone);

					default:
						return o;
				}
			},

			/**
			 * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
			 *
			 * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
			 *
			 * @param {Element} element
			 * @returns {string}
			 */
			getLanguage: function (element) {
				while (element && !lang.test(element.className)) {
					element = element.parentElement;
				}
				if (element) {
					return (element.className.match(lang) || [, 'none'])[1].toLowerCase();
				}
				return 'none';
			},

			/**
			 * Returns the script element that is currently executing.
			 *
			 * This does __not__ work for line script element.
			 *
			 * @returns {HTMLScriptElement | null}
			 */
			currentScript: function () {
				if (typeof document === 'undefined') {
					return null;
				}
				if ('currentScript' in document && 1 < 2 /* hack to trip TS' flow analysis */) {
					return /** @type {any} */ (document.currentScript);
				}

				// IE11 workaround
				// we'll get the src of the current script by parsing IE11's error stack trace
				// this will not work for inline scripts

				try {
					throw new Error();
				} catch (err) {
					// Get file src url from stack. Specifically works with the format of stack traces in IE.
					// A stack will look like this:
					//
					// Error
					//    at _.util.currentScript (http://localhost/components/prism-core.js:119:5)
					//    at Global code (http://localhost/components/prism-core.js:606:1)

					var src = (/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(err.stack) || [])[1];
					if (src) {
						var scripts = document.getElementsByTagName('script');
						for (var i in scripts) {
							if (scripts[i].src == src) {
								return scripts[i];
							}
						}
					}
					return null;
				}
			},

			/**
			 * Returns whether a given class is active for `element`.
			 *
			 * The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
			 * if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
			 * given class is just the given class with a `no-` prefix.
			 *
			 * Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
			 * closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
			 * ancestors have the given class or the negated version of it, then the default activation will be returned.
			 *
			 * In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
			 * version of it, the class is considered active.
			 *
			 * @param {Element} element
			 * @param {string} className
			 * @param {boolean} [defaultActivation=false]
			 * @returns {boolean}
			 */
			isActive: function (element, className, defaultActivation) {
				var no = 'no-' + className;

				while (element) {
					var classList = element.classList;
					if (classList.contains(className)) {
						return true;
					}
					if (classList.contains(no)) {
						return false;
					}
					element = element.parentElement;
				}
				return !!defaultActivation;
			}
		},

		/**
		 * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
		 *
		 * @namespace
		 * @memberof Prism
		 * @public
		 */
		languages: {
			/**
			 * The grammar for plain, unformatted text.
			 */
			plain: plainTextGrammar,
			plaintext: plainTextGrammar,
			text: plainTextGrammar,
			txt: plainTextGrammar,

			/**
			 * Creates a deep copy of the language with the given id and appends the given tokens.
			 *
			 * If a token in `redef` also appears in the copied language, then the existing token in the copied language
			 * will be overwritten at its original position.
			 *
			 * ## Best practices
			 *
			 * Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
			 * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
			 * understand the language definition because, normally, the order of tokens matters in Prism grammars.
			 *
			 * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
			 * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
			 *
			 * @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
			 * @param {Grammar} redef The new tokens to append.
			 * @returns {Grammar} The new language created.
			 * @public
			 * @example
			 * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
			 *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
			 *     // at its original position
			 *     'comment': { ... },
			 *     // CSS doesn't have a 'color' token, so this token will be appended
			 *     'color': /\b(?:red|green|blue)\b/
			 * });
			 */
			extend: function (id, redef) {
				var lang = _.util.clone(_.languages[id]);

				for (var key in redef) {
					lang[key] = redef[key];
				}

				return lang;
			},

			/**
			 * Inserts tokens _before_ another token in a language definition or any other grammar.
			 *
			 * ## Usage
			 *
			 * This helper method makes it easy to modify existing languages. For example, the CSS language definition
			 * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
			 * in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
			 * appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
			 * this:
			 *
			 * ```js
			 * Prism.languages.markup.style = {
			 *     // token
			 * };
			 * ```
			 *
			 * then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
			 * before existing tokens. For the CSS example above, you would use it like this:
			 *
			 * ```js
			 * Prism.languages.insertBefore('markup', 'cdata', {
			 *     'style': {
			 *         // token
			 *     }
			 * });
			 * ```
			 *
			 * ## Special cases
			 *
			 * If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
			 * will be ignored.
			 *
			 * This behavior can be used to insert tokens after `before`:
			 *
			 * ```js
			 * Prism.languages.insertBefore('markup', 'comment', {
			 *     'comment': Prism.languages.markup.comment,
			 *     // tokens after 'comment'
			 * });
			 * ```
			 *
			 * ## Limitations
			 *
			 * The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
			 * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
			 * differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
			 * deleting properties which is necessary to insert at arbitrary positions.
			 *
			 * To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
			 * Instead, it will create a new object and replace all references to the target object with the new one. This
			 * can be done without temporarily deleting properties, so the iteration order is well-defined.
			 *
			 * However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
			 * you hold the target object in a variable, then the value of the variable will not change.
			 *
			 * ```js
			 * var oldMarkup = Prism.languages.markup;
			 * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
			 *
			 * assert(oldMarkup !== Prism.languages.markup);
			 * assert(newMarkup === Prism.languages.markup);
			 * ```
			 *
			 * @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
			 * object to be modified.
			 * @param {string} before The key to insert before.
			 * @param {Grammar} insert An object containing the key-value pairs to be inserted.
			 * @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
			 * object to be modified.
			 *
			 * Defaults to `Prism.languages`.
			 * @returns {Grammar} The new grammar object.
			 * @public
			 */
			insertBefore: function (inside, before, insert, root) {
				root = root || /** @type {any} */ (_.languages);
				var grammar = root[inside];
				/** @type {Grammar} */
				var ret = {};

				for (var token in grammar) {
					if (grammar.hasOwnProperty(token)) {

						if (token == before) {
							for (var newToken in insert) {
								if (insert.hasOwnProperty(newToken)) {
									ret[newToken] = insert[newToken];
								}
							}
						}

						// Do not insert token which also occur in insert. See #1525
						if (!insert.hasOwnProperty(token)) {
							ret[token] = grammar[token];
						}
					}
				}

				var old = root[inside];
				root[inside] = ret;

				// Update references in other language definitions
				_.languages.DFS(_.languages, function (key, value) {
					if (value === old && key != inside) {
						this[key] = ret;
					}
				});

				return ret;
			},

			// Traverse a language definition with Depth First Search
			DFS: function DFS(o, callback, type, visited) {
				visited = visited || {};

				var objId = _.util.objId;

				for (var i in o) {
					if (o.hasOwnProperty(i)) {
						callback.call(o, i, o[i], type || i);

						var property = o[i];
						var propertyType = _.util.type(property);

						if (propertyType === 'Object' && !visited[objId(property)]) {
							visited[objId(property)] = true;
							DFS(property, callback, null, visited);
						} else if (propertyType === 'Array' && !visited[objId(property)]) {
							visited[objId(property)] = true;
							DFS(property, callback, i, visited);
						}
					}
				}
			}
		},

		plugins: {},

		/**
		 * This is the most high-level function in Prism’s API.
		 * It fetches all the elements that have a `.language-xxxx` class and then calls {@link Prism.highlightElement} on
		 * each one of them.
		 *
		 * This is equivalent to `Prism.highlightAllUnder(document, async, callback)`.
		 *
		 * @param {boolean} [async=false] Same as in {@link Prism.highlightAllUnder}.
		 * @param {HighlightCallback} [callback] Same as in {@link Prism.highlightAllUnder}.
		 * @memberof Prism
		 * @public
		 */
		highlightAll: function (async, callback) {
			_.highlightAllUnder(document, async, callback);
		},

		/**
		 * Fetches all the descendants of `container` that have a `.language-xxxx` class and then calls
		 * {@link Prism.highlightElement} on each one of them.
		 *
		 * The following hooks will be run:
		 * 1. `before-highlightall`
		 * 2. `before-all-elements-highlight`
		 * 3. All hooks of {@link Prism.highlightElement} for each element.
		 *
		 * @param {ParentNode} container The root element, whose descendants that have a `.language-xxxx` class will be highlighted.
		 * @param {boolean} [async=false] Whether each element is to be highlighted asynchronously using Web Workers.
		 * @param {HighlightCallback} [callback] An optional callback to be invoked on each element after its highlighting is done.
		 * @memberof Prism
		 * @public
		 */
		highlightAllUnder: function (container, async, callback) {
			var env = {
				callback: callback,
				container: container,
				selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
			};

			_.hooks.run('before-highlightall', env);

			env.elements = Array.prototype.slice.apply(env.container.querySelectorAll(env.selector));

			_.hooks.run('before-all-elements-highlight', env);

			for (var i = 0, element; (element = env.elements[i++]);) {
				_.highlightElement(element, async === true, env.callback);
			}
		},

		/**
		 * Highlights the code inside a single element.
		 *
		 * The following hooks will be run:
		 * 1. `before-sanity-check`
		 * 2. `before-highlight`
		 * 3. All hooks of {@link Prism.highlight}. These hooks will be run by an asynchronous worker if `async` is `true`.
		 * 4. `before-insert`
		 * 5. `after-highlight`
		 * 6. `complete`
		 *
		 * Some the above hooks will be skipped if the element doesn't contain any text or there is no grammar loaded for
		 * the element's language.
		 *
		 * @param {Element} element The element containing the code.
		 * It must have a class of `language-xxxx` to be processed, where `xxxx` is a valid language identifier.
		 * @param {boolean} [async=false] Whether the element is to be highlighted asynchronously using Web Workers
		 * to improve performance and avoid blocking the UI when highlighting very large chunks of code. This option is
		 * [disabled by default](https://prismjs.com/faq.html#why-is-asynchronous-highlighting-disabled-by-default).
		 *
		 * Note: All language definitions required to highlight the code must be included in the main `prism.js` file for
		 * asynchronous highlighting to work. You can build your own bundle on the
		 * [Download page](https://prismjs.com/download.html).
		 * @param {HighlightCallback} [callback] An optional callback to be invoked after the highlighting is done.
		 * Mostly useful when `async` is `true`, since in that case, the highlighting is done asynchronously.
		 * @memberof Prism
		 * @public
		 */
		highlightElement: function (element, async, callback) {
			// Find language
			var language = _.util.getLanguage(element);
			var grammar = _.languages[language];

			// Set language on the element, if not present
			element.className = element.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;

			// Set language on the parent, for styling
			var parent = element.parentElement;
			if (parent && parent.nodeName.toLowerCase() === 'pre') {
				parent.className = parent.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
			}

			var code = element.textContent;

			var env = {
				element: element,
				language: language,
				grammar: grammar,
				code: code
			};

			function insertHighlightedCode(highlightedCode) {
				env.highlightedCode = highlightedCode;

				_.hooks.run('before-insert', env);

				env.element.innerHTML = env.highlightedCode;

				_.hooks.run('after-highlight', env);
				_.hooks.run('complete', env);
				callback && callback.call(env.element);
			}

			_.hooks.run('before-sanity-check', env);

			// plugins may change/add the parent/element
			parent = env.element.parentElement;
			if (parent && parent.nodeName.toLowerCase() === 'pre' && !parent.hasAttribute('tabindex')) {
				parent.setAttribute('tabindex', '0');
			}

			if (!env.code) {
				_.hooks.run('complete', env);
				callback && callback.call(env.element);
				return;
			}

			_.hooks.run('before-highlight', env);

			if (!env.grammar) {
				insertHighlightedCode(_.util.encode(env.code));
				return;
			}

			if (async && _self.Worker) {
				var worker = new Worker(_.filename);

				worker.onmessage = function (evt) {
					insertHighlightedCode(evt.data);
				};

				worker.postMessage(JSON.stringify({
					language: env.language,
					code: env.code,
					immediateClose: true
				}));
			} else {
				insertHighlightedCode(_.highlight(env.code, env.grammar, env.language));
			}
		},

		/**
		 * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
		 * and the language definitions to use, and returns a string with the HTML produced.
		 *
		 * The following hooks will be run:
		 * 1. `before-tokenize`
		 * 2. `after-tokenize`
		 * 3. `wrap`: On each {@link Token}.
		 *
		 * @param {string} text A string with the code to be highlighted.
		 * @param {Grammar} grammar An object containing the tokens to use.
		 *
		 * Usually a language definition like `Prism.languages.markup`.
		 * @param {string} language The name of the language definition passed to `grammar`.
		 * @returns {string} The highlighted HTML.
		 * @memberof Prism
		 * @public
		 * @example
		 * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
		 */
		highlight: function (text, grammar, language) {
			var env = {
				code: text,
				grammar: grammar,
				language: language
			};
			_.hooks.run('before-tokenize', env);
			env.tokens = _.tokenize(env.code, env.grammar);
			_.hooks.run('after-tokenize', env);
			return Token.stringify(_.util.encode(env.tokens), env.language);
		},

		/**
		 * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
		 * and the language definitions to use, and returns an array with the tokenized code.
		 *
		 * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
		 *
		 * This method could be useful in other contexts as well, as a very crude parser.
		 *
		 * @param {string} text A string with the code to be highlighted.
		 * @param {Grammar} grammar An object containing the tokens to use.
		 *
		 * Usually a language definition like `Prism.languages.markup`.
		 * @returns {TokenStream} An array of strings and tokens, a token stream.
		 * @memberof Prism
		 * @public
		 * @example
		 * let code = `var foo = 0;`;
		 * let tokens = Prism.tokenize(code, Prism.languages.javascript);
		 * tokens.forEach(token => {
		 *     if (token instanceof Prism.Token && token.type === 'number') {
		 *         console.log(`Found numeric literal: ${token.content}`);
		 *     }
		 * });
		 */
		tokenize: function (text, grammar) {
			var rest = grammar.rest;
			if (rest) {
				for (var token in rest) {
					grammar[token] = rest[token];
				}

				delete grammar.rest;
			}

			var tokenList = new LinkedList();
			addAfter(tokenList, tokenList.head, text);

			matchGrammar(text, tokenList, grammar, tokenList.head, 0);

			return toArray(tokenList);
		},

		/**
		 * @namespace
		 * @memberof Prism
		 * @public
		 */
		hooks: {
			all: {},

			/**
			 * Adds the given callback to the list of callbacks for the given hook.
			 *
			 * The callback will be invoked when the hook it is registered for is run.
			 * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
			 *
			 * One callback function can be registered to multiple hooks and the same hook multiple times.
			 *
			 * @param {string} name The name of the hook.
			 * @param {HookCallback} callback The callback function which is given environment variables.
			 * @public
			 */
			add: function (name, callback) {
				var hooks = _.hooks.all;

				hooks[name] = hooks[name] || [];

				hooks[name].push(callback);
			},

			/**
			 * Runs a hook invoking all registered callbacks with the given environment variables.
			 *
			 * Callbacks will be invoked synchronously and in the order in which they were registered.
			 *
			 * @param {string} name The name of the hook.
			 * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
			 * @public
			 */
			run: function (name, env) {
				var callbacks = _.hooks.all[name];

				if (!callbacks || !callbacks.length) {
					return;
				}

				for (var i = 0, callback; (callback = callbacks[i++]);) {
					callback(env);
				}
			}
		},

		Token: Token
	};
	_self.Prism = _;


	// Typescript note:
	// The following can be used to import the Token type in JSDoc:
	//
	//   @typedef {InstanceType<import("./prism-core")["Token"]>} Token

	/**
	 * Creates a new token.
	 *
	 * @param {string} type See {@link Token#type type}
	 * @param {string | TokenStream} content See {@link Token#content content}
	 * @param {string|string[]} [alias] The alias(es) of the token.
	 * @param {string} [matchedStr=""] A copy of the full string this token was created from.
	 * @class
	 * @global
	 * @public
	 */
	function Token(type, content, alias, matchedStr) {
		/**
		 * The type of the token.
		 *
		 * This is usually the key of a pattern in a {@link Grammar}.
		 *
		 * @type {string}
		 * @see GrammarToken
		 * @public
		 */
		this.type = type;
		/**
		 * The strings or tokens contained by this token.
		 *
		 * This will be a token stream if the pattern matched also defined an `inside` grammar.
		 *
		 * @type {string | TokenStream}
		 * @public
		 */
		this.content = content;
		/**
		 * The alias(es) of the token.
		 *
		 * @type {string|string[]}
		 * @see GrammarToken
		 * @public
		 */
		this.alias = alias;
		// Copy of the full string this token was created from
		this.length = (matchedStr || '').length | 0;
	}

	/**
	 * A token stream is an array of strings and {@link Token Token} objects.
	 *
	 * Token streams have to fulfill a few properties that are assumed by most functions (mostly internal ones) that process
	 * them.
	 *
	 * 1. No adjacent strings.
	 * 2. No empty strings.
	 *
	 *    The only exception here is the token stream that only contains the empty string and nothing else.
	 *
	 * @typedef {Array<string | Token>} TokenStream
	 * @global
	 * @public
	 */

	/**
	 * Converts the given token or token stream to an HTML representation.
	 *
	 * The following hooks will be run:
	 * 1. `wrap`: On each {@link Token}.
	 *
	 * @param {string | Token | TokenStream} o The token or token stream to be converted.
	 * @param {string} language The name of current language.
	 * @returns {string} The HTML representation of the token or token stream.
	 * @memberof Token
	 * @static
	 */
	Token.stringify = function stringify(o, language) {
		if (typeof o == 'string') {
			return o;
		}
		if (Array.isArray(o)) {
			var s = '';
			o.forEach(function (e) {
				s += stringify(e, language);
			});
			return s;
		}

		var env = {
			type: o.type,
			content: stringify(o.content, language),
			tag: 'span',
			classes: ['token', o.type],
			attributes: {},
			language: language
		};

		var aliases = o.alias;
		if (aliases) {
			if (Array.isArray(aliases)) {
				Array.prototype.push.apply(env.classes, aliases);
			} else {
				env.classes.push(aliases);
			}
		}

		_.hooks.run('wrap', env);

		var attributes = '';
		for (var name in env.attributes) {
			attributes += ' ' + name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
		}

		return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + attributes + '>' + env.content + '</' + env.tag + '>';
	};

	/**
	 * @param {RegExp} pattern
	 * @param {number} pos
	 * @param {string} text
	 * @param {boolean} lookbehind
	 * @returns {RegExpExecArray | null}
	 */
	function matchPattern(pattern, pos, text, lookbehind) {
		pattern.lastIndex = pos;
		var match = pattern.exec(text);
		if (match && lookbehind && match[1]) {
			// change the match to remove the text matched by the Prism lookbehind group
			var lookbehindLength = match[1].length;
			match.index += lookbehindLength;
			match[0] = match[0].slice(lookbehindLength);
		}
		return match;
	}

	/**
	 * @param {string} text
	 * @param {LinkedList<string | Token>} tokenList
	 * @param {any} grammar
	 * @param {LinkedListNode<string | Token>} startNode
	 * @param {number} startPos
	 * @param {RematchOptions} [rematch]
	 * @returns {void}
	 * @private
	 *
	 * @typedef RematchOptions
	 * @property {string} cause
	 * @property {number} reach
	 */
	function matchGrammar(text, tokenList, grammar, startNode, startPos, rematch) {
		for (var token in grammar) {
			if (!grammar.hasOwnProperty(token) || !grammar[token]) {
				continue;
			}

			var patterns = grammar[token];
			patterns = Array.isArray(patterns) ? patterns : [patterns];

			for (var j = 0; j < patterns.length; ++j) {
				if (rematch && rematch.cause == token + ',' + j) {
					return;
				}

				var patternObj = patterns[j];
				var inside = patternObj.inside;
				var lookbehind = !!patternObj.lookbehind;
				var greedy = !!patternObj.greedy;
				var alias = patternObj.alias;

				if (greedy && !patternObj.pattern.global) {
					// Without the global flag, lastIndex won't work
					var flags = patternObj.pattern.toString().match(/[imsuy]*$/)[0];
					patternObj.pattern = RegExp(patternObj.pattern.source, flags + 'g');
				}

				/** @type {RegExp} */
				var pattern = patternObj.pattern || patternObj;

				for ( // iterate the token list and keep track of the current token/string position
					var currentNode = startNode.next, pos = startPos;
					currentNode !== tokenList.tail;
					pos += currentNode.value.length, currentNode = currentNode.next
				) {

					if (rematch && pos >= rematch.reach) {
						break;
					}

					var str = currentNode.value;

					if (tokenList.length > text.length) {
						// Something went terribly wrong, ABORT, ABORT!
						return;
					}

					if (str instanceof Token) {
						continue;
					}

					var removeCount = 1; // this is the to parameter of removeBetween
					var match;

					if (greedy) {
						match = matchPattern(pattern, pos, text, lookbehind);
						if (!match) {
							break;
						}

						var from = match.index;
						var to = match.index + match[0].length;
						var p = pos;

						// find the node that contains the match
						p += currentNode.value.length;
						while (from >= p) {
							currentNode = currentNode.next;
							p += currentNode.value.length;
						}
						// adjust pos (and p)
						p -= currentNode.value.length;
						pos = p;

						// the current node is a Token, then the match starts inside another Token, which is invalid
						if (currentNode.value instanceof Token) {
							continue;
						}

						// find the last node which is affected by this match
						for (
							var k = currentNode;
							k !== tokenList.tail && (p < to || typeof k.value === 'string');
							k = k.next
						) {
							removeCount++;
							p += k.value.length;
						}
						removeCount--;

						// replace with the new match
						str = text.slice(pos, p);
						match.index -= pos;
					} else {
						match = matchPattern(pattern, 0, str, lookbehind);
						if (!match) {
							continue;
						}
					}

					// eslint-disable-next-line no-redeclare
					var from = match.index;
					var matchStr = match[0];
					var before = str.slice(0, from);
					var after = str.slice(from + matchStr.length);

					var reach = pos + str.length;
					if (rematch && reach > rematch.reach) {
						rematch.reach = reach;
					}

					var removeFrom = currentNode.prev;

					if (before) {
						removeFrom = addAfter(tokenList, removeFrom, before);
						pos += before.length;
					}

					removeRange(tokenList, removeFrom, removeCount);

					var wrapped = new Token(token, inside ? _.tokenize(matchStr, inside) : matchStr, alias, matchStr);
					currentNode = addAfter(tokenList, removeFrom, wrapped);

					if (after) {
						addAfter(tokenList, currentNode, after);
					}

					if (removeCount > 1) {
						// at least one Token object was removed, so we have to do some rematching
						// this can only happen if the current pattern is greedy

						/** @type {RematchOptions} */
						var nestedRematch = {
							cause: token + ',' + j,
							reach: reach
						};
						matchGrammar(text, tokenList, grammar, currentNode.prev, pos, nestedRematch);

						// the reach might have been extended because of the rematching
						if (rematch && nestedRematch.reach > rematch.reach) {
							rematch.reach = nestedRematch.reach;
						}
					}
				}
			}
		}
	}

	/**
	 * @typedef LinkedListNode
	 * @property {T} value
	 * @property {LinkedListNode<T> | null} prev The previous node.
	 * @property {LinkedListNode<T> | null} next The next node.
	 * @template T
	 * @private
	 */

	/**
	 * @template T
	 * @private
	 */
	function LinkedList() {
		/** @type {LinkedListNode<T>} */
		var head = { value: null, prev: null, next: null };
		/** @type {LinkedListNode<T>} */
		var tail = { value: null, prev: head, next: null };
		head.next = tail;

		/** @type {LinkedListNode<T>} */
		this.head = head;
		/** @type {LinkedListNode<T>} */
		this.tail = tail;
		this.length = 0;
	}

	/**
	 * Adds a new node with the given value to the list.
	 *
	 * @param {LinkedList<T>} list
	 * @param {LinkedListNode<T>} node
	 * @param {T} value
	 * @returns {LinkedListNode<T>} The added node.
	 * @template T
	 */
	function addAfter(list, node, value) {
		// assumes that node != list.tail && values.length >= 0
		var next = node.next;

		var newNode = { value: value, prev: node, next: next };
		node.next = newNode;
		next.prev = newNode;
		list.length++;

		return newNode;
	}
	/**
	 * Removes `count` nodes after the given node. The given node will not be removed.
	 *
	 * @param {LinkedList<T>} list
	 * @param {LinkedListNode<T>} node
	 * @param {number} count
	 * @template T
	 */
	function removeRange(list, node, count) {
		var next = node.next;
		for (var i = 0; i < count && next !== list.tail; i++) {
			next = next.next;
		}
		node.next = next;
		next.prev = node;
		list.length -= i;
	}
	/**
	 * @param {LinkedList<T>} list
	 * @returns {T[]}
	 * @template T
	 */
	function toArray(list) {
		var array = [];
		var node = list.head.next;
		while (node !== list.tail) {
			array.push(node.value);
			node = node.next;
		}
		return array;
	}


	if (!_self.document) {
		if (!_self.addEventListener) {
			// in Node.js
			return _;
		}

		if (!_.disableWorkerMessageHandler) {
			// In worker
			_self.addEventListener('message', function (evt) {
				var message = JSON.parse(evt.data);
				var lang = message.language;
				var code = message.code;
				var immediateClose = message.immediateClose;

				_self.postMessage(_.highlight(code, _.languages[lang], lang));
				if (immediateClose) {
					_self.close();
				}
			}, false);
		}

		return _;
	}

	// Get current script and highlight
	var script = _.util.currentScript();

	if (script) {
		_.filename = script.src;

		if (script.hasAttribute('data-manual')) {
			_.manual = true;
		}
	}

	function highlightAutomaticallyCallback() {
		if (!_.manual) {
			_.highlightAll();
		}
	}

	if (!_.manual) {
		// If the document state is "loading", then we'll use DOMContentLoaded.
		// If the document state is "interactive" and the prism.js script is deferred, then we'll also use the
		// DOMContentLoaded event because there might be some plugins or languages which have also been deferred and they
		// might take longer one animation frame to execute which can create a race condition where only some plugins have
		// been loaded when Prism.highlightAll() is executed, depending on how fast resources are loaded.
		// See https://github.com/PrismJS/prism/issues/2102
		var readyState = document.readyState;
		if (readyState === 'loading' || readyState === 'interactive' && script && script.defer) {
			document.addEventListener('DOMContentLoaded', highlightAutomaticallyCallback);
		} else {
			if (window.requestAnimationFrame) {
				window.requestAnimationFrame(highlightAutomaticallyCallback);
			} else {
				window.setTimeout(highlightAutomaticallyCallback, 16);
			}
		}
	}

	return _;

}(_self));

if ( true && module.exports) {
	module.exports = Prism;
}

// hack for components to work correctly in node.js
if (typeof __webpack_require__.g !== 'undefined') {
	__webpack_require__.g.Prism = Prism;
}

// some additional documentation/types

/**
 * The expansion of a simple `RegExp` literal to support additional properties.
 *
 * @typedef GrammarToken
 * @property {RegExp} pattern The regular expression of the token.
 * @property {boolean} [lookbehind=false] If `true`, then the first capturing group of `pattern` will (effectively)
 * behave as a lookbehind group meaning that the captured text will not be part of the matched text of the new token.
 * @property {boolean} [greedy=false] Whether the token is greedy.
 * @property {string|string[]} [alias] An optional alias or list of aliases.
 * @property {Grammar} [inside] The nested grammar of this token.
 *
 * The `inside` grammar will be used to tokenize the text value of each token of this kind.
 *
 * This can be used to make nested and even recursive language definitions.
 *
 * Note: This can cause infinite recursion. Be careful when you embed different languages or even the same language into
 * each another.
 * @global
 * @public
 */

/**
 * @typedef Grammar
 * @type {Object<string, RegExp | GrammarToken | Array<RegExp | GrammarToken>>}
 * @property {Grammar} [rest] An optional grammar object that will be appended to this grammar.
 * @global
 * @public
 */

/**
 * A function which will invoked after an element was successfully highlighted.
 *
 * @callback HighlightCallback
 * @param {Element} element The element successfully highlighted.
 * @returns {void}
 * @global
 * @public
 */

/**
 * @callback HookCallback
 * @param {Object<string, any>} env The environment variables of the hook.
 * @returns {void}
 * @global
 * @public
 */


/* **********************************************
     Begin prism-markup.js
********************************************** */

Prism.languages.markup = {
	'comment': /<!--[\s\S]*?-->/,
	'prolog': /<\?[\s\S]+?\?>/,
	'doctype': {
		// https://www.w3.org/TR/xml/#NT-doctypedecl
		pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
		greedy: true,
		inside: {
			'internal-subset': {
				pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
				lookbehind: true,
				greedy: true,
				inside: null // see below
			},
			'string': {
				pattern: /"[^"]*"|'[^']*'/,
				greedy: true
			},
			'punctuation': /^<!|>$|[[\]]/,
			'doctype-tag': /^DOCTYPE/,
			'name': /[^\s<>'"]+/
		}
	},
	'cdata': /<!\[CDATA\[[\s\S]*?\]\]>/i,
	'tag': {
		pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
		greedy: true,
		inside: {
			'tag': {
				pattern: /^<\/?[^\s>\/]+/,
				inside: {
					'punctuation': /^<\/?/,
					'namespace': /^[^\s>\/:]+:/
				}
			},
			'special-attr': [],
			'attr-value': {
				pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
				inside: {
					'punctuation': [
						{
							pattern: /^=/,
							alias: 'attr-equals'
						},
						/"|'/
					]
				}
			},
			'punctuation': /\/?>/,
			'attr-name': {
				pattern: /[^\s>\/]+/,
				inside: {
					'namespace': /^[^\s>\/:]+:/
				}
			}

		}
	},
	'entity': [
		{
			pattern: /&[\da-z]{1,8};/i,
			alias: 'named-entity'
		},
		/&#x?[\da-f]{1,8};/i
	]
};

Prism.languages.markup['tag'].inside['attr-value'].inside['entity'] =
	Prism.languages.markup['entity'];
Prism.languages.markup['doctype'].inside['internal-subset'].inside = Prism.languages.markup;

// Plugin to make entity title show the real entity, idea by Roman Komarov
Prism.hooks.add('wrap', function (env) {

	if (env.type === 'entity') {
		env.attributes['title'] = env.content.replace(/&amp;/, '&');
	}
});

Object.defineProperty(Prism.languages.markup.tag, 'addInlined', {
	/**
	 * Adds an inlined language to markup.
	 *
	 * An example of an inlined language is CSS with `<style>` tags.
	 *
	 * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
	 * case insensitive.
	 * @param {string} lang The language key.
	 * @example
	 * addInlined('style', 'css');
	 */
	value: function addInlined(tagName, lang) {
		var includedCdataInside = {};
		includedCdataInside['language-' + lang] = {
			pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
			lookbehind: true,
			inside: Prism.languages[lang]
		};
		includedCdataInside['cdata'] = /^<!\[CDATA\[|\]\]>$/i;

		var inside = {
			'included-cdata': {
				pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
				inside: includedCdataInside
			}
		};
		inside['language-' + lang] = {
			pattern: /[\s\S]+/,
			inside: Prism.languages[lang]
		};

		var def = {};
		def[tagName] = {
			pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function () { return tagName; }), 'i'),
			lookbehind: true,
			greedy: true,
			inside: inside
		};

		Prism.languages.insertBefore('markup', 'cdata', def);
	}
});
Object.defineProperty(Prism.languages.markup.tag, 'addAttribute', {
	/**
	 * Adds an pattern to highlight languages embedded in HTML attributes.
	 *
	 * An example of an inlined language is CSS with `style` attributes.
	 *
	 * @param {string} attrName The name of the tag that contains the inlined language. This name will be treated as
	 * case insensitive.
	 * @param {string} lang The language key.
	 * @example
	 * addAttribute('style', 'css');
	 */
	value: function (attrName, lang) {
		Prism.languages.markup.tag.inside['special-attr'].push({
			pattern: RegExp(
				/(^|["'\s])/.source + '(?:' + attrName + ')' + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
				'i'
			),
			lookbehind: true,
			inside: {
				'attr-name': /^[^\s=]+/,
				'attr-value': {
					pattern: /=[\s\S]+/,
					inside: {
						'value': {
							pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
							lookbehind: true,
							alias: [lang, 'language-' + lang],
							inside: Prism.languages[lang]
						},
						'punctuation': [
							{
								pattern: /^=/,
								alias: 'attr-equals'
							},
							/"|'/
						]
					}
				}
			}
		});
	}
});

Prism.languages.html = Prism.languages.markup;
Prism.languages.mathml = Prism.languages.markup;
Prism.languages.svg = Prism.languages.markup;

Prism.languages.xml = Prism.languages.extend('markup', {});
Prism.languages.ssml = Prism.languages.xml;
Prism.languages.atom = Prism.languages.xml;
Prism.languages.rss = Prism.languages.xml;


/* **********************************************
     Begin prism-css.js
********************************************** */

(function (Prism) {

	var string = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;

	Prism.languages.css = {
		'comment': /\/\*[\s\S]*?\*\//,
		'atrule': {
			pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
			inside: {
				'rule': /^@[\w-]+/,
				'selector-function-argument': {
					pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
					lookbehind: true,
					alias: 'selector'
				},
				'keyword': {
					pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
					lookbehind: true
				}
				// See rest below
			}
		},
		'url': {
			// https://drafts.csswg.org/css-values-3/#urls
			pattern: RegExp('\\burl\\((?:' + string.source + '|' + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ')\\)', 'i'),
			greedy: true,
			inside: {
				'function': /^url/i,
				'punctuation': /^\(|\)$/,
				'string': {
					pattern: RegExp('^' + string.source + '$'),
					alias: 'url'
				}
			}
		},
		'selector': {
			pattern: RegExp('(^|[{}\\s])[^{}\\s](?:[^{};"\'\\s]|\\s+(?![\\s{])|' + string.source + ')*(?=\\s*\\{)'),
			lookbehind: true
		},
		'string': {
			pattern: string,
			greedy: true
		},
		'property': {
			pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
			lookbehind: true
		},
		'important': /!important\b/i,
		'function': {
			pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
			lookbehind: true
		},
		'punctuation': /[(){};:,]/
	};

	Prism.languages.css['atrule'].inside.rest = Prism.languages.css;

	var markup = Prism.languages.markup;
	if (markup) {
		markup.tag.addInlined('style', 'css');
		markup.tag.addAttribute('style', 'css');
	}

}(Prism));


/* **********************************************
     Begin prism-clike.js
********************************************** */

Prism.languages.clike = {
	'comment': [
		{
			pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
			lookbehind: true,
			greedy: true
		},
		{
			pattern: /(^|[^\\:])\/\/.*/,
			lookbehind: true,
			greedy: true
		}
	],
	'string': {
		pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
		greedy: true
	},
	'class-name': {
		pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,
		lookbehind: true,
		inside: {
			'punctuation': /[.\\]/
		}
	},
	'keyword': /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
	'boolean': /\b(?:true|false)\b/,
	'function': /\b\w+(?=\()/,
	'number': /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
	'operator': /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
	'punctuation': /[{}[\];(),.:]/
};


/* **********************************************
     Begin prism-javascript.js
********************************************** */

Prism.languages.javascript = Prism.languages.extend('clike', {
	'class-name': [
		Prism.languages.clike['class-name'],
		{
			pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/,
			lookbehind: true
		}
	],
	'keyword': [
		{
			pattern: /((?:^|\})\s*)catch\b/,
			lookbehind: true
		},
		{
			pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
			lookbehind: true
		},
	],
	// Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
	'function': /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
	'number': /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
	'operator': /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
});

Prism.languages.javascript['class-name'][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;

Prism.languages.insertBefore('javascript', 'keyword', {
	'regex': {
		// eslint-disable-next-line regexp/no-dupe-characters-character-class
		pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
		lookbehind: true,
		greedy: true,
		inside: {
			'regex-source': {
				pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
				lookbehind: true,
				alias: 'language-regex',
				inside: Prism.languages.regex
			},
			'regex-delimiter': /^\/|\/$/,
			'regex-flags': /^[a-z]+$/,
		}
	},
	// This must be declared before keyword because we use "function" inside the look-forward
	'function-variable': {
		pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
		alias: 'function'
	},
	'parameter': [
		{
			pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
			lookbehind: true,
			inside: Prism.languages.javascript
		},
		{
			pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
			lookbehind: true,
			inside: Prism.languages.javascript
		},
		{
			pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
			lookbehind: true,
			inside: Prism.languages.javascript
		},
		{
			pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
			lookbehind: true,
			inside: Prism.languages.javascript
		}
	],
	'constant': /\b[A-Z](?:[A-Z_]|\dx?)*\b/
});

Prism.languages.insertBefore('javascript', 'string', {
	'hashbang': {
		pattern: /^#!.*/,
		greedy: true,
		alias: 'comment'
	},
	'template-string': {
		pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
		greedy: true,
		inside: {
			'template-punctuation': {
				pattern: /^`|`$/,
				alias: 'string'
			},
			'interpolation': {
				pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
				lookbehind: true,
				inside: {
					'interpolation-punctuation': {
						pattern: /^\$\{|\}$/,
						alias: 'punctuation'
					},
					rest: Prism.languages.javascript
				}
			},
			'string': /[\s\S]+/
		}
	}
});

if (Prism.languages.markup) {
	Prism.languages.markup.tag.addInlined('script', 'javascript');

	// add attribute support for all DOM events.
	// https://developer.mozilla.org/en-US/docs/Web/Events#Standard_events
	Prism.languages.markup.tag.addAttribute(
		/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,
		'javascript'
	);
}

Prism.languages.js = Prism.languages.javascript;


/* **********************************************
     Begin prism-file-highlight.js
********************************************** */

(function () {

	if (typeof Prism === 'undefined' || typeof document === 'undefined') {
		return;
	}

	// https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill
	if (!Element.prototype.matches) {
		Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
	}

	var LOADING_MESSAGE = 'Loading…';
	var FAILURE_MESSAGE = function (status, message) {
		return '✖ Error ' + status + ' while fetching file: ' + message;
	};
	var FAILURE_EMPTY_MESSAGE = '✖ Error: File does not exist or is empty';

	var EXTENSIONS = {
		'js': 'javascript',
		'py': 'python',
		'rb': 'ruby',
		'ps1': 'powershell',
		'psm1': 'powershell',
		'sh': 'bash',
		'bat': 'batch',
		'h': 'c',
		'tex': 'latex'
	};

	var STATUS_ATTR = 'data-src-status';
	var STATUS_LOADING = 'loading';
	var STATUS_LOADED = 'loaded';
	var STATUS_FAILED = 'failed';

	var SELECTOR = 'pre[data-src]:not([' + STATUS_ATTR + '="' + STATUS_LOADED + '"])'
		+ ':not([' + STATUS_ATTR + '="' + STATUS_LOADING + '"])';

	var lang = /\blang(?:uage)?-([\w-]+)\b/i;

	/**
	 * Sets the Prism `language-xxxx` or `lang-xxxx` class to the given language.
	 *
	 * @param {HTMLElement} element
	 * @param {string} language
	 * @returns {void}
	 */
	function setLanguageClass(element, language) {
		var className = element.className;
		className = className.replace(lang, ' ') + ' language-' + language;
		element.className = className.replace(/\s+/g, ' ').trim();
	}


	Prism.hooks.add('before-highlightall', function (env) {
		env.selector += ', ' + SELECTOR;
	});

	Prism.hooks.add('before-sanity-check', function (env) {
		var pre = /** @type {HTMLPreElement} */ (env.element);
		if (pre.matches(SELECTOR)) {
			env.code = ''; // fast-path the whole thing and go to complete

			pre.setAttribute(STATUS_ATTR, STATUS_LOADING); // mark as loading

			// add code element with loading message
			var code = pre.appendChild(document.createElement('CODE'));
			code.textContent = LOADING_MESSAGE;

			var src = pre.getAttribute('data-src');

			var language = env.language;
			if (language === 'none') {
				// the language might be 'none' because there is no language set;
				// in this case, we want to use the extension as the language
				var extension = (/\.(\w+)$/.exec(src) || [, 'none'])[1];
				language = EXTENSIONS[extension] || extension;
			}

			// set language classes
			setLanguageClass(code, language);
			setLanguageClass(pre, language);

			// preload the language
			var autoloader = Prism.plugins.autoloader;
			if (autoloader) {
				autoloader.loadLanguages(language);
			}

			// load file
			var xhr = new XMLHttpRequest();
			xhr.open('GET', src, true);
			xhr.onreadystatechange = function () {
				if (xhr.readyState == 4) {
					if (xhr.status < 400 && xhr.responseText) {
						// mark as loaded
						pre.setAttribute(STATUS_ATTR, STATUS_LOADED);

						// highlight code
						code.textContent = xhr.responseText;
						Prism.highlightElement(code);

					} else {
						// mark as failed
						pre.setAttribute(STATUS_ATTR, STATUS_FAILED);

						if (xhr.status >= 400) {
							code.textContent = FAILURE_MESSAGE(xhr.status, xhr.statusText);
						} else {
							code.textContent = FAILURE_EMPTY_MESSAGE;
						}
					}
				}
			};
			xhr.send(null);
		}
	});

	Prism.plugins.fileHighlight = {
		/**
		 * Executes the File Highlight plugin for all matching `pre` elements under the given container.
		 *
		 * Note: Elements which are already loaded or currently loading will not be touched by this method.
		 *
		 * @param {ParentNode} [container=document]
		 */
		highlight: function highlight(container) {
			var elements = (container || document).querySelectorAll(SELECTOR);

			for (var i = 0, element; (element = elements[i++]);) {
				Prism.highlightElement(element);
			}
		}
	};

	var logged = false;
	/** @deprecated Use `Prism.plugins.fileHighlight.highlight` instead. */
	Prism.fileHighlight = function () {
		if (!logged) {
			console.warn('Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead.');
			logged = true;
		}
		Prism.plugins.fileHighlight.highlight.apply(this, arguments);
	};

}());


/***/ }),

/***/ "./node_modules/react-copy-to-clipboard/lib/Component.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-copy-to-clipboard/lib/Component.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.CopyToClipboard = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _copyToClipboard = _interopRequireDefault(__webpack_require__(/*! copy-to-clipboard */ "./node_modules/copy-to-clipboard/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CopyToClipboard =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(CopyToClipboard, _React$PureComponent);

  function CopyToClipboard() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CopyToClipboard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CopyToClipboard)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onClick", function (event) {
      var _this$props = _this.props,
          text = _this$props.text,
          onCopy = _this$props.onCopy,
          children = _this$props.children,
          options = _this$props.options;

      var elem = _react["default"].Children.only(children);

      var result = (0, _copyToClipboard["default"])(text, options);

      if (onCopy) {
        onCopy(text, result);
      } // Bypass onClick if it was present


      if (elem && elem.props && typeof elem.props.onClick === 'function') {
        elem.props.onClick(event);
      }
    });

    return _this;
  }

  _createClass(CopyToClipboard, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          _text = _this$props2.text,
          _onCopy = _this$props2.onCopy,
          _options = _this$props2.options,
          children = _this$props2.children,
          props = _objectWithoutProperties(_this$props2, ["text", "onCopy", "options", "children"]);

      var elem = _react["default"].Children.only(children);

      return _react["default"].cloneElement(elem, _objectSpread({}, props, {
        onClick: this.onClick
      }));
    }
  }]);

  return CopyToClipboard;
}(_react["default"].PureComponent);

exports.CopyToClipboard = CopyToClipboard;

_defineProperty(CopyToClipboard, "defaultProps", {
  onCopy: undefined,
  options: undefined
});

/***/ }),

/***/ "./node_modules/react-copy-to-clipboard/lib/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-copy-to-clipboard/lib/index.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _require = __webpack_require__(/*! ./Component */ "./node_modules/react-copy-to-clipboard/lib/Component.js"),
    CopyToClipboard = _require.CopyToClipboard;

CopyToClipboard.CopyToClipboard = CopyToClipboard;
module.exports = CopyToClipboard;

/***/ }),

/***/ "./node_modules/react-router-dom/index.js":
/*!************************************************!*\
  !*** ./node_modules/react-router-dom/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MemoryRouter": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.MemoryRouter),
/* harmony export */   "Navigate": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.Navigate),
/* harmony export */   "Outlet": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.Outlet),
/* harmony export */   "Route": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.Route),
/* harmony export */   "Router": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.Router),
/* harmony export */   "Routes": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.Routes),
/* harmony export */   "UNSAFE_LocationContext": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_LocationContext),
/* harmony export */   "UNSAFE_NavigatorContext": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_NavigatorContext),
/* harmony export */   "UNSAFE_RouteContext": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_RouteContext),
/* harmony export */   "createRoutesFromArray": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.createRoutesFromArray),
/* harmony export */   "createRoutesFromChildren": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.createRoutesFromChildren),
/* harmony export */   "generatePath": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.generatePath),
/* harmony export */   "matchPath": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.matchPath),
/* harmony export */   "matchRoutes": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.matchRoutes),
/* harmony export */   "resolvePath": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.resolvePath),
/* harmony export */   "useBlocker": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.useBlocker),
/* harmony export */   "useHref": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.useHref),
/* harmony export */   "useInRouterContext": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.useInRouterContext),
/* harmony export */   "useLocation": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.useLocation),
/* harmony export */   "useMatch": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.useMatch),
/* harmony export */   "useNavigate": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.useNavigate),
/* harmony export */   "useOutlet": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.useOutlet),
/* harmony export */   "useParams": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.useParams),
/* harmony export */   "useResolvedPath": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.useResolvedPath),
/* harmony export */   "useRoutes": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.useRoutes),
/* harmony export */   "BrowserRouter": () => (/* binding */ BrowserRouter),
/* harmony export */   "HashRouter": () => (/* binding */ HashRouter),
/* harmony export */   "Link": () => (/* binding */ Link),
/* harmony export */   "NavLink": () => (/* binding */ NavLink),
/* harmony export */   "Prompt": () => (/* binding */ Prompt),
/* harmony export */   "createSearchParams": () => (/* binding */ createSearchParams),
/* harmony export */   "usePrompt": () => (/* binding */ usePrompt),
/* harmony export */   "useSearchParams": () => (/* binding */ useSearchParams)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! history */ "./node_modules/history/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/index.js");





function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);

  if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function () {
      if (i >= o.length) return {
        done: true
      };
      return {
        done: false,
        value: o[i++]
      };
    };
  }

  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var _excluded = ["onClick", "replace", "state", "target", "to"],
    _excluded2 = ["aria-current", "activeClassName", "activeStyle", "caseSensitive", "className", "end", "style", "to"];

function warning(cond, message) {
  if (!cond) {
    // eslint-disable-next-line no-console
    if (typeof console !== "undefined") console.warn(message);

    try {
      // Welcome to debugging React Router!
      //
      // This error is thrown as a convenience so you can more easily
      // find the source for a warning that appears in the console by
      // enabling "pause on exceptions" in your JavaScript debugger.
      throw new Error(message); // eslint-disable-next-line no-empty
    } catch (e) {}
  }
} ////////////////////////////////////////////////////////////////////////////////
/**
 * A <Router> for use in web browsers. Provides the cleanest URLs.
 */

function BrowserRouter(_ref) {
  var children = _ref.children,
      window = _ref.window;
  var historyRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();

  if (historyRef.current == null) {
    historyRef.current = (0,history__WEBPACK_IMPORTED_MODULE_2__.createBrowserHistory)({
      window: window
    });
  }

  var history = historyRef.current;

  var _React$useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    action: history.action,
    location: history.location
  }),
      state = _React$useState[0],
      setState = _React$useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(function () {
    return history.listen(setState);
  }, [history]);
  return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_router__WEBPACK_IMPORTED_MODULE_1__.Router, {
    children: children,
    action: state.action,
    location: state.location,
    navigator: history
  });
}
/**
 * A <Router> for use in web browsers. Stores the location in the hash
 * portion of the URL so it is not sent to the server.
 */

function HashRouter(_ref2) {
  var children = _ref2.children,
      window = _ref2.window;
  var historyRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();

  if (historyRef.current == null) {
    historyRef.current = (0,history__WEBPACK_IMPORTED_MODULE_2__.createHashHistory)({
      window: window
    });
  }

  var history = historyRef.current;

  var _React$useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    action: history.action,
    location: history.location
  }),
      state = _React$useState2[0],
      setState = _React$useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(function () {
    return history.listen(setState);
  }, [history]);
  return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_router__WEBPACK_IMPORTED_MODULE_1__.Router, {
    children: children,
    action: state.action,
    location: state.location,
    navigator: history
  });
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
/**
 * The public API for rendering a history-aware <a>.
 */


var Link = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function LinkWithRef(_ref3, ref) {
  var onClick = _ref3.onClick,
      _ref3$replace = _ref3.replace,
      replaceProp = _ref3$replace === void 0 ? false : _ref3$replace,
      state = _ref3.state,
      target = _ref3.target,
      to = _ref3.to,
      rest = _objectWithoutPropertiesLoose(_ref3, _excluded);

  var href = (0,react_router__WEBPACK_IMPORTED_MODULE_1__.useHref)(to);
  var navigate = (0,react_router__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();
  var location = (0,react_router__WEBPACK_IMPORTED_MODULE_1__.useLocation)();
  var path = (0,react_router__WEBPACK_IMPORTED_MODULE_1__.useResolvedPath)(to);

  function handleClick(event) {
    if (onClick) onClick(event);

    if (!event.defaultPrevented && // onClick prevented default
    event.button === 0 && ( // Ignore everything but left clicks
    !target || target === "_self") && // Let browser handle "target=_blank" etc.
    !isModifiedEvent(event) // Ignore clicks with modifier keys
    ) {
        event.preventDefault(); // If the URL hasn't changed, a regular <a> will do a replace instead of
        // a push, so do the same here.

        var replace = !!replaceProp || (0,history__WEBPACK_IMPORTED_MODULE_2__.createPath)(location) === (0,history__WEBPACK_IMPORTED_MODULE_2__.createPath)(path);
        navigate(to, {
          replace: replace,
          state: state
        });
      }
  }

  return (
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", _extends({}, rest, {
      href: href,
      onClick: handleClick,
      ref: ref,
      target: target
    }))
  );
});
/**
 * A <Link> wrapper that knows if it's "active" or not.
 */

var NavLink = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function NavLinkWithRef(_ref4, ref) {
  var _ref4$ariaCurrent = _ref4["aria-current"],
      ariaCurrentProp = _ref4$ariaCurrent === void 0 ? "page" : _ref4$ariaCurrent,
      _ref4$activeClassName = _ref4.activeClassName,
      activeClassName = _ref4$activeClassName === void 0 ? "active" : _ref4$activeClassName,
      activeStyle = _ref4.activeStyle,
      _ref4$caseSensitive = _ref4.caseSensitive,
      caseSensitive = _ref4$caseSensitive === void 0 ? false : _ref4$caseSensitive,
      _ref4$className = _ref4.className,
      classNameProp = _ref4$className === void 0 ? "" : _ref4$className,
      _ref4$end = _ref4.end,
      end = _ref4$end === void 0 ? false : _ref4$end,
      styleProp = _ref4.style,
      to = _ref4.to,
      rest = _objectWithoutPropertiesLoose(_ref4, _excluded2);

  var location = (0,react_router__WEBPACK_IMPORTED_MODULE_1__.useLocation)();
  var path = (0,react_router__WEBPACK_IMPORTED_MODULE_1__.useResolvedPath)(to);
  var locationPathname = location.pathname;
  var toPathname = path.pathname;

  if (!caseSensitive) {
    locationPathname = locationPathname.toLowerCase();
    toPathname = toPathname.toLowerCase();
  }

  var isActive = end ? locationPathname === toPathname : locationPathname.startsWith(toPathname);
  var ariaCurrent = isActive ? ariaCurrentProp : undefined;
  var className = [classNameProp, isActive ? activeClassName : null].filter(Boolean).join(" ");

  var style = _extends({}, styleProp, isActive ? activeStyle : null);

  return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Link, _extends({}, rest, {
    "aria-current": ariaCurrent,
    className: className,
    ref: ref,
    style: style,
    to: to
  }));
});
/**
 * A declarative interface for showing a window.confirm dialog with the given
 * message when the user tries to navigate away from the current page.
 *
 * This also serves as a reference implementation for anyone who wants to
 * create their own custom prompt component.
 */

function Prompt(_ref5) {
  var message = _ref5.message,
      when = _ref5.when;
  usePrompt(message, when);
  return null;
} ////////////////////////////////////////////////////////////////////////////////
// HOOKS
////////////////////////////////////////////////////////////////////////////////

/**
 * Prevents navigation away from the current page using a window.confirm prompt
 * with the given message.
 */

function usePrompt(message, when) {
  if (when === void 0) {
    when = true;
  }

  var blocker = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (tx) {
    if (window.confirm(message)) tx.retry();
  }, [message]);
  (0,react_router__WEBPACK_IMPORTED_MODULE_1__.useBlocker)(blocker, when);
}
/**
 * A convenient wrapper for reading and writing search parameters via the
 * URLSearchParams interface.
 */

function useSearchParams(defaultInit) {
   true ? warning(typeof URLSearchParams !== "undefined", "You cannot use the `useSearchParams` hook in a browser that does not " + "support the URLSearchParams API. If you need to support Internet " + "Explorer 11, we recommend you load a polyfill such as " + "https://github.com/ungap/url-search-params\n\n" + "If you're unsure how to load polyfills, we recommend you check out " + "https://polyfill.io/v3/ which provides some recommendations about how " + "to load polyfills only for users that need them, instead of for every " + "user.") : 0;
  var defaultSearchParamsRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(createSearchParams(defaultInit));
  var location = (0,react_router__WEBPACK_IMPORTED_MODULE_1__.useLocation)();
  var searchParams = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    var searchParams = createSearchParams(location.search);

    var _loop = function _loop() {
      var key = _step.value;

      if (!searchParams.has(key)) {
        defaultSearchParamsRef.current.getAll(key).forEach(function (value) {
          searchParams.append(key, value);
        });
      }
    };

    for (var _iterator = _createForOfIteratorHelperLoose(defaultSearchParamsRef.current.keys()), _step; !(_step = _iterator()).done;) {
      _loop();
    }

    return searchParams;
  }, [location.search]);
  var navigate = (0,react_router__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();
  var setSearchParams = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (nextInit, navigateOptions) {
    navigate("?" + createSearchParams(nextInit), navigateOptions);
  }, [navigate]);
  return [searchParams, setSearchParams];
}
/**
 * Creates a URLSearchParams object using the given initializer.
 *
 * This is identical to `new URLSearchParams(init)` except it also
 * supports arrays as values in the object form of the initializer
 * instead of just strings. This is convenient when you need multiple
 * values for a given key, but don't want to use an array initializer.
 *
 * For example, instead of:
 *
 *   let searchParams = new URLSearchParams([
 *     ['sort', 'name'],
 *     ['sort', 'price']
 *   ]);
 *
 * you can do:
 *
 *   let searchParams = createSearchParams({
 *     sort: ['name', 'price']
 *   });
 */

function createSearchParams(init) {
  if (init === void 0) {
    init = "";
  }

  return new URLSearchParams(typeof init === "string" || Array.isArray(init) || init instanceof URLSearchParams ? init : Object.keys(init).reduce(function (memo, key) {
    var value = init[key];
    return memo.concat(Array.isArray(value) ? value.map(function (v) {
      return [key, v];
    }) : [[key, value]]);
  }, []));
}


//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/react-router/index.js":
/*!********************************************!*\
  !*** ./node_modules/react-router/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MemoryRouter": () => (/* binding */ MemoryRouter),
/* harmony export */   "Navigate": () => (/* binding */ Navigate),
/* harmony export */   "Outlet": () => (/* binding */ Outlet),
/* harmony export */   "Route": () => (/* binding */ Route),
/* harmony export */   "Router": () => (/* binding */ Router),
/* harmony export */   "Routes": () => (/* binding */ Routes),
/* harmony export */   "UNSAFE_LocationContext": () => (/* binding */ LocationContext),
/* harmony export */   "UNSAFE_NavigatorContext": () => (/* binding */ NavigatorContext),
/* harmony export */   "UNSAFE_RouteContext": () => (/* binding */ RouteContext),
/* harmony export */   "createRoutesFromArray": () => (/* binding */ createRoutesFromArray),
/* harmony export */   "createRoutesFromChildren": () => (/* binding */ createRoutesFromChildren),
/* harmony export */   "generatePath": () => (/* binding */ generatePath),
/* harmony export */   "matchPath": () => (/* binding */ matchPath),
/* harmony export */   "matchRoutes": () => (/* binding */ matchRoutes),
/* harmony export */   "resolvePath": () => (/* binding */ resolvePath),
/* harmony export */   "useBlocker": () => (/* binding */ useBlocker),
/* harmony export */   "useHref": () => (/* binding */ useHref),
/* harmony export */   "useInRouterContext": () => (/* binding */ useInRouterContext),
/* harmony export */   "useLocation": () => (/* binding */ useLocation),
/* harmony export */   "useMatch": () => (/* binding */ useMatch),
/* harmony export */   "useNavigate": () => (/* binding */ useNavigate),
/* harmony export */   "useOutlet": () => (/* binding */ useOutlet),
/* harmony export */   "useParams": () => (/* binding */ useParams),
/* harmony export */   "useResolvedPath": () => (/* binding */ useResolvedPath),
/* harmony export */   "useRoutes": () => (/* binding */ useRoutes)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! history */ "./node_modules/history/index.js");



function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var readOnly =  true ? function (obj) {
  return Object.freeze(obj);
} : 0;

function invariant(cond, message) {
  if (!cond) throw new Error(message);
}

function warning(cond, message) {
  if (!cond) {
    // eslint-disable-next-line no-console
    if (typeof console !== "undefined") console.warn(message);

    try {
      // Welcome to debugging React Router!
      //
      // This error is thrown as a convenience so you can more easily
      // find the source for a warning that appears in the console by
      // enabling "pause on exceptions" in your JavaScript debugger.
      throw new Error(message); // eslint-disable-next-line no-empty
    } catch (e) {}
  }
}

var alreadyWarned = {};

function warningOnce(key, cond, message) {
  if (!cond && !alreadyWarned[key]) {
    alreadyWarned[key] = true;
     true ? warning(false, message) : 0;
  }
}

var NavigatorContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
var LocationContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
  static: false
});

if (true) {
  LocationContext.displayName = "Location";
}

var RouteContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
  outlet: null,
  params: readOnly({}),
  pathname: "",
  basename: "",
  route: null
});

if (true) {
  RouteContext.displayName = "Route";
}
/**
 * A <Router> that stores all entries in memory.
 *
 * @see https://reactrouter.com/api/MemoryRouter
 */


function MemoryRouter(_ref) {
  var children = _ref.children,
      initialEntries = _ref.initialEntries,
      initialIndex = _ref.initialIndex;
  var historyRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();

  if (historyRef.current == null) {
    historyRef.current = (0,history__WEBPACK_IMPORTED_MODULE_1__.createMemoryHistory)({
      initialEntries: initialEntries,
      initialIndex: initialIndex
    });
  }

  var history = historyRef.current;

  var _React$useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    action: history.action,
    location: history.location
  }),
      state = _React$useState[0],
      setState = _React$useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(function () {
    return history.listen(setState);
  }, [history]);
  return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Router, {
    children: children,
    action: state.action,
    location: state.location,
    navigator: history
  });
}
/**
 * Changes the current location.
 *
 * Note: This API is mostly useful in React.Component subclasses that are not
 * able to use hooks. In functional components, we recommend you use the
 * `useNavigate` hook instead.
 *
 * @see https://reactrouter.com/api/Navigate
 */

function Navigate(_ref2) {
  var to = _ref2.to,
      replace = _ref2.replace,
      state = _ref2.state;
  !useInRouterContext() ?  true ? invariant(false, // TODO: This error is probably because they somehow have 2 versions of
  // the router loaded. We can help them understand how to avoid that.
  "<Navigate> may be used only in the context of a <Router> component.") : 0 : void 0;
   true ? warning(!(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(LocationContext).static, "<Navigate> must not be used on the initial render in a <StaticRouter>. " + "This is a no-op, but you should modify your code so the <Navigate> is " + "only ever rendered in response to some user interaction or state change.") : 0;
  var navigate = useNavigate();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    navigate(to, {
      replace: replace,
      state: state
    });
  });
  return null;
}
/**
 * Renders the child route's element, if there is one.
 *
 * @see https://reactrouter.com/api/Outlet
 */

function Outlet(_props) {
  return useOutlet();
}
/**
 * Declares an element that should be rendered at a certain URL path.
 *
 * @see https://reactrouter.com/api/Route
 */

function Route(_ref3) {
  var _ref3$element = _ref3.element,
      element = _ref3$element === void 0 ? /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Outlet, null) : _ref3$element;
  return element;
}
/**
 * Provides location context for the rest of the app.
 *
 * Note: You usually won't render a <Router> directly. Instead, you'll render a
 * router that is more specific to your environment such as a <BrowserRouter>
 * in web browsers or a <StaticRouter> for server rendering.
 *
 * @see https://reactrouter.com/api/Router
 */

function Router(_ref4) {
  var _ref4$children = _ref4.children,
      children = _ref4$children === void 0 ? null : _ref4$children,
      _ref4$action = _ref4.action,
      action = _ref4$action === void 0 ? history__WEBPACK_IMPORTED_MODULE_1__.Action.Pop : _ref4$action,
      location = _ref4.location,
      navigator = _ref4.navigator,
      _ref4$static = _ref4.static,
      staticProp = _ref4$static === void 0 ? false : _ref4$static;
  !!useInRouterContext() ?  true ? invariant(false, "You cannot render a <Router> inside another <Router>." + " You never need more than one.") : 0 : void 0;
  return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(NavigatorContext.Provider, {
    value: navigator
  }, /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(LocationContext.Provider, {
    children: children,
    value: {
      action: action,
      location: location,
      static: staticProp
    }
  }));
}
/**
 * A container for a nested tree of <Route> elements that renders the branch
 * that best matches the current location.
 *
 * @see https://reactrouter.com/api/Routes
 */

function Routes(_ref5) {
  var _ref5$basename = _ref5.basename,
      basename = _ref5$basename === void 0 ? "" : _ref5$basename,
      children = _ref5.children;
  var routes = createRoutesFromChildren(children);
  var location = useLocation();
  return useRoutes_(routes, location, basename);
} ///////////////////////////////////////////////////////////////////////////////
// HOOKS
///////////////////////////////////////////////////////////////////////////////

/**
 * Blocks all navigation attempts. This is useful for preventing the page from
 * changing until some condition is met, like saving form data.
 *
 * @see https://reactrouter.com/api/useBlocker
 */

function useBlocker(blocker, when) {
  if (when === void 0) {
    when = true;
  }

  !useInRouterContext() ?  true ? invariant(false, // TODO: This error is probably because they somehow have 2 versions of the
  // router loaded. We can help them understand how to avoid that.
  "useBlocker() may be used only in the context of a <Router> component.") : 0 : void 0;
  var navigator = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(NavigatorContext);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!when) return;
    var unblock = navigator.block(function (tx) {
      var autoUnblockingTx = _extends({}, tx, {
        retry: function retry() {
          // Automatically unblock the transition so it can play all the way
          // through before retrying it. TODO: Figure out how to re-enable
          // this block if the transition is cancelled for some reason.
          unblock();
          tx.retry();
        }
      });

      blocker(autoUnblockingTx);
    });
    return unblock;
  }, [navigator, blocker, when]);
}
/**
 * Returns the full href for the given "to" value. This is useful for building
 * custom links that are also accessible and preserve right-click behavior.
 *
 * @see https://reactrouter.com/api/useHref
 */

function useHref(to) {
  !useInRouterContext() ?  true ? invariant(false, // TODO: This error is probably because they somehow have 2 versions of the
  // router loaded. We can help them understand how to avoid that.
  "useHref() may be used only in the context of a <Router> component.") : 0 : void 0;
  var navigator = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(NavigatorContext);
  var path = useResolvedPath(to);
  return navigator.createHref(path);
}
/**
 * Returns true if this component is a descendant of a <Router>.
 *
 * @see https://reactrouter.com/api/useInRouterContext
 */

function useInRouterContext() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(LocationContext).location != null;
}
/**
 * Returns the current location object, which represents the current URL in web
 * browsers.
 *
 * Note: If you're using this it may mean you're doing some of your own
 * "routing" in your app, and we'd like to know what your use case is. We may
 * be able to provide something higher-level to better suit your needs.
 *
 * @see https://reactrouter.com/api/useLocation
 */

function useLocation() {
  !useInRouterContext() ?  true ? invariant(false, // TODO: This error is probably because they somehow have 2 versions of the
  // router loaded. We can help them understand how to avoid that.
  "useLocation() may be used only in the context of a <Router> component.") : 0 : void 0;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(LocationContext).location;
}
/**
 * Returns true if the URL for the given "to" value matches the current URL.
 * This is useful for components that need to know "active" state, e.g.
 * <NavLink>.
 *
 * @see https://reactrouter.com/api/useMatch
 */

function useMatch(pattern) {
  !useInRouterContext() ?  true ? invariant(false, // TODO: This error is probably because they somehow have 2 versions of the
  // router loaded. We can help them understand how to avoid that.
  "useMatch() may be used only in the context of a <Router> component.") : 0 : void 0;
  var location = useLocation();
  return matchPath(pattern, location.pathname);
}
/**
 * Returns an imperative method for changing the location. Used by <Link>s, but
 * may also be used by other elements to change the location.
 *
 * @see https://reactrouter.com/api/useNavigate
 */

function useNavigate() {
  !useInRouterContext() ?  true ? invariant(false, // TODO: This error is probably because they somehow have 2 versions of the
  // router loaded. We can help them understand how to avoid that.
  "useNavigate() may be used only in the context of a <Router> component.") : 0 : void 0;
  var navigator = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(NavigatorContext);

  var _React$useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(RouteContext),
      pathname = _React$useContext.pathname,
      basename = _React$useContext.basename;

  var activeRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    activeRef.current = true;
  });
  var navigate = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (to, options) {
    if (options === void 0) {
      options = {};
    }

    if (activeRef.current) {
      if (typeof to === "number") {
        navigator.go(to);
      } else {
        var path = resolvePath(to, pathname, basename);
        (!!options.replace ? navigator.replace : navigator.push)(path, options.state);
      }
    } else {
       true ? warning(false, "You should call navigate() in a useEffect, not when " + "your component is first rendered.") : 0;
    }
  }, [basename, navigator, pathname]);
  return navigate;
}
/**
 * Returns the element for the child route at this level of the route
 * hierarchy. Used internally by <Outlet> to render child routes.
 *
 * @see https://reactrouter.com/api/useOutlet
 */

function useOutlet() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(RouteContext).outlet;
}
/**
 * Returns an object of key/value pairs of the dynamic params from the current
 * URL that were matched by the route path.
 *
 * @see https://reactrouter.com/api/useParams
 */

function useParams() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(RouteContext).params;
}
/**
 * Resolves the pathname of the given `to` value against the current location.
 *
 * @see https://reactrouter.com/api/useResolvedPath
 */

function useResolvedPath(to) {
  var _React$useContext2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(RouteContext),
      pathname = _React$useContext2.pathname,
      basename = _React$useContext2.basename;

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return resolvePath(to, pathname, basename);
  }, [to, pathname, basename]);
}
/**
 * Returns the element of the route that matched the current location, prepared
 * with the correct context to render the remainder of the route tree. Route
 * elements in the tree must render an <Outlet> to render their child route's
 * element.
 *
 * @see https://reactrouter.com/api/useRoutes
 */

function useRoutes(partialRoutes, basename) {
  if (basename === void 0) {
    basename = "";
  }

  !useInRouterContext() ?  true ? invariant(false, // TODO: This error is probably because they somehow have 2 versions of the
  // router loaded. We can help them understand how to avoid that.
  "useRoutes() may be used only in the context of a <Router> component.") : 0 : void 0;
  var location = useLocation();
  var routes = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return createRoutesFromArray(partialRoutes);
  }, [partialRoutes]);
  return useRoutes_(routes, location, basename);
}

function useRoutes_(routes, location, basename) {
  if (basename === void 0) {
    basename = "";
  }

  var _React$useContext3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(RouteContext),
      parentRoute = _React$useContext3.route,
      parentPathname = _React$useContext3.pathname,
      parentParams = _React$useContext3.params;

  if (true) {
    // You won't get a warning about 2 different <Routes> under a <Route>
    // without a trailing *, but this is a best-effort warning anyway since we
    // cannot even give the warning unless they land at the parent route.
    var parentPath = parentRoute && parentRoute.path;
    warningOnce(parentPathname, !parentRoute || parentRoute.path.endsWith("*"), "You rendered descendant <Routes> (or called `useRoutes`) at " + ("\"" + parentPathname + "\" (under <Route path=\"" + parentPath + "\">) but the ") + "parent route path has no trailing \"*\". This means if you navigate " + "deeper, the parent won't match anymore and therefore the child " + "routes will never render.\n\n" + ("Please change the parent <Route path=\"" + parentPath + "\"> to <Route ") + ("path=\"" + parentPath + "/*\">."));
  }

  basename = basename ? joinPaths([parentPathname, basename]) : parentPathname;
  var matches = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return matchRoutes(routes, location, basename);
  }, [location, routes, basename]);

  if (!matches) {
    // TODO: Warn about nothing matching, suggest using a catch-all route.
    return null;
  } // Otherwise render an element.


  var element = matches.reduceRight(function (outlet, _ref6) {
    var params = _ref6.params,
        pathname = _ref6.pathname,
        route = _ref6.route;
    return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RouteContext.Provider, {
      children: route.element,
      value: {
        outlet: outlet,
        params: readOnly(_extends({}, parentParams, params)),
        pathname: joinPaths([basename, pathname]),
        basename: basename,
        route: route
      }
    });
  }, null);
  return element;
} ///////////////////////////////////////////////////////////////////////////////
// UTILS
///////////////////////////////////////////////////////////////////////////////

/**
 * Creates a route config from an array of JavaScript objects. Used internally
 * by `useRoutes` to normalize the route config.
 *
 * @see https://reactrouter.com/api/createRoutesFromArray
 */


function createRoutesFromArray(array) {
  return array.map(function (partialRoute) {
    var route = {
      path: partialRoute.path || "/",
      caseSensitive: partialRoute.caseSensitive === true,
      element: partialRoute.element || /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Outlet, null)
    };

    if (partialRoute.children) {
      route.children = createRoutesFromArray(partialRoute.children);
    }

    return route;
  });
}
/**
 * Creates a route config from a React "children" object, which is usually
 * either a `<Route>` element or an array of them. Used internally by
 * `<Routes>` to create a route config from its children.
 *
 * @see https://reactrouter.com/api/createRoutesFromChildren
 */

function createRoutesFromChildren(children) {
  var routes = [];
  react__WEBPACK_IMPORTED_MODULE_0__.Children.forEach(children, function (element) {
    if (! /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(element)) {
      // Ignore non-elements. This allows people to more easily inline
      // conditionals in their route config.
      return;
    }

    if (element.type === react__WEBPACK_IMPORTED_MODULE_0__.Fragment) {
      // Transparently support React.Fragment and its children.
      routes.push.apply(routes, createRoutesFromChildren(element.props.children));
      return;
    }

    var route = {
      path: element.props.path || "/",
      caseSensitive: element.props.caseSensitive === true,
      // Default behavior is to just render the element that was given. This
      // permits people to use any element they prefer, not just <Route> (though
      // all our official examples and docs use <Route> for clarity).
      element: element
    };

    if (element.props.children) {
      var childRoutes = createRoutesFromChildren(element.props.children);

      if (childRoutes.length) {
        route.children = childRoutes;
      }
    }

    routes.push(route);
  });
  return routes;
}
/**
 * Returns a path with params interpolated.
 *
 * @see https://reactrouter.com/api/generatePath
 */

function generatePath(path, params) {
  if (params === void 0) {
    params = {};
  }

  return path.replace(/:(\w+)/g, function (_, key) {
    !(params[key] != null) ?  true ? invariant(false, "Missing \":" + key + "\" param") : 0 : void 0;
    return params[key];
  }).replace(/\/*\*$/, function (_) {
    return params["*"] == null ? "" : params["*"].replace(/^\/*/, "/");
  });
}
/**
 * Matches the given routes to a location and returns the match data.
 *
 * @see https://reactrouter.com/api/matchRoutes
 */

function matchRoutes(routes, location, basename) {
  if (basename === void 0) {
    basename = "";
  }

  if (typeof location === "string") {
    location = (0,history__WEBPACK_IMPORTED_MODULE_1__.parsePath)(location);
  }

  var pathname = location.pathname || "/";

  if (basename) {
    var base = basename.replace(/^\/*/, "/").replace(/\/+$/, "");

    if (pathname.startsWith(base)) {
      pathname = pathname === base ? "/" : pathname.slice(base.length);
    } else {
      // Pathname does not start with the basename, no match.
      return null;
    }
  }

  var branches = flattenRoutes(routes);
  rankRouteBranches(branches);
  var matches = null;

  for (var i = 0; matches == null && i < branches.length; ++i) {
    // TODO: Match on search, state too?
    matches = matchRouteBranch(branches[i], pathname);
  }

  return matches;
}

function flattenRoutes(routes, branches, parentPath, parentRoutes, parentIndexes) {
  if (branches === void 0) {
    branches = [];
  }

  if (parentPath === void 0) {
    parentPath = "";
  }

  if (parentRoutes === void 0) {
    parentRoutes = [];
  }

  if (parentIndexes === void 0) {
    parentIndexes = [];
  }

  routes.forEach(function (route, index) {
    route = _extends({}, route, {
      path: route.path || "/",
      caseSensitive: !!route.caseSensitive,
      element: route.element
    });
    var path = joinPaths([parentPath, route.path]);
    var routes = parentRoutes.concat(route);
    var indexes = parentIndexes.concat(index); // Add the children before adding this route to the array so we traverse the
    // route tree depth-first and child routes appear before their parents in
    // the "flattened" version.

    if (route.children) {
      flattenRoutes(route.children, branches, path, routes, indexes);
    }

    branches.push([path, routes, indexes]);
  });
  return branches;
}

function rankRouteBranches(branches) {
  var pathScores = branches.reduce(function (memo, _ref7) {
    var path = _ref7[0];
    memo[path] = computeScore(path);
    return memo;
  }, {}); // Sorting is stable in modern browsers, but we still support IE 11, so we
  // need this little helper.

  stableSort(branches, function (a, b) {
    var aPath = a[0],
        aIndexes = a[2];
    var aScore = pathScores[aPath];
    var bPath = b[0],
        bIndexes = b[2];
    var bScore = pathScores[bPath];
    return aScore !== bScore ? bScore - aScore // Higher score first
    : compareIndexes(aIndexes, bIndexes);
  });
}

var paramRe = /^:\w+$/;
var dynamicSegmentValue = 2;
var emptySegmentValue = 1;
var staticSegmentValue = 10;
var splatPenalty = -2;

var isSplat = function isSplat(s) {
  return s === "*";
};

function computeScore(path) {
  var segments = path.split("/");
  var initialScore = segments.length;

  if (segments.some(isSplat)) {
    initialScore += splatPenalty;
  }

  return segments.filter(function (s) {
    return !isSplat(s);
  }).reduce(function (score, segment) {
    return score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue);
  }, initialScore);
}

function compareIndexes(a, b) {
  var siblings = a.length === b.length && a.slice(0, -1).every(function (n, i) {
    return n === b[i];
  });
  return siblings ? // If two routes are siblings, we should try to match the earlier sibling
  // first. This allows people to have fine-grained control over the matching
  // behavior by simply putting routes with identical paths in the order they
  // want them tried.
  a[a.length - 1] - b[b.length - 1] : // Otherwise, it doesn't really make sense to rank non-siblings by index,
  // so they sort equally.
  0;
}

function stableSort(array, compareItems) {
  // This copy lets us get the original index of an item so we can preserve the
  // original ordering in the case that they sort equally.
  var copy = array.slice(0);
  array.sort(function (a, b) {
    return compareItems(a, b) || copy.indexOf(a) - copy.indexOf(b);
  });
}

function matchRouteBranch(branch, pathname) {
  var routes = branch[1];
  var matchedPathname = "/";
  var matchedParams = {};
  var matches = [];

  for (var i = 0; i < routes.length; ++i) {
    var route = routes[i];
    var remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
    var routeMatch = matchPath({
      path: route.path,
      caseSensitive: route.caseSensitive,
      end: i === routes.length - 1
    }, remainingPathname);
    if (!routeMatch) return null;
    matchedPathname = joinPaths([matchedPathname, routeMatch.pathname]);
    matchedParams = _extends({}, matchedParams, routeMatch.params);
    matches.push({
      route: route,
      pathname: matchedPathname,
      params: readOnly(matchedParams)
    });
  }

  return matches;
}
/**
 * Performs pattern matching on a URL pathname and returns information about
 * the match.
 *
 * @see https://reactrouter.com/api/matchPath
 */


function matchPath(pattern, pathname) {
  if (typeof pattern === "string") {
    pattern = {
      path: pattern
    };
  }

  var _pattern = pattern,
      path = _pattern.path,
      _pattern$caseSensitiv = _pattern.caseSensitive,
      caseSensitive = _pattern$caseSensitiv === void 0 ? false : _pattern$caseSensitiv,
      _pattern$end = _pattern.end,
      end = _pattern$end === void 0 ? true : _pattern$end;

  var _compilePath = compilePath(path, caseSensitive, end),
      matcher = _compilePath[0],
      paramNames = _compilePath[1];

  var match = pathname.match(matcher);
  if (!match) return null;
  var matchedPathname = match[1];
  var values = match.slice(2);
  var params = paramNames.reduce(function (memo, paramName, index) {
    memo[paramName] = safelyDecodeURIComponent(values[index] || "", paramName);
    return memo;
  }, {});
  return {
    path: path,
    pathname: matchedPathname,
    params: params
  };
}

function compilePath(path, caseSensitive, end) {
  var keys = [];
  var source = "^(" + path.replace(/^\/*/, "/") // Make sure it has a leading /
  .replace(/\/?\*?$/, "") // Ignore trailing / and /*, we'll handle it below
  .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&") // Escape special regex chars
  .replace(/:(\w+)/g, function (_, key) {
    keys.push(key);
    return "([^\\/]+)";
  }) + ")";

  if (path.endsWith("*")) {
    if (path.endsWith("/*")) {
      source += "(?:\\/(.+)|\\/?)"; // Don't include the / in params['*']
    } else {
      source += "(.*)";
    }

    keys.push("*");
  } else if (end) {
    source += "\\/?";
  }

  if (end) source += "$";
  var flags = caseSensitive ? undefined : "i";
  var matcher = new RegExp(source, flags);
  return [matcher, keys];
}

function safelyDecodeURIComponent(value, paramName) {
  try {
    return decodeURIComponent(value);
  } catch (error) {
     true ? warning(false, "The value for the URL param \"" + paramName + "\" will not be decoded because" + (" the string \"" + value + "\" is a malformed URL segment. This is probably") + (" due to a bad percent encoding (" + error + ").")) : 0;
    return value;
  }
}
/**
 * Returns a resolved path object relative to the given pathname.
 *
 * @see https://reactrouter.com/api/resolvePath
 */


function resolvePath(to, fromPathname, basename) {
  if (fromPathname === void 0) {
    fromPathname = "/";
  }

  if (basename === void 0) {
    basename = "";
  }

  var _ref8 = typeof to === "string" ? (0,history__WEBPACK_IMPORTED_MODULE_1__.parsePath)(to) : to,
      toPathname = _ref8.pathname,
      _ref8$search = _ref8.search,
      search = _ref8$search === void 0 ? "" : _ref8$search,
      _ref8$hash = _ref8.hash,
      hash = _ref8$hash === void 0 ? "" : _ref8$hash;

  var pathname = toPathname ? resolvePathname(toPathname, toPathname.startsWith("/") ? basename ? normalizeSlashes("/" + basename) : "/" : fromPathname) : fromPathname;
  return {
    pathname: pathname,
    search: search,
    hash: hash
  };
}

var trimTrailingSlashes = function trimTrailingSlashes(path) {
  return path.replace(/\/+$/, "");
};

var normalizeSlashes = function normalizeSlashes(path) {
  return path.replace(/\/\/+/g, "/");
};

var joinPaths = function joinPaths(paths) {
  return normalizeSlashes(paths.join("/"));
};

var splitPath = function splitPath(path) {
  return normalizeSlashes(path).split("/");
};

function resolvePathname(toPathname, fromPathname) {
  var segments = splitPath(trimTrailingSlashes(fromPathname));
  var relativeSegments = splitPath(toPathname);
  relativeSegments.forEach(function (segment) {
    if (segment === "..") {
      // Keep the root "" segment so the pathname starts at /
      if (segments.length > 1) segments.pop();
    } else if (segment !== ".") {
      segments.push(segment);
    }
  });
  return segments.length > 1 ? joinPaths(segments) : "/";
} ///////////////////////////////////////////////////////////////////////////////


//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/toggle-selection/index.js":
/*!************************************************!*\
  !*** ./node_modules/toggle-selection/index.js ***!
  \************************************************/
/***/ ((module) => {


module.exports = function () {
  var selection = document.getSelection();
  if (!selection.rangeCount) {
    return function () {};
  }
  var active = document.activeElement;

  var ranges = [];
  for (var i = 0; i < selection.rangeCount; i++) {
    ranges.push(selection.getRangeAt(i));
  }

  switch (active.tagName.toUpperCase()) { // .toUpperCase handles XHTML
    case 'INPUT':
    case 'TEXTAREA':
      active.blur();
      break;

    default:
      active = null;
      break;
  }

  selection.removeAllRanges();
  return function () {
    selection.type === 'Caret' &&
    selection.removeAllRanges();

    if (!selection.rangeCount) {
      ranges.forEach(function(range) {
        selection.addRange(range);
      });
    }

    active &&
    active.focus();
  };
};


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["apiFetch"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*********************************************!*\
  !*** ./resources/scripts/user-interface.js ***!
  \*********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _user_interface_components_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-interface/components/App */ "./resources/scripts/user-interface/components/App.js");



window.addEventListener('load', function () {
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.render)((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_user_interface_components_App__WEBPACK_IMPORTED_MODULE_1__.default, null), document.getElementById('intervention'));
});
})();

/******/ })()
;