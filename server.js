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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! node-fetch */ \"node-fetch\");\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _shared_App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/App */ \"./src/shared/App.js\");\n/* harmony import */ var _shared_Html__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/Html */ \"./src/shared/Html.js\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nvar port = 3000;\nvar server = express__WEBPACK_IMPORTED_MODULE_0___default()();\nserver.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.static('dist'));\nserver.get('*', function (req, res) {\n  var city = req.query.city || 'Copenhagen';\n  node_fetch__WEBPACK_IMPORTED_MODULE_1___default()(\"http://api.openweathermap.org/data/2.5/weather?q=\".concat(city, \",dk&appid=166d00e26d3ff2c6149e89feccc5c59a\")).then(function (res) {\n    return res.json();\n  }).then(function (json) {\n    try {\n      var props = {\n        city: json.name,\n        temperature: json.main.temp,\n        humidity: json.main.humidity,\n        windSpeed: json.wind.speed,\n        windAngle: json.wind.angle\n      };\n      var body = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_3__[\"renderToString\"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_shared_App__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        city: city,\n        temperature: json.main.temp,\n        humidity: json.main.humidity,\n        windSpeed: json.wind.speed,\n        windAngle: json.wind.deg\n      }));\n      var title = \"\\uD83C\\uDF24 Weather in \".concat(city);\n      res.send(Object(_shared_Html__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\n        body: body,\n        title: title,\n        props: props\n      }));\n    } catch (ex) {\n      throw new Error(ex);\n    }\n  }).catch(function (ex) {\n    console.log('parsing failed', ex);\n  });\n});\nserver.listen(port);\nconsole.log(\"Serving at http://localhost:\".concat(port));\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ "./src/shared/App.js":
/*!***************************!*\
  !*** ./src/shared/App.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Form */ \"./src/shared/Form.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ \"./src/shared/utils.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\nvar App =\n/*#__PURE__*/\nfunction (_PureComponent) {\n  _inherits(App, _PureComponent);\n\n  function App(props) {\n    var _this;\n\n    _classCallCheck(this, App);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));\n    _this.state = {\n      city: 'hulla'\n    };\n    var initialState; // props are not persisted between server and client render, so we store it globally\n\n    if (false) {} else {\n      initialState = props;\n    }\n\n    _this.state = Object.assign({}, initialState, {\n      errorMessage: ''\n    });\n    _this.cityInput = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      window.addEventListener('popstate', this.handleCityChange(), false);\n    }\n  }, {\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {\n      window.removeEventListener('popstate', this.handleCityChange(), false);\n    }\n  }, {\n    key: \"handleCityChange\",\n    value: function handleCityChange() {\n      var _this2 = this;\n\n      var urlParams = new URLSearchParams(window.location.search);\n\n      if (urlParams && urlParams.has('city')) {\n        var city = urlParams.get('city');\n        fetch(\"http://api.openweathermap.org/data/2.5/weather?q=\".concat(city, \",dk&appid=166d00e26d3ff2c6149e89feccc5c59a\")).then(function (response) {\n          return response.json();\n        }).then(function (json) {\n          try {\n            _this2.setState({\n              city: json.name,\n              temperature: json.main.temp,\n              humidity: json.main.humidity,\n              windSpeed: json.wind.speed,\n              windAngle: json.wind.deg,\n              errorMessage: ''\n            });\n          } catch (ex) {\n            throw new Error(ex);\n          }\n        }).catch(function (ex) {\n          console.log('parsing failed', ex);\n\n          _this2.setState({\n            errorMessage: 'Something went wrong. Please try again later.'\n          });\n        });\n      }\n    }\n  }, {\n    key: \"handleSubmit\",\n    value: function handleSubmit(e) {\n      e.preventDefault();\n      var city = this.cityInput.current.value;\n      history.pushState({}, \"\\uD83C\\uDF24 Weather in \".concat(city), \"/?city=\".concat(city));\n      this.handleCityChange(city);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this3 = this;\n\n      var _this$state = this.state,\n          city = _this$state.city,\n          temperature = _this$state.temperature,\n          windSpeed = _this$state.windSpeed,\n          windAngle = _this$state.windAngle,\n          humidity = _this$state.humidity,\n          errorMessage = _this$state.errorMessage;\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"widget\",\n        style: {\n          margin: '10px',\n          width: '300px'\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"panel panel-info\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"panel-heading\"\n      }, \"Weather in \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"b\", null, city)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n        className: \"list-group\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n        className: \"list-group-item\"\n      }, \"Temperature: \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"b\", null, Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"formatTemperature\"])(temperature), \"\\xB0C\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n        className: \"list-group-item\"\n      }, \"Humidity: \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"b\", null, humidity, \"%\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n        className: \"list-group-item\"\n      }, \"Wind: \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"b\", null, windSpeed, \" m/s \", Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"getWindDirection\"])(windAngle))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n        className: \"list-group-item\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Form__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        cityInputRef: this.cityInput,\n        onSubmit: function onSubmit(e) {\n          return _this3.handleSubmit(e);\n        }\n      })), errorMessage && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"alert alert-danger\",\n        role: \"alert\"\n      }, errorMessage))));\n    }\n  }]);\n\n  return App;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"PureComponent\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/shared/App.js?");

