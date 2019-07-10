webpackHotUpdate("static\\development\\pages\\topic.js",{

/***/ "./components/topic/share-panel.jsx":
/*!******************************************!*\
  !*** ./components/topic/share-panel.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_share__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/share */ "./components/common/share.jsx");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ "./components/topic/index.jsx");
var _jsxFileName = "C:\\Users\\ajc\\Staff\\offline-app\\components\\topic\\share-panel.jsx";





var SharePanel = function SharePanel() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(___WEBPACK_IMPORTED_MODULE_2__["Context"]),
      topic = _useContext.topic,
      setActionBar = _useContext.setActionBar;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var handle = function handle(e) {
      if (shareRef.current.parentNode.contains(e.target)) {} else {
        setActionBar(null);
      }
    };

    document.addEventListener('click', handle, true);
    _common_share__WEBPACK_IMPORTED_MODULE_1__["default"].init();
    return function () {
      document.removeEventListener('click', handle, true);
    };
  }, []);
  var shareRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    ref: shareRef,
    style: {
      textAlign: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Share to")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "link with-big-facebook",
    "data-share": "facebook",
    onClick: function onClick() {
      return setActionBar(null);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "link with-big-whatsapp",
    "data-share": "whatsapp",
    onClick: function onClick() {
      return setActionBar(null);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SharePanel);

/***/ })

})
//# sourceMappingURL=topic.js.91970c50a6ba8d789289.hot-update.js.map