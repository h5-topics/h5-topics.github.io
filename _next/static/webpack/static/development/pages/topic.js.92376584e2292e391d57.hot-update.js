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




var isPC = function isPC() {
  return !/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i.test(navigator.userAgent);
};

var isiOS = function isiOS() {
  return !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
};

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
        shareUrl: isPC() ? 'https://www.facebook.com/dialog/send' : 'fb-messenger://share',
        params: isPC() ? {
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
        isLink: !isPC()
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
        shareUrl: isPC() ? 'https://wa.me/' : 'whatsapp://send',
        params: {
          text: this.getValue('title') + ' ' + this.getValue('url')
        },
        isLink: !isPC()
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
        shareUrl: (isiOS() ? 'sms:// &body=' : 'sms:// ?body=') + this.getValue('title') + '\n' + this.getValue('url'),
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

/***/ })

})
//# sourceMappingURL=topic.js.92376584e2292e391d57.hot-update.js.map