/***/ }),

/***/ "./src/shared/Form.js":
/*!****************************!*\
  !*** ./src/shared/Form.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar Form = function Form(_ref) {\n  var onSubmit = _ref.onSubmit,\n      cityInputRef = _ref.cityInputRef;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    className: \"form-inline\",\n    onSubmit: onSubmit\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"form-group\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    className: \"form-control\",\n    id: \"city\",\n    placeholder: \"City\",\n    ref: cityInputRef\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    type: \"submit\",\n    className: \"btn btn-default\"\n  }, \"Search\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Form);\n\n//# sourceURL=webpack:///./src/shared/Form.js?");

/***/ }),

/***/ "./src/shared/Html.js":
/*!****************************!*\
  !*** ./src/shared/Html.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! serialize-javascript */ \"serialize-javascript\");\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(serialize_javascript__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar Html = function Html(_ref) {\n  var body = _ref.body,\n      title = _ref.title,\n      props = _ref.props;\n  return \"\\n  <!DOCTYPE html>\\n  <html>\\n    <head>\\n      <title>\".concat(title, \"</title>\\n      <link rel=\\\"stylesheet\\\" href=\\\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\\\" integrity=\\\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\\\" crossorigin=\\\"anonymous\\\">\\n      <script src=\\\"/app.js\\\" defer></script>\\n      <script>window.__INITIAL_DATA__ = \").concat(serialize_javascript__WEBPACK_IMPORTED_MODULE_0___default()(props), \"</script>\\n    </head>\\n    <body style=\\\"margin:0\\\">\\n      <div id=\\\"app\\\">\").concat(body, \"</div>\\n    </body>\\n  </html>\\n\");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Html);\n\n//# sourceURL=webpack:///./src/shared/Html.js?");

/***/ }),

/***/ "./src/shared/utils.js":
/*!*****************************!*\
  !*** ./src/shared/utils.js ***!
  \*****************************/
/*! exports provided: formatTemperature, getWindDirection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"formatTemperature\", function() { return formatTemperature; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getWindDirection\", function() { return getWindDirection; });\n// the data is initially returned in Kelvin, so we need to subtract the difference to get Celsius\nvar formatTemperature = function formatTemperature(temperature) {\n  return Math.round(temperature - 273.15);\n};\nvar getWindDirection = function getWindDirection(windAngle) {\n  var val = Math.floor(windAngle / 45 + 0.5);\n  var arr = [\"N\", \"NE\", \"E\", \"SE\", \"S\", \"SW\", \"W\", \"NW\"];\n  return arr[val % 8];\n};\n\n//# sourceURL=webpack:///./src/shared/utils.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"node-fetch\");\n\n//# sourceURL=webpack:///external_%22node-fetch%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom\");\n\n//# sourceURL=webpack:///external_%22react-dom%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"serialize-javascript\");\n\n//# sourceURL=webpack:///external_%22serialize-javascript%22?");

/***/ })

/******/ });