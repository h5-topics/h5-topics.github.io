webpackHotUpdate("static\\development\\pages\\topic.js",{

/***/ "./components/common/share.jsx":
/*!*************************************!*\
  !*** ./components/common/share.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_string_starts_with__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.string.starts-with */ "./node_modules/core-js/modules/es6.string.starts-with.js");
/* harmony import */ var core_js_modules_es6_string_starts_with__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_starts_with__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.regexp.match */ "./node_modules/core-js/modules/es6.regexp.match.js");
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_2__);



var isPC = !/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i.test(navigator.userAgent);
var isiOS = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);

var Share = function Share(ele) {
  this.ele = ele;
};

Share.init = function () {
  var eles = document.querySelectorAll('[data-share]');
  var i;
  var l = eles.length;

  for (i = 0; i < l; i++) {
    eles[i].addEventListener('click', Share.add);
  }
};

Share.add = function (ele) {
  var target = ele.currentTarget || ele.srcElement;
  var share = new Share(target);
  share.getShareData();
};

Share.prototype = {
  constructor: Share,
  getValue: function getValue(attr) {
    var val = this.ele.getAttribute('data-' + attr);
    if (!val) return; // facebook hashtag

    if (attr === 'hashtag') {
      if (!val.startsWith('#')) {
        val = '#' + val;
      }
    }

    return val;
  },
  getShareData: function getShareData() {
    var share = this.getValue('share').toLowerCase();
    var shares = {
      facebook: {
        shareUrl: 'https://www.facebook.com/sharer/sharer.php',
        // shareUrl: 'https://www.facebook.com/dialog/share',
        params: {
          u: this.getValue('url'),
          hashtag: this.getValue('hashtag'),
          title: this.getValue('title'),
          description: this.getValue('description'),
          quote: this.getValue('quote') // app_id: 360406121199259,
          // display: 'popup',
          // redirect_uri: 'https://www.wps.com',
          // href: this.getValue('url'),
          // link: this.getValue('url')
          // quote: this.getValue('title'),
          // hashtag: this.getValue('hashtag')

        }
      },
      messenger: {
        shareUrl: isPC ? 'https://www.facebook.com/dialog/send' : 'fb-messenger://share',
        params: isPC ? {
          // u: this.getValue('url'),
          hashtag: this.getValue('hashtag'),
          title: this.getValue('title'),
          description: this.getValue('description'),
          quote: this.getValue('quote'),
          app_id: 360406121199259,
          display: 'popup',
          redirect_uri: 'https://www.wps.com',
          href: this.getValue('url'),
          link: this.getValue('url') // quote: this.getValue('title'),
          // hashtag: this.getValue('hashtag')

        } : {
          app_id: 360406121199259,
          link: this.getValue('url')
        },
        isLink: !isPC
      },
      twitter: {
        shareUrl: 'https://twitter.com/intent/tweet/',
        params: {
          text: this.getValue('title'),
          url: this.getValue('url'),
          hashtags: this.getValue('hashtags'),
          via: this.getValue('via')
        }
      },
      whatsapp: {
        shareUrl: isPC ? 'https://wa.me/' : 'whatsapp://send',
        params: {
          text: this.getValue('title') + ' ' + this.getValue('url')
        },
        isLink: !isPC
      },
      googleplus: {
        shareUrl: 'https://plus.google.com/share',
        params: {
          url: this.getValue('url')
        }
      },
      email: {
        shareUrl: 'mailto:',
        params: {
          subject: this.getValue('subject'),
          body: this.getValue('title') + '\n' + this.getValue('url')
        },
        isLink: true
      },
      sms: {
        shareUrl: (isiOS ? 'sms:// &body=' : 'sms:// ?body=') + this.getValue('title') + '\n' + this.getValue('url'),
        isLink: true
      },
      line: {
        shareUrl: 'http://line.me/R/msg/text/?' + encodeURIComponent(this.getValue('title') + ' ' + this.getValue('url')),
        isLink: true
      },
      hackernews: {
        shareUrl: 'https://news.ycombinator.com/submitlink',
        params: {
          u: this.getValue('url'),
          t: this.getValue('title')
        }
      },
      linkedin: {
        shareUrl: 'https://www.linkedin.com/shareArticle',
        params: {
          url: this.getValue('url'),
          title: this.getValue('title'),
          summary: this.getValue('summary'),
          mini: true
        }
      },
      vk: {
        shareUrl: 'http://vk.com/share.php',
        params: {
          url: this.getValue('url'),
          title: this.getValue('title'),
          description: this.getValue('caption'),
          image: this.getValue('image')
        }
      },
      xing: {
        shareUrl: 'https://www.xing.com/app/user',
        params: {
          'op': 'share',
          'url': this.getValue('url'),
          'title': this.getValue('title')
        }
      }
    };
    var s = shares[share];

    if (s) {
      s.width = this.getValue('width');
      s.height = this.getValue('height');
    }

    return s !== undefined ? this.urlShare(s) : false;
  },
  urlShare: function urlShare(share) {
    var p = share.params || {};

    var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(p);

    var i;
    var str = keys.length > 0 ? '?' : '';

    for (i = 0; i < keys.length; i++) {
      if (str !== '?') {
        str += '&';
      }

      if (p[keys[i]]) {
        str += keys[i] + '=' + encodeURIComponent(p[keys[i]]);
      }
    }

    share.shareUrl += str;

    if (!share.isLink) {
      var popWidth = share.width || 600;
      var popHeight = share.height || 480;
      var left = window.innerWidth / 2 - popWidth / 2 + window.screenX;
      var top = window.innerHeight / 2 - popHeight / 2 + window.screenY;
      var popParams = 'scrollbars=no, width=' + popWidth + ', height=' + popHeight + ', top=' + top + ', left=' + left;
      var newWindow = window.open(share.shareUrl, '', popParams);

      if (window.focus) {
        newWindow.focus();
      }
    } else {
      console.log(share.shareUrl);
      window.location.href = share.shareUrl;
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Share);

/***/ }),

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
    return function () {
      document.body.removeEventListener('click', closeExtendMenu);
    };
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "message-item-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "message-item-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, message_content), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "message-item-extend",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "message-item-extend-piece",
    style: {
      textAlign: 'left'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    className: "link with-whatsapp",
    onClick: onCommentClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, whatsapp_share_count)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "message-item-extend-piece",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    className: "link with-comment",
    onClick: onCommentClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, comment_count)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "message-item-extend-piece",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    className: "link with-like",
    onClick: onUpClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, up_count)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "message-item-extend-piece",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    className: "link with-dislike",
    onClick: onDownClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, down_count)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "message-item-extend-piece",
    style: {
      textAlign: 'right'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    className: "link with-extend",
    onClick: openExtendMenu,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "extend-menu",
    ref: extendMenu,
    onClickCapture: stopPropagation,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    className: "link with-facebook",
    onClick: closeExtendMenu,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    className: "link with-whatsapp",
    onClick: closeExtendMenu,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (MessageItem);

/***/ }),

/***/ "./node_modules/core-js/modules/_fails-is-regexp.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_fails-is-regexp.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var MATCH = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-context.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_string-context.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__(/*! ./_is-regexp */ "./node_modules/core-js/modules/_is-regexp.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.match.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.match.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ "./node_modules/core-js/modules/_advance-string-index.js");
var regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");

// @@match logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('match', 1, function (defined, MATCH, $match, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[MATCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative($match, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      if (!rx.global) return regExpExec(rx, S);
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.starts-with.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.starts-with.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.18 String.prototype.startsWith(searchString [, position ])

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var context = __webpack_require__(/*! ./_string-context */ "./node_modules/core-js/modules/_string-context.js");
var STARTS_WITH = 'startsWith';
var $startsWith = ''[STARTS_WITH];

$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ "./node_modules/core-js/modules/_fails-is-regexp.js")(STARTS_WITH), 'String', {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = context(this, searchString, STARTS_WITH);
    var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return $startsWith
      ? $startsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});


/***/ })

})
//# sourceMappingURL=topic.js.9a3cf34d9ed45aa25d6c.hot-update.js.map