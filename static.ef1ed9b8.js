(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "https://atsumaru.github.io/api-references/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createElement = exports.findExport = exports.resolveExport = exports.requireById = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};
var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod.default : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return _react2.default.createElement(
    'div',
    null,
    'Loading...'
  );
};
var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return _react2.default.createElement(
    'div',
    null,
    'Error: ',
    error && error.message
  );
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return requireById(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {
      console.warn('chunk not available for synchronous require yet: ' + id + ': ' + err.message, err.stack);
    }
  }

  return null;
};

var requireById = exports.requireById = function requireById(id) {
  if (!isWebpack() && typeof id === 'string') {
    return module.require(id);
  }

  return __webpack_require__(id);
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;

  var exp = findExport(mod, key);
  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';
    var info = { isServer: _isServer, isSync: isSync };
    onLoad(mod, info, props, context);
  }
  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return _react2.default.isValidElement(Component) ? _react2.default.cloneElement(Component, props) : _react2.default.createElement(Component, props);
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _htmlToComponent = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactStatic.withRouteData)(function (_ref) {
  var apiList = _ref.apiList,
      overview = _ref.overview,
      changelog = _ref.changelog;
  return _react2.default.createElement(
    "div",
    null,
    (0, _htmlToComponent.htmlToComponent)(overview.contents),
    _react2.default.createElement(
      "h2",
      null,
      "\u63D0\u4F9B\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8"
    ),
    _react2.default.createElement(
      "table",
      null,
      _react2.default.createElement(
        "thead",
        null,
        _react2.default.createElement(
          "tr",
          null,
          _react2.default.createElement(
            "th",
            null,
            "\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8"
          ),
          _react2.default.createElement(
            "th",
            null,
            "\u6982\u8981"
          )
        )
      ),
      _react2.default.createElement(
        "tbody",
        null,
        apiList.map(function (api) {
          return _react2.default.createElement(
            "tr",
            { key: api.slug },
            _react2.default.createElement(
              "th",
              null,
              _react2.default.createElement(
                _reactStatic.Link,
                { key: api.slug, to: "/" + api.slug },
                api.title
              )
            ),
            _react2.default.createElement(
              "td",
              null,
              (0, _htmlToComponent.htmlToComponent)(api.description)
            )
          );
        })
      )
    ),
    _react2.default.createElement(
      "h2",
      null,
      "\u66F4\u65B0\u5C65\u6B74"
    ),
    (0, _htmlToComponent.htmlToComponent)(changelog.contents)
  );
});

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.htmlToComponent = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _htmr = __webpack_require__(26);

var _htmr2 = _interopRequireDefault(_htmr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable jsx-a11y/heading-has-content */
var htmlToComponent = exports.htmlToComponent = function htmlToComponent(html, experimentalNote) {
  return (0, _htmr2.default)(html.replace(/&lt;/g, "&amp;lt;") /* htmrが二重unescapeしてしまうバグが有るため... */, {
    transform: {
      a: function a(props) {
        return _react2.default.createElement(_reactStatic.Link, _extends({}, props, { to: props.href }, props.href.match(/^https?:\/\//) ? { rel: "noopener", target: "_blank" } : {}));
      },
      h1: function h1(props) {
        return _react2.default.createElement("h1", _extends({}, props, { id: ("" + props.children).replace(/\s+/, "-") }));
      },
      h2: function h2(props) {
        return _react2.default.createElement("h2", _extends({}, props, { id: ("" + props.children).replace(/\s+/, "-") }));
      },
      h3: function h3(props) {
        return _react2.default.createElement("h3", _extends({}, props, { id: ("" + props.children).replace(/\s+/, "-") }));
      },
      "experimental-note": experimentalNote
    }
  });
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _htmlToComponent = __webpack_require__(7);

var _flask = __webpack_require__(9);

var _flask2 = _interopRequireDefault(_flask);

__webpack_require__(27);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GITHUB_URL = "https://github.com/atsumaru/api-references";

var ExperimentalNote = function ExperimentalNote() {
  return _react2.default.createElement(
    "div",
    { className: "Reference__ExperimentalNote" },
    _react2.default.createElement(_flask2.default, { className: "Reference__ExperimentalNoteIcon" }),
    _react2.default.createElement(
      "span",
      null,
      "\u3053\u306E\u6A5F\u80FD\u306F\u5B9F\u9A13\u7684\u306A\u6A5F\u80FD\u3067\u3042\u308A\u3001\u5C06\u6765\u4ED5\u69D8\u304C\u5909\u66F4\u3055\u308C\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002\u4E88\u3081\u3054\u4E86\u627F\u304F\u3060\u3055\u3044\u3002"
    )
  );
};

var Theory = function Theory() {
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      "h2",
      null,
      "\u524D\u63D0"
    ),
    "\u3053\u306EAPI\u3092\u5229\u7528\u3059\u308B\u969B\u306F\u3001API\u306E\u6D3B\u7528\u65B9\u6CD5\u306E\u30D2\u30F3\u30C8\u3084\u4F7F\u3044\u5206\u3051\u65B9\u306A\u3069\u306B\u3064\u3044\u3066\u307E\u3068\u3081\u305F",
    _react2.default.createElement(
      _reactStatic.Link,
      { to: "/common/theory" },
      "API\u306E\u30BB\u30AA\u30EA\u30FC"
    ),
    "\u3082\u5408\u308F\u305B\u3066\u3054\u53C2\u7167\u304F\u3060\u3055\u3044\u3002"
  );
};

exports.default = (0, _reactStatic.withRouteData)(function (_ref) {
  var reference = _ref.reference;
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      "div",
      null,
      reference.navi
    ),
    _react2.default.createElement(
      "div",
      { className: "Reference__Header" },
      _react2.default.createElement(
        "h1",
        null,
        reference.title
      ),
      _react2.default.createElement(
        "a",
        { className: "Reference__EditButton", href: GITHUB_URL + "/blob/master/content/collections/apis/" + reference.slug + ".md" },
        "\u7DE8\u96C6"
      )
    ),
    reference.experimental ? _react2.default.createElement(ExperimentalNote, null) : null,
    reference.recommendTheory ? _react2.default.createElement(Theory, null) : null,
    (0, _htmlToComponent.htmlToComponent)(reference.contents, ExperimentalNote)
  );
});

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}

exports.default = function (_ref) {
  var _ref$styles = _ref.styles,
      styles = _ref$styles === undefined ? {} : _ref$styles,
      props = _objectWithoutProperties(_ref, ["styles"]);

  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 24 24" }, props),
    _react2.default.createElement("path", { d: "M9 2C8 2 8 3 8 3s0 1 1 1v7.367188l-3.9335938 6.884765c-1.0407086 1.821241-1.11276 3.000196-.7734374 3.763672.3393224.763476 1.0859374.96875 1.0859374.96875.0395749.010135.0802425.015383.1210938.015625h13c.04085-.000242.08152-.005495.121094-.015625 0 0 .746615-.205274 1.085937-.96875.339323-.763476.267272-1.942431-.773437-3.763672L15 11.367188V4s1 0 1-1-1-1-1-1h-1v9.5c.000167.08705.023056.172554.066406.248047l4 7c.959291 1.678759.88724 2.499804.726563 2.861328-.154565.347753-.380331.387021-.398438.390625H5.6054688c-.0181066-.003604-.2438806-.042872-.3984376-.390625-.1606773-.361524-.2327286-1.182569.7265626-2.861328l4-7c.043349-.075492.0662393-.160994.0664062-.248047V2H9zm1 12.5a1 1 0 0 0-1 1c-.1818651-.000015-.3493995.098711-.4375.257812l-2.5 4.5c-.18445.333279.0565842.742177.4375.742188h11c.380916-.000011.62195-.408909.4375-.742188l-2.5-4.5c-.0881-.1591-.255635-.257827-.4375-.257812h-.634766A1 1 0 0 0 13.5 15a1 1 0 0 0-.863281.5H11a1 1 0 0 0-1-1zm4 1.5a.5.5 0 0 1 .5.5.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5.5.5 0 0 1 .5-.5zm-3.5.5a.5.5 0 0 1 .5.5.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5.5.5 0 0 1 .5-.5zM13 18a1 1 0 0 1 1 1 1 1 0 0 1-1 1 1 1 0 0 1-1-1 1 1 0 0 1 1-1z" })
  );
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactStatic.withRouteData)(function () {
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      "h1",
      null,
      "\u30DA\u30FC\u30B8\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093"
    ),
    _react2.default.createElement(
      "div",
      null,
      "\u79FB\u52D5\u3082\u3057\u304F\u306F\u524A\u9664\u3055\u308C\u305F\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002",
      _react2.default.createElement("br", null),
      "URL\u3084\u30D5\u30A1\u30A4\u30EB\u540D\u306B\u9593\u9055\u3044\u304C\u306A\u3044\u304B\u3001\u518D\u5EA6\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002"
    )
  );
});

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(12);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(13);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Export your top level component as JSX (for static rendering)
exports.default = _App2.default;

// Your top level component

if (typeof document !== "undefined") {
  var renderMethod =  false ? _reactDom2.default.render : _reactDom2.default.hydrate || _reactDom2.default.render;
  var render = function render(Comp) {
    renderMethod(_react2.default.createElement(Comp, null), document.getElementById("root"));
  };

  // Render!
  render(_App2.default);
}

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(14);

__webpack_require__(15);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _reactHotLoader = __webpack_require__(16);

var _reactStaticRoutes = __webpack_require__(17);

var _reactStaticRoutes2 = _interopRequireDefault(_reactStaticRoutes);

var _MainLayout = __webpack_require__(28);

var _MainLayout2 = _interopRequireDefault(_MainLayout);

__webpack_require__(33);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
  return _react2.default.createElement(
    _reactStatic.Router,
    null,
    _react2.default.createElement(
      _MainLayout2.default,
      null,
      _react2.default.createElement(_reactStaticRoutes2.default, null)
    )
  );
};

exports.default = (0, _reactHotLoader.hot)(module)(App);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("ress/ress.css");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("github-markdown-css/github-markdown.css");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path2 = __webpack_require__(18);

var _path3 = _interopRequireDefault(_path2);

var _importCss2 = __webpack_require__(19);

var _importCss3 = _interopRequireDefault(_importCss2);

var _universalImport2 = __webpack_require__(20);

var _universalImport3 = _interopRequireDefault(_universalImport2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(21);

var _reactUniversalComponent = __webpack_require__(22);

var _reactUniversalComponent2 = _interopRequireDefault(_reactUniversalComponent);

var _reactStatic = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _reactUniversalComponent.setHasBabelPlugin)();

var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return _react2.default.createElement(
      'div',
      null,
      'An error occurred loading this page\'s template. More information is available in the console.'
    );
  }
};

var t_0 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Home',
  file: '/home/nicogame/jenkins/workspace/publish-github.com/target/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 6)), (0, _importCss3.default)('src/containers/Home', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Home');
  },
  resolve: function resolve() {
    return /*require.resolve*/(6);
  },
  chunkName: function chunkName() {
    return 'src/containers/Home';
  }
}), universalOptions);
var t_1 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Reference',
  file: '/home/nicogame/jenkins/workspace/publish-github.com/target/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 8)), (0, _importCss3.default)('src/containers/Reference', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Reference');
  },
  resolve: function resolve() {
    return /*require.resolve*/(8);
  },
  chunkName: function chunkName() {
    return 'src/containers/Reference';
  }
}), universalOptions);
var t_2 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/404',
  file: '/home/nicogame/jenkins/workspace/publish-github.com/target/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 10)), (0, _importCss3.default)('src/containers/404', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/404');
  },
  resolve: function resolve() {
    return /*require.resolve*/(10);
  },
  chunkName: function chunkName() {
    return 'src/containers/404';
  }
}), universalOptions);

// Template Map
global.componentsByTemplateID = global.componentsByTemplateID || [t_0, t_1, t_2];

// Template Tree
global.templateIDsByPath = global.templateIDsByPath || {
  '404': 2

  // Get template for given path
};var getComponentForPath = function getComponentForPath(path) {
  path = (0, _reactStatic.cleanPath)(path);
  return global.componentsByTemplateID[global.templateIDsByPath[path]];
};

global.reactStaticGetComponentForPath = getComponentForPath;
global.reactStaticRegisterTemplateIDForPath = function (path, id) {
  global.templateIDsByPath[path] = id;
};

var Routes = function (_Component) {
  _inherits(Routes, _Component);

  function Routes() {
    _classCallCheck(this, Routes);

    return _possibleConstructorReturn(this, (Routes.__proto__ || Object.getPrototypeOf(Routes)).apply(this, arguments));
  }

  _createClass(Routes, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          Comp = _props.component,
          render = _props.render,
          children = _props.children;


      var getFullComponentForPath = function getFullComponentForPath(path) {
        var Comp = getComponentForPath(path);
        var is404 = path === '404';
        if (!Comp) {
          is404 = true;
          Comp = getComponentForPath('404');
        }
        return function (newProps) {
          return Comp ? _react2.default.createElement(Comp, _extends({}, newProps, is404 ? { is404: true } : {})) : null;
        };
      };

      var renderProps = {
        componentsByTemplateID: global.componentsByTemplateID,
        templateIDsByPath: global.templateIDsByPath,
        getComponentForPath: getFullComponentForPath
      };

      if (Comp) {
        return _react2.default.createElement(Comp, renderProps);
      }

      if (render || children) {
        return (render || children)(renderProps);
      }

      // This is the default auto-routing renderer
      return _react2.default.createElement(_reactRouterDom.Route, { path: '*', render: function render(props) {
          var Comp = getFullComponentForPath(props.location.pathname);
          // If Comp is used as a component here, it triggers React to re-mount the entire
          // component tree underneath during reconciliation, losing all internal state.
          // By unwrapping it here we keep the real, static component exposed directly to React.
          return Comp && Comp(_extends({}, props, { key: props.location.pathname }));
        } });
    }
  }]);

  return Routes;
}(_react.Component);

exports.default = Routes;
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/importCss");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requireUniversalModule = __webpack_require__(23);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(24);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks).default;
  }
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(25);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (
    // $FlowIgnore
    module.hot && (module.hot.data || module.hot.status() === 'apply')
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(component) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.modCache = {};
  options.promCache = {};

  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, null, [{
      key: 'preload',

      /* eslint-enable react/sort-comp */

      /* eslint-disable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        props = props || {};

        var _req = (0, _requireUniversalModule2.default)(component, options, props),
            requireAsync = _req.requireAsync,
            requireSync = _req.requireSync;

        var Component = void 0;

        try {
          Component = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (Component) return Component;
          return requireAsync(props, context);
        }).then(function (Component) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, { preload: true });
          return Component;
        });
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

        if (!_this._mounted) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = { error: null };
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this._mounted = true;

        var _req2 = (0, _requireUniversalModule2.default)(component, options, this.props),
            addModule = _req2.addModule,
            requireSync = _req2.requireSync,
            requireAsync = _req2.requireAsync,
            asyncOnly = _req2.asyncOnly;

        var Component = void 0;

        try {
          Component = requireSync(this.props, this.context);
        } catch (error) {
          return this.update({ error: error });
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(this.props); // record the module for SSR flushing :)

        if (this.context.report) {
          this.context.report(chunkName);
        }

        if (Component || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          this.update({ Component: Component }, true, true, _utils.isServer);
          return;
        }

        this.handleBefore(true, false);
        this.requireAsync(requireAsync, this.props, true);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._mounted = false;
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var _this2 = this;

        if (isDynamic || this._asyncOnly) {
          var _req3 = (0, _requireUniversalModule2.default)(component, options, nextProps, this.props),
              requireSync = _req3.requireSync,
              requireAsync = _req3.requireAsync,
              shouldUpdate = _req3.shouldUpdate;

          if (shouldUpdate(nextProps, this.props)) {
            var Component = void 0;

            try {
              Component = requireSync(nextProps, this.context);
            } catch (error) {
              return this.update({ error: error });
            }

            this.handleBefore(false, !!Component);

            if (!Component) {
              return this.requireAsync(requireAsync, nextProps);
            }

            var state = { Component: Component };

            if (alwaysDelay) {
              if (loadingTransition) this.update({ Component: null }); // display `loading` during componentWillReceiveProps
              setTimeout(function () {
                return _this2.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          } else if (isHMR()) {
            var _Component = requireSync(nextProps, this.context);
            this.setState({ Component: function Component() {
                return null;
              } }); // HMR /w Redux and HOCs can be finicky, so we
            setTimeout(function () {
              return _this2.setState({ Component: _Component });
            }); // toggle components to insure updates occur
          }
        }
      }
    }, {
      key: 'requireAsync',
      value: function requireAsync(_requireAsync, props, isMount) {
        var _this3 = this;

        if (this.state.Component && loadingTransition) {
          this.update({ Component: null }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();

        _requireAsync(props, this.context).then(function (Component) {
          var state = { Component: Component };

          var timeLapsed = new Date() - time;
          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this3.update(state, isMount);
            }, extraDelay);
          }

          _this3.update(state, isMount);
        }).catch(function (error) {
          return _this3.update({ error: error });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;

          var info = { isMount: isMount, isSync: isSync, isServer: isServer };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var Component = state.Component,
            error = state.error;


        if (Component && !error) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, { preload: true });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;

            var info = { isMount: isMount, isSync: isSync, isServer: isServer };
            onAfter(info, Component);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      }
    }, {
      key: 'render',
      value: function render() {
        var _state = this.state,
            error = _state.error,
            Component = _state.Component;

        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        // user-provided props (e.g. for data-fetching loading):


        if (isLoading) {
          return (0, _utils.createElement)(Loading, props);
        } else if (userError) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: userError }));
        } else if (error) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: error }));
        } else if (Component) {
          // primary usage (for async import loading + errors):
          return (0, _utils.createElement)(Component, props);
        }

        return (0, _utils.createElement)(Loading, props);
      }
    }]);

    return UniversalComponent;
  }(_react2.default.Component), _class.contextTypes = {
    store: _propTypes2.default.object,
    report: _propTypes2.default.func
  }, _temp;
}
exports.default = universal;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;
exports.default = requireUniversalModule;

var _utils = __webpack_require__(4);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache;


  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;

  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);

    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;

    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);
        if (onError) {
          var _isServer = typeof window === 'undefined';
          var info = { isServer: _isServer };
          onError(error, info);
        }
        rej(error);
      };

      // const timer = timeout && setTimeout(reject, timeout)
      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);

        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);

        reject(new Error('export not found'));
      };

      var request = load(props, { resolve: resolve, reject: reject });

      // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.
      if (!request || typeof request.then !== 'function') return;
      request.then(resolve).catch(reject);
    });

    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);
        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);

    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);

    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    return typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };

  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load
  };
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2.default.Component);

ReportChunks.propTypes = {
  report: _propTypes2.default.func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2.default.func.isRequired
};
exports.default = ReportChunks;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("htmr");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".Reference__Header{display:flex;justify-content:space-between;align-items:center}.Reference__Header>h1{flex-grow:1}.Reference__EditButton{flex-shrink:0;display:block;border:solid 1px #39e;border-radius:4px;padding:.5rem 1rem;margin-left:1rem;transition:opacity .2s ease-in-out}.Reference__EditButton:hover{opacity:.75}.Reference__Description{font-size:.75rem}.Reference__ExperimentalNote{display:flex;align-items:center;margin-bottom:1rem;padding:.5rem 1rem;border:solid 2px #c90;color:#970;background-color:#FFFCDD;border-radius:.5rem}.Reference__ExperimentalNoteIcon{flex-shrink:0;width:1.5rem;height:1.5rem;margin-right:.25rem;fill:#970}\n", ""]);

// exports


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _classnames = __webpack_require__(29);

var _classnames2 = _interopRequireDefault(_classnames);

var _favicon = __webpack_require__(30);

var _favicon2 = _interopRequireDefault(_favicon);

var _logo = __webpack_require__(31);

var _logo2 = _interopRequireDefault(_logo);

var _flask = __webpack_require__(9);

var _flask2 = _interopRequireDefault(_flask);

__webpack_require__(32);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SITE_NAME = "RPGアツマール APIリファレンス";

var Meta = function Meta(_ref) {
  var title = _ref.title;

  var titleText = (title ? title + " - " : "") + SITE_NAME;
  var description = "RPGアツマールに投稿したゲームから利用可能なAPIのリファレンスです。";

  return _react2.default.createElement(
    _reactStatic.Head,
    null,
    _react2.default.createElement(
      "title",
      null,
      titleText
    ),
    _react2.default.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
    _react2.default.createElement("meta", { name: "description", content: description }),
    _react2.default.createElement("meta", { name: "keywords", content: "RPG\u30A2\u30C4\u30DE\u30FC\u30EB,RPG\u30C4\u30AF\u30FC\u30EBMV,\u81EA\u4F5C\u30B2\u30FC\u30E0,\u30A4\u30F3\u30C7\u30A3\u30FC\u30BA\u30B2\u30FC\u30E0,\u30B2\u30FC\u30E0,\u30D5\u30EA\u30FC\u30B2\u30FC\u30E0,\u540C\u4EBA\u30B2\u30FC\u30E0,\u7121\u6599,niconico" }),
    _react2.default.createElement("meta", { property: "og:title", content: titleText }),
    _react2.default.createElement("meta", { property: "og:type", content: "website" }),
    _react2.default.createElement("meta", { property: "og:url", content: "https://site.nicovideo.jp/atsumaru/declaration/" }),
    _react2.default.createElement("meta", { property: "og:image", content: "https://site.nicovideo.jp/atsumaru/declaration/img/2018/img2.jpg" }),
    _react2.default.createElement("meta", { property: "og:site_name", content: "RPG\u30A2\u30C4\u30DE\u30FC\u30EB" }),
    _react2.default.createElement("meta", { property: "og:description", content: description }),
    _react2.default.createElement("meta", { name: "twitter:card", content: "summary_large_image" }),
    _react2.default.createElement("meta", { name: "twitter:site", content: "@nico_indiesgame" }),
    _react2.default.createElement("link", { rel: "icon", href: _favicon2.default })
  );
};

var Header = function Header() {
  return _react2.default.createElement(
    "header",
    { className: "Header" },
    _react2.default.createElement(
      "nav",
      { className: "Header__Nav" },
      _react2.default.createElement(
        "a",
        { href: "http://www.nicovideo.jp/" },
        "niconico"
      ),
      _react2.default.createElement(
        "a",
        { href: "https://game.nicovideo.jp/atsumaru/" },
        "RPG\u30A2\u30C4\u30DE\u30FC\u30EB"
      )
    )
  );
};

var Footer = function Footer() {
  return _react2.default.createElement(
    "footer",
    { className: "Footer" },
    _react2.default.createElement(
      "nav",
      { className: "Footer__Nav" },
      _react2.default.createElement(
        "a",
        { href: "https://game.nicovideo.jp/atsumaru/" },
        "RPG\u30A2\u30C4\u30DE\u30FC\u30EB \u306B\u623B\u308B"
      )
    ),
    _react2.default.createElement(
      "span",
      null,
      "\xA9DWANGO Co., Ltd."
    )
  );
};

var MainNavigationApiLink = function (_React$Component) {
  _inherits(MainNavigationApiLink, _React$Component);

  function MainNavigationApiLink(props, context) {
    _classCallCheck(this, MainNavigationApiLink);

    var _this = _possibleConstructorReturn(this, (MainNavigationApiLink.__proto__ || Object.getPrototypeOf(MainNavigationApiLink)).call(this, props, context));

    _this.state = { isOpen: props.defaultOpen || false };

    _this.onClickAngle = function (ev) {
      ev.preventDefault();
      ev.stopPropagation();
      _this.setState({ isOpen: !_this.state.isOpen });
    };
    _this.onClickLink = function () {
      return _this.setState({ isOpen: true });
    };
    return _this;
  }

  _createClass(MainNavigationApiLink, [{
    key: "render",
    value: function render() {
      var api = this.props.api;
      var isOpen = this.state.isOpen;

      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          _reactStatic.Link,
          {
            className: "MainNavigationItem",
            to: "/" + api.slug,
            title: api.description,
            onClick: this.onClickLink,
            exact: true
          },
          api.experimental ? _react2.default.createElement(_flask2.default, { className: "MainNavigationItem__Icon" }) : null,
          _react2.default.createElement(
            "span",
            { className: "MainNavigationItem__Text" },
            api.title
          ),
          api.children.length > 0 ? _react2.default.createElement("button", { className: "MainNavigationItem__Button", onClick: this.onClickAngle, "data-is-open": "" + isOpen }) : null
        ),
        _react2.default.createElement(
          "div",
          { className: "MainNavigationItem__Children", "aria-hidden": !isOpen },
          api.children.map(function (child) {
            return _react2.default.createElement(
              _reactStatic.Link,
              {
                className: (0, _classnames2.default)("MainNavigationItem", "MainNavigationItem--child"),
                key: child.slug,
                to: "/" + child.slug,
                title: child.description,
                exact: true
              },
              _react2.default.createElement(
                "span",
                { className: "MainNavigationItem__Text" },
                child.title
              )
            );
          })
        )
      );
    }
  }]);

  return MainNavigationApiLink;
}(_react2.default.Component);

var MainNavigation = function MainNavigation(_ref2) {
  var apiList = _ref2.apiList,
      path = _ref2.path;
  return _react2.default.createElement(
    "nav",
    { className: "MainNavigation" },
    _react2.default.createElement(
      "div",
      { className: "MainNavigation__LogoContainer" },
      _react2.default.createElement(
        _reactStatic.Link,
        { to: "/", className: "MainNavigation__Logo" },
        _react2.default.createElement("img", { src: _logo2.default, alt: "RPG\u30A2\u30C4\u30DE\u30FC\u30EB" }),
        "API\u30EA\u30D5\u30A1\u30EC\u30F3\u30B9"
      )
    ),
    _react2.default.createElement(
      _reactStatic.Link,
      { className: "MainNavigationItem", to: "/", exact: true },
      "\u6982\u8981"
    ),
    apiList.map(function (api) {
      return _react2.default.createElement(MainNavigationApiLink, { key: api.slug, api: api, defaultOpen: !!path.match(api.slug) });
    })
  );
};

exports.default = (0, _reactStatic.withRouteData)(function (_ref3) {
  var _ref3$apiList = _ref3.apiList,
      apiList = _ref3$apiList === undefined ? [] : _ref3$apiList,
      _ref3$title = _ref3.title,
      title = _ref3$title === undefined ? "" : _ref3$title,
      _ref3$path = _ref3.path,
      path = _ref3$path === undefined ? "/" : _ref3$path,
      children = _ref3.children;
  return _react2.default.createElement(
    "div",
    { className: "MainLayout" },
    _react2.default.createElement(Meta, { title: title }),
    _react2.default.createElement(Header, null),
    _react2.default.createElement(
      "main",
      { className: "MainLayout__Body" },
      _react2.default.createElement(MainNavigation, { apiList: apiList, path: path }),
      _react2.default.createElement(
        "article",
        { className: "MainSection markdown-body" },
        children
      )
    ),
    _react2.default.createElement(Footer, null)
  );
});

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/favicon.cdb3578c.ico";

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfoAAABACAYAAADyM7XuAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAAN1wAADdcBQiibeAAAAAd0SU1FB+ELBwkPCQpe9MsAAAVPSURBVHja7d0/bxtlHAfwOycSEahDByqmorMzFejGUghKp5aKMZkRK0HNS0DlHaQi7B1ROiIoUysq9QVQ0QHiWJUYUCqBSoUEUnMPS1vFTuLz2Xfx/fl8pAxu7lzfPXa+fn7PPc/FUflCzu3jCAAoRMcpAABBDwAIegCgSnKPh98/0+sffrzyrN8b2SRk7D/0+P1vXx/7/y1de1j6MQFAUy1OsU/XaQOAelC6BwBBDwDU0WIBz5FrTD5L3cbk75/pZa4T8OmbobJvgL29vWPPX7fbreyL3tt8K3ujzQfHHtfC9TuZx/X2d59rr4q0V97jOnx+Ztn3JEU9Z5Xb6/En32Ruc3DzaquuhZpXu0/yntSjB4CWE/QAIOgBgDo6box+dAxh7BhB3jH4LP9+/17eXf4c87vfl649vKiZARD09XV2zO+eaWIA2kzpHgAEPQBQR5OU7nPN+/vw791SX/B/P4wfch+Zh38+ynnNAQC0LegZo8qL4TRVd+uPzG32Tvj3Ki+Go72ogkk+I9qrXpTuAUDQAwB1tHjM/eVzPUHZY/KjXvv456HHo2P2o/Pwp1g7v1RFrV18knmtoe24mv2+qkt71YX24lSDPnJ/eQBoLKV7ABD0AEAdHZleN7p2fd4x+xowrx4APXoAoIE9esrV1Ktb23bVrlkAUP2/A7ee5Pu4rDzrN/LzpUcPAI3u0XcWhgfl04OhQfm895uP4+EvRCHM9gVv1uer+rx6ACg16Fee/ro3S7ADkE+3292Jomht0u1DCOuDweB20a9jeXl59eDg4Est0mynXrqP43jsD0DTxXG8EUXRfo7tt3u93rkiAz5Jkrtpmt6N43hViwh6AArU7/f3QwgbOXY5F0LYFvBMYzEamVe++lm+99LzOR/A0m9ncn+Z1uxwvKpdNT3LLIOqz1AYDAa3u93u7WjyEv5akiRr05TwX5bo0zRdVTnVowfglJRdwteDZy5BH0IY+wPQFmWV8AU8evQAFfGiFJ+nHL+WJMnaPAI+hHCv0+lc1mr1cmRlvIObV4ceL1y/k7vHXnQFIJfNB8OPty6NPg4j2xuwAuYqjuONEMJHURSdm3D77V6v91O/399/GfBljsGHEO4tLCzc2N3dvae19OgByGnaEv5p9eAHg8FlId+gHj3lOulK4LxXO1ftiuK2rcFe1PG27R4BnGyaq/DTNF2rUg++an8HVlr8flpeXr6Qpul6FEXrgh6gIvKW8KsS8FQv3NM0fedwj370G1izehhZY/YAFdHv9/eTJNmI43hHwDNLuB+mRw9QIVOU8AW8cB9L0ANUTNklfAHf/HAX9AAVVlYJX8C3J9xzBX3WvPrFzR+HHj/fulLuN92bH8z2BA2ZN1/U1dptu1p+Xue5qa+z7PdPm2clFFnCF/D1lKbpL0U8jx49QEXNWsIX8ESRBXMAKmuKhXReBbyFbtCjb4FHX7+Ruc3SNeepKm49ya6CrzhNrft8TVnC3xbw9XzPXPjin1MJ+qG/NgvX7zyOouj8xE84Mmaf5aD3VdHH1Ox1AYDWmXUtfNpN6R6g4sq6nS2CHoCKKPJ2trTCoyiKbnQ6nXczx+hDHD+NQ/hrzCZnnU+A8inhM0G473Q6nZ3d3d1XU/Mygz7dunIx67tAnleR9/72R9aqH5W9dr154kAjTLGQzssS/rqz165wP8xV9wA1Ms3tbJMkWXtR+qcl4S7oAWpMCV+459lR0APUjBK+cM/1xXCKfQodkz8yjz5rTH70NW9dCiP7G5MHgBdMrwMAQQ8ACHoAoFLmMZ4davAaAUCPHgAQ9ACAoAcAivY/6RWnrHV1g5UAAAAASUVORK5CYII="

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".MainLayout{display:flex;flex-direction:column;min-height:100%}.Header{background-color:#252525}.Header::after{content:'';display:block;width:100%;height:6px;background-image:linear-gradient(to right, #c30d23 20%, #f8d62d 20%, #f8d62d 40%, #00913a 40%, #00913a 60%, #046eb8 60%, #046eb8 80%, #7403b8 80%)}.Header__Nav{display:flex;align-items:baseline;padding:.5rem 1.5rem}.Header__Nav>a{color:#fff;font-weight:bold}.Header__Nav>a:nth-child(n+2){margin-left:1em}.Footer{display:flex;justify-content:space-between;align-items:baseline;padding:1rem 2rem;color:#fff;font-size:.75rem;background-color:#252525}.Footer__Nav>a{color:#fff}.Footer__Nav>a::before{content:'\\300B   '}.MainNavigation{flex-shrink:0;display:flex;flex-direction:column;width:18rem;padding:1rem 0;background-color:#f8f8f8}@media (max-width: 768px){.MainNavigation{width:100%}}.MainNavigation__LogoContainer{padding:0 1rem}.MainNavigation__Logo{display:block;text-align:right;font-size:.75rem;font-weight:normal;max-width:18rem;margin:0 auto 1rem;color:#000;transition:opacity ease-in-out .2s}.MainNavigation__Logo:hover{opacity:.75;text-decoration:none}.MainNavigation__Logo>img{display:block;width:100%}.MainNavigationItem{display:flex;align-items:center;padding:.6rem 1.5rem;transition:background-color 0.2s ease}.MainNavigationItem[aria-current]{font-weight:bold;color:#fff;cursor:default;background-color:#39e}.MainNavigationItem[aria-current]:hover{background-color:#39e;text-decoration:none}.MainNavigationItem--child{padding-left:2.5rem}.MainNavigationItem__Icon{flex-shrink:0;margin-right:.25rem;width:1.5rem;height:1.5rem;fill:currentColor}.MainNavigationItem__Text{flex-grow:1}.MainNavigationItem__Button{outline:0}.MainNavigationItem__Button::after{content:'';display:block;width:.75rem;height:.75rem;border-right:solid 4px currentColor;border-bottom:solid 4px currentColor;transform-origin:center center;transform:rotate(-45deg);transition:transform 0.2s ease}.MainNavigationItem__Button[data-is-open=\"true\"]::after{transform:rotate(45deg) translateY(-4px)}.MainNavigationItem__Children{background-color:rgba(200,200,192,0.3)}.MainNavigationItem__Children[aria-hidden=\"true\"]{display:none}.MainLayout__Body{flex-grow:1;display:flex}@media (max-width: 768px){.MainLayout__Body{flex-direction:column}}.MainSection{width:100%;max-width:60rem;padding:2rem 1.5rem 4rem}.MainSection>table{max-width:100%}.MainSection>table td:nth-child(1),.MainSection>table th:nth-child(1){font-weight:bold;word-break:keep-all}.MainSection .negative{color:#f55}.MainSection.markdown-body{line-height:1.5}.MainSection.markdown-body a{color:#39e}.MainSection.markdown-body h2{margin-top:3em}.MainSection.markdown-body h3{margin-top:2em}.MainSection.markdown-body td:nth-child(1){min-width:7em}.MainSection.markdown-body ul li,.MainSection.markdown-body ol li{margin-top:0.75rem}.MainSection.markdown-body img{max-width:60%;max-height:60vh}@media (max-width: 768px){.MainSection.markdown-body img{max-width:100%}}\n", ""]);

// exports


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "*{box-sizing:border-box}body{font-family:'Noto Sans', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif;font-weight:300;font-size:16px}html,body,#root{margin:0;padding:0;height:100%}a{text-decoration:none;color:#39e}a:hover{text-decoration:underline}img{max-width:100%}\n", ""]);

// exports


/***/ })
/******/ ]);
});
//# sourceMappingURL=static.ef1ed9b8.js.map