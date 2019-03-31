(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mobileRequest"],{

/***/ "./src/mobileRequest.js":
/*!******************************!*\
  !*** ./src/mobileRequest.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request.js */ "./src/request.js");


console.log('mobile request');

/* harmony default export */ __webpack_exports__["default"] = (_request_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/request.js":
/*!************************!*\
  !*** ./src/request.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function request(url) {
  return new Promise((resolve) => {
    console.log('request url:', url);
    setTimeout(() => {
      resolve({ data: '这是返回的数据' });
    }, 2000);
  });
}

/* harmony default export */ __webpack_exports__["default"] = (request);


/***/ })

}]);