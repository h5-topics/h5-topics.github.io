webpackHotUpdate("static\\development\\pages\\topic.js",{

/***/ "./components/topic/message-list-item.jsx":
/*!************************************************!*\
  !*** ./components/topic/message-list-item.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_share__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/share */ "./components/common/share.jsx");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! . */ "./components/topic/index.jsx");


var _jsxFileName = "C:\\Users\\ajc\\Staff\\offline-app\\components\\topic\\message-list-item.jsx";




console.log(_common_share__WEBPACK_IMPORTED_MODULE_3__["default"]);

var useMessgaeStateHook = function useMessgaeStateHook(message) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(message.up_count),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      up_count = _useState2[0],
      setUpCount = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(message.down_count),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      down_count = _useState4[0],
      setDownCount = _useState4[1];

  var getLocalState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    return localStorage.getItem('message_' + message.ID) || 'noset';
  }, []);
  var setLocalState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (state) {
    localStorage.setItem('message_' + message.ID, state);
  }, []);

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(___WEBPACK_IMPORTED_MODULE_4__["Context"]),
      setToast = _useContext.setToast,
      setOpenedMessage = _useContext.setOpenedMessage;

  var up = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    var state = getLocalState();

    switch (state) {
      case 'noset':
        setUpCount(up_count + 1);
        setLocalState('up');
        break;

      case 'up':
        setUpCount(up_count - 1);
        setLocalState('noset');
        break;

      default:
        setToast('already ' + state);
    }
  }, [up_count]);
  var down = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    // fetch(`http://127.0.0.1:7001/api/messages/up?message=${ ID }`)
    var state = getLocalState();

    switch (state) {
      case 'noset':
        setDownCount(down_count + 1);
        setLocalState('down');
        break;

      case 'down':
        setDownCount(down_count - 1);
        setLocalState('noset');
        break;

      default:
        setToast('already ' + state);
    }
  }, [down_count]);
  var selectMessage = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    setOpenedMessage(message);
  }, [message]);
  return [Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, message, {
    up_count: up_count,
    down_count: down_count
  }), up, down, selectMessage];
};

var stopPropagation = function stopPropagation(e) {
  return e.stopPropagation();
};

var MessageItem = function MessageItem(_ref) {
  var message = _ref.message;

  var _useMessgaeStateHook = useMessgaeStateHook(message),
      _useMessgaeStateHook2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useMessgaeStateHook, 4),
      _useMessgaeStateHook3 = _useMessgaeStateHook2[0],
      message_content = _useMessgaeStateHook3.message_content,
      comment_count = _useMessgaeStateHook3.comment_count,
      up_count = _useMessgaeStateHook3.up_count,
      down_count = _useMessgaeStateHook3.down_count,
      _useMessgaeStateHook4 = _useMessgaeStateHook3.whatsapp_share_count,
      whatsapp_share_count = _useMessgaeStateHook4 === void 0 ? 0 : _useMessgaeStateHook4,
      onUpClick = _useMessgaeStateHook2[1],
      onDownClick = _useMessgaeStateHook2[2],
      onCommentClick = _useMessgaeStateHook2[3];

  var extendMenu = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  var openExtendMenu = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (e) {
    extendMenu.current.classList.toggle('show');
    e.stopPropagation();
  }, []);
  var closeExtendMenu = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    extendMenu.current.classList.remove('show');
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    document.body.addEventListener('click', closeExtendMenu);
    _common_share__WEBPACK_IMPORTED_MODULE_3__["default"].init();
    return function () {
      document.body.removeEventListener('click', closeExtendMenu);
    };
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "message-item-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "message-item-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, message_content), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "message-item-extend",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "message-item-extend-piece",
    style: {
      textAlign: 'left'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    className: "link with-whatsapp",
    "data-share": "whatsapp",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, whatsapp_share_count)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "message-item-extend-piece",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    className: "link with-comment",
    onClick: onCommentClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, comment_count)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "message-item-extend-piece",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    className: "link with-like",
    onClick: onUpClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, up_count)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "message-item-extend-piece",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    className: "link with-dislike",
    onClick: onDownClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, down_count)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "message-item-extend-piece",
    style: {
      textAlign: 'right'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    className: "link with-extend",
    onClick: openExtendMenu,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "extend-menu",
    ref: extendMenu,
    onClickCapture: stopPropagation,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    className: "link with-facebook",
    onClick: closeExtendMenu,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    className: "link with-whatsapp",
    onClick: closeExtendMenu,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (MessageItem);

/***/ })

})
//# sourceMappingURL=topic.js.cbbdceb3a9860bfa1cf7.hot-update.js.map