(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["commons"],{

/***/ "./node_modules/css-loader/index.js!./src/component/Board/Board.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader!./src/component/Board/Board.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".board {\r\n  position: relative;\r\n  border: 1px solid #000;\r\n  background-color: #d2ab8e;\r\n}\r\n\r\n.grid {\r\n  box-sizing: border-box;\r\n  border: 1px solid #000;\r\n  display: inline-block;\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/component/Chess/Chess.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader!./src/component/Chess/Chess.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chess {\r\n  position: absolute;\r\n  padding: 5px;\r\n  /* box-sizing: border-box; */\r\n}\r\n\r\n.chess_inner {\r\n  width: 30px;\r\n  height: 30px;\r\n  border-radius: 50%;\r\n  /* margin: 5px; */\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/container/Game.css":
/*!**********************************************************!*\
  !*** ./node_modules/css-loader!./src/container/Game.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".game {\r\n  background-color: #eee;\r\n  padding: 20px;\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./src/component/Board/Board.css":
/*!***************************************!*\
  !*** ./src/component/Board/Board.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!./Board.css */ "./node_modules/css-loader/index.js!./src/component/Board/Board.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader!./Board.css */ "./node_modules/css-loader/index.js!./src/component/Board/Board.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader!./Board.css */ "./node_modules/css-loader/index.js!./src/component/Board/Board.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/component/Board/Board.js":
/*!**************************************!*\
  !*** ./src/component/Board/Board.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Board; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // import Grid from '../Grid';

var Board =
/*#__PURE__*/
function (_Component) {
  _inherits(Board, _Component);

  function Board(props) {
    var _this;

    _classCallCheck(this, Board);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Board).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClick", function (side) {
      return function (evt) {
        var pageX = evt.pageX,
            pageY = evt.pageY;
        var x = Math.floor((pageX - 20 + side / 2) / side),
            y = Math.floor((pageY - 20 + side / 2) / side);

        if (typeof _this.props.onClick === 'function') {
          _this.props.onClick({
            x: x,
            y: y
          }, evt);
        }
      };
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getGrids", function (rowCount, colCount) {
      var side = _this.props.side;
      var grids = [];

      for (var i = 0; i < rowCount; i++) {
        var horizon = [];

        for (var j = 0; j < colCount; j++) {
          horizon.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            key: "".concat(i, "_").concat(j),
            className: "grid",
            style: {
              width: "".concat(side, "px"),
              height: "".concat(side, "px")
            }
          }));
        }

        grids.push(horizon);
      }

      return grids;
    });

    return _this;
  }

  _createClass(Board, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          side = _this$props.side,
          rowCount = _this$props.rowCount,
          colCount = _this$props.colCount,
          children = _this$props.children;
      var style = {
        width: "".concat(colCount * side, "px"),
        height: "".concat(colCount * side, "px")
      };
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "board",
        style: style,
        onClick: this.handleClick(side)
      }, this.getGrids(rowCount, colCount), children);
    }
  }]);

  return Board;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


Board.propTypes = {
  side: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  rowCount: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  colCount: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

/***/ }),

/***/ "./src/component/Board/index.js":
/*!**************************************!*\
  !*** ./src/component/Board/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Board */ "./src/component/Board/Board.js");
/* harmony import */ var _Board_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Board.css */ "./src/component/Board/Board.css");
/* harmony import */ var _Board_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Board_css__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (_Board__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/component/Chess/Chess.css":
/*!***************************************!*\
  !*** ./src/component/Chess/Chess.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!./Chess.css */ "./node_modules/css-loader/index.js!./src/component/Chess/Chess.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader!./Chess.css */ "./node_modules/css-loader/index.js!./src/component/Chess/Chess.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader!./Chess.css */ "./node_modules/css-loader/index.js!./src/component/Chess/Chess.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/component/Chess/Chess.js":
/*!**************************************!*\
  !*** ./src/component/Chess/Chess.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Chess; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Chess =
/*#__PURE__*/
function (_Component) {
  _inherits(Chess, _Component);

  function Chess(props) {
    _classCallCheck(this, Chess);

    return _possibleConstructorReturn(this, _getPrototypeOf(Chess).call(this, props));
  }

  _createClass(Chess, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          type = _this$props.type,
          side = _this$props.side,
          x = _this$props.x,
          y = _this$props.y;
      var style = {
        left: "".concat(x * side - side / 2, "px"),
        top: "".concat(y * side - side / 2, "px"),
        width: "".concat(side, "px"),
        height: "".concat(side, "px")
      };
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "chess",
        style: style
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "chess_inner",
        style: {
          backgroundColor: type
        }
      }));
    }
  }]);

  return Chess;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


Chess.propTypes = {
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(["black", "white"]),
  side: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  x: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  y: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
};

/***/ }),

/***/ "./src/component/Chess/index.js":
/*!**************************************!*\
  !*** ./src/component/Chess/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Chess__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Chess */ "./src/component/Chess/Chess.js");
/* harmony import */ var _Chess_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Chess.css */ "./src/component/Chess/Chess.css");
/* harmony import */ var _Chess_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Chess_css__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (_Chess__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/container/Game.css":
/*!********************************!*\
  !*** ./src/container/Game.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!./Game.css */ "./node_modules/css-loader/index.js!./src/container/Game.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader!./Game.css */ "./node_modules/css-loader/index.js!./src/container/Game.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader!./Game.css */ "./node_modules/css-loader/index.js!./src/container/Game.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/container/Game.js":
/*!*******************************!*\
  !*** ./src/container/Game.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_Board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/Board */ "./src/component/Board/index.js");
/* harmony import */ var _component_Chess__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/Chess */ "./src/component/Chess/index.js");
/* harmony import */ var _logic_Engine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../logic/Engine */ "./src/logic/Engine.js");
/* harmony import */ var _logic_Constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../logic/Constants */ "./src/logic/Constants.js");
/* harmony import */ var _Game_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Game.css */ "./src/container/Game.css");
/* harmony import */ var _Game_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Game_css__WEBPACK_IMPORTED_MODULE_5__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var SIDE = 40,
    ROW_COUNT = 15,
    COL_COUNT = 15;

var Game =
/*#__PURE__*/
function (_Component) {
  _inherits(Game, _Component);

  function Game(props) {
    var _this;

    _classCallCheck(this, Game);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Game).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "addChess", function (_ref) {
      var x = _ref.x,
          y = _ref.y;
      var chesses = _this.state.chesses;
      var existChess = chesses.filter(function (chess) {
        return x === chess.x && y === chess.y;
      });

      if (existChess.length === 0) {
        var newChesses = _toConsumableArray(chesses).concat([{
          type: _logic_Constants__WEBPACK_IMPORTED_MODULE_4__["CHESS_TYPE"].BLACK,
          x: x,
          y: y
        }]);

        _this.setState({
          chesses: newChesses,
          enable: false
        }, function () {
          var _this$engine$next = _this.engine.next(newChesses, {
            type: _logic_Constants__WEBPACK_IMPORTED_MODULE_4__["CHESS_TYPE"].BLACK,
            x: x,
            y: y
          }),
              isWin = _this$engine$next.isWin,
              winnerType = _this$engine$next.winnerType,
              nextChess = _this$engine$next.nextChess;

          if (isWin) {
            _this.setState({
              isWin: isWin,
              enable: false,
              winnerType: winnerType
            });

            if (nextChess) {
              _this.setState({
                chesses: _toConsumableArray(newChesses).concat([nextChess])
              });
            }
          } else {
            _this.setState({
              chesses: _toConsumableArray(newChesses).concat([nextChess]),
              enable: true
            });
          }
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getChess", function (_ref2, chesses) {
      var side = _ref2.side,
          rowCount = _ref2.rowCount,
          colCount = _ref2.colCount;
      var res = [];
      chesses.forEach(function (_ref3, index) {
        var type = _ref3.type,
            x = _ref3.x,
            y = _ref3.y;
        res.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_Chess__WEBPACK_IMPORTED_MODULE_2__["default"], {
          key: index,
          type: type,
          side: side,
          x: x,
          y: y
        }));
      });
      return res;
    });

    _this.engine = new _logic_Engine__WEBPACK_IMPORTED_MODULE_3__["default"]({
      rowCount: ROW_COUNT,
      colCount: COL_COUNT,
      engineType: _logic_Constants__WEBPACK_IMPORTED_MODULE_4__["CHESS_TYPE"].WHITE
    });
    _this.state = {
      chesses: [],
      enable: true,
      isWin: false,
      winnerType: null
    };
    return _this;
  }

  _createClass(Game, [{
    key: "render",
    value: function render() {
      var boardProps = {
        side: SIDE,
        rowCount: ROW_COUNT,
        colCount: COL_COUNT
      };
      var _this$state = this.state,
          chesses = _this$state.chesses,
          enable = _this$state.enable,
          isWin = _this$state.isWin,
          winnerType = _this$state.winnerType;

      if (enable) {
        Object.assign(boardProps, {
          onClick: this.addChess
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "game"
      }, isWin ? "winner:".concat(winnerType === _logic_Constants__WEBPACK_IMPORTED_MODULE_4__["CHESS_TYPE"].BLACK ? 'black' : 'white') : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_Board__WEBPACK_IMPORTED_MODULE_1__["default"], boardProps, this.getChess(boardProps, chesses)));
    }
  }]);

  return Game;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _container_Game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./container/Game */ "./src/container/Game.js");




function App() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_container_Game__WEBPACK_IMPORTED_MODULE_2__["default"], null);
}

function render() {
  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, null), document.getElementById("container"));
}

if (true) {
  module.hot.accept(/*! ./container/Game */ "./src/container/Game.js", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _container_Game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./container/Game */ "./src/container/Game.js");
(function () {
    render();
  })(__WEBPACK_OUTDATED_DEPENDENCIES__); });
}

render();

/***/ }),

/***/ "./src/logic/Chess.js":
/*!****************************!*\
  !*** ./src/logic/Chess.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Chess; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Chess = function Chess(type, x, y) {
  _classCallCheck(this, Chess);

  this.type = type;
  this.x = x;
  this.y = y;
};



/***/ }),

/***/ "./src/logic/Constants.js":
/*!********************************!*\
  !*** ./src/logic/Constants.js ***!
  \********************************/
/*! exports provided: DIRECTION, CHESS_TYPE, CALC_POSITION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIRECTION", function() { return DIRECTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHESS_TYPE", function() { return CHESS_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CALC_POSITION", function() { return CALC_POSITION; });
var DIRECTION = {
  HORIZONTAL: 0,
  VERTICAL: 1,
  LEFT_DIAGONAL: 2,
  RIGHT_DIAGONAL: 3
};
var CHESS_TYPE = {
  WHITE: 'white',
  BLACK: 'black',
  NONE: 'none'
};
var CALC_POSITION = {};
CALC_POSITION[DIRECTION.HORIZONTAL] = {
  prevCalcX: function prevCalcX(x) {
    return x - 1;
  },
  prevCalcY: function prevCalcY(y) {
    return y;
  },
  nextCalcX: function nextCalcX(x) {
    return x + 1;
  },
  nextCalcY: function nextCalcY(y) {
    return y;
  }
};
CALC_POSITION[DIRECTION.VERTICAL] = {
  prevCalcX: function prevCalcX(x) {
    return x;
  },
  prevCalcY: function prevCalcY(y) {
    return y - 1;
  },
  nextCalcX: function nextCalcX(x) {
    return x;
  },
  nextCalcY: function nextCalcY(y) {
    return y + 1;
  }
};
CALC_POSITION[DIRECTION.LEFT_DIAGONAL] = {
  prevCalcX: function prevCalcX(x) {
    return x - 1;
  },
  prevCalcY: function prevCalcY(y) {
    return y - 1;
  },
  nextCalcX: function nextCalcX(x) {
    return x + 1;
  },
  nextCalcY: function nextCalcY(y) {
    return y + 1;
  }
};
CALC_POSITION[DIRECTION.RIGHT_DIAGONAL] = {
  prevCalcX: function prevCalcX(x) {
    return x + 1;
  },
  prevCalcY: function prevCalcY(y) {
    return y - 1;
  },
  nextCalcX: function nextCalcX(x) {
    return x - 1;
  },
  nextCalcY: function nextCalcY(y) {
    return y + 1;
  }
};


/***/ }),

/***/ "./src/logic/Engine.js":
/*!*****************************!*\
  !*** ./src/logic/Engine.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Engine; });
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Constants */ "./src/logic/Constants.js");
/* harmony import */ var _GroupList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GroupList */ "./src/logic/GroupList.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var Engine = function Engine(_ref) {
  var _this = this;

  var rowCount = _ref.rowCount,
      colCount = _ref.colCount,
      engineType = _ref.engineType;

  _classCallCheck(this, Engine);

  _defineProperty(this, "next", function (chesses, currentChess) {
    var result = {
      isWin: false,
      winnerType: _Constants__WEBPACK_IMPORTED_MODULE_0__["CHESS_TYPE"].NONE,
      nextChess: null
    };

    _this.operationAfterChessPlayed(result, chesses, currentChess);

    if (result.isWin) {
      return result;
    }

    var nextChess = _this.groups[_this.engineType].getNextChess(_this.groups[_this.oppositeType], _this.engineType);

    result.nextChess = nextChess;

    _this.operationAfterChessPlayed(result, chesses, nextChess);

    if (result.isWin) {
      return result;
    }

    return result;
  });

  _defineProperty(this, "operationAfterChessPlayed", function (result, chesses, chess) {
    if (_this.groups[chess.type].isWin(chess)) {
      result.isWin = true;
      result.winnerType = chess.type;
      return result;
    }

    _this.groups[_Constants__WEBPACK_IMPORTED_MODULE_0__["CHESS_TYPE"].WHITE].deleteGroupByPosition(chess);

    _this.groups[_Constants__WEBPACK_IMPORTED_MODULE_0__["CHESS_TYPE"].BLACK].deleteGroupByPosition(chess);

    _this.groups[chess.type].addGroupByPosition(chesses, chess);
  });

  this.rowCount = rowCount;
  this.colCount = colCount;
  this.engineType = engineType;
  this.oppositeType = engineType === _Constants__WEBPACK_IMPORTED_MODULE_0__["CHESS_TYPE"].WHITE ? _Constants__WEBPACK_IMPORTED_MODULE_0__["CHESS_TYPE"].BLACK : _Constants__WEBPACK_IMPORTED_MODULE_0__["CHESS_TYPE"].WHITE;
  this.groups = {};
  this.groups[_Constants__WEBPACK_IMPORTED_MODULE_0__["CHESS_TYPE"].WHITE] = new _GroupList__WEBPACK_IMPORTED_MODULE_1__["default"](_Constants__WEBPACK_IMPORTED_MODULE_0__["CHESS_TYPE"].WHITE, rowCount, colCount);
  this.groups[_Constants__WEBPACK_IMPORTED_MODULE_0__["CHESS_TYPE"].BLACK] = new _GroupList__WEBPACK_IMPORTED_MODULE_1__["default"](_Constants__WEBPACK_IMPORTED_MODULE_0__["CHESS_TYPE"].BLACK, rowCount, colCount);
};



/***/ }),

/***/ "./src/logic/Group.js":
/*!****************************!*\
  !*** ./src/logic/Group.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Group; });
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Constants */ "./src/logic/Constants.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Group = function Group(direction) {
  var _this = this;

  var group = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  _classCallCheck(this, Group);

  _defineProperty(this, "add", function (chess) {
    _this.group.push(chess);

    if (chess.type !== _Constants__WEBPACK_IMPORTED_MODULE_0__["CHESS_TYPE"].NONE) {
      _this.realCount++;
    }
  });

  this.realCount = 0;
  this.direction = direction;
  this.group = group;
};



/***/ }),

/***/ "./src/logic/GroupList.js":
/*!********************************!*\
  !*** ./src/logic/GroupList.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GroupList; });
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Constants */ "./src/logic/Constants.js");
/* harmony import */ var _Group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Group */ "./src/logic/Group.js");
/* harmony import */ var _Chess__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Chess */ "./src/logic/Chess.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var GroupList = function GroupList(_type, rowCount, colCount) {
  var _this = this;

  _classCallCheck(this, GroupList);

  _defineProperty(this, "isWin", function (_ref) {
    var x = _ref.x,
        y = _ref.y;
    return _this.groups.some(function (_ref2) {
      var realCount = _ref2.realCount,
          group = _ref2.group;
      return realCount == 4 && group.some(function (chess) {
        return chess.x === x && chess.y === y && chess.type === _Constants__WEBPACK_IMPORTED_MODULE_0__["CHESS_TYPE"].NONE;
      });
    });
  });

  _defineProperty(this, "deleteGroupByPosition", function (_ref3) {
    var x = _ref3.x,
        y = _ref3.y;
    _this.groups = _this.groups.filter(function (_ref4) {
      var group = _ref4.group;
      return group.filter(function (chess) {
        return chess.type === _Constants__WEBPACK_IMPORTED_MODULE_0__["CHESS_TYPE"].NONE;
      }).reduce(function (accu, chess) {
        return accu && !(chess.x === x && chess.y === y);
      }, true);
    });
  });

  _defineProperty(this, "addGroupByPosition", function (chesses, _ref5) {
    var x = _ref5.x,
        y = _ref5.y,
        type = _ref5.type;
    Object.keys(_Constants__WEBPACK_IMPORTED_MODULE_0__["DIRECTION"]).forEach(function (key) {
      var _CALC_POSITION$DIRECT = _Constants__WEBPACK_IMPORTED_MODULE_0__["CALC_POSITION"][_Constants__WEBPACK_IMPORTED_MODULE_0__["DIRECTION"][key]],
          prevCalcX = _CALC_POSITION$DIRECT.prevCalcX,
          prevCalcY = _CALC_POSITION$DIRECT.prevCalcY,
          nextCalcX = _CALC_POSITION$DIRECT.nextCalcX,
          nextCalcY = _CALC_POSITION$DIRECT.nextCalcY;

      _this.addGroupsByDirection(chesses, {
        x: x,
        y: y,
        type: type
      }, prevCalcX, prevCalcY, nextCalcX, nextCalcY, key);
    });
  });

  _defineProperty(this, "addGroupsByDirection", function (chesses, _ref6, prevCalcX, prevCalcY, nextCalcX, nextCalcY, direction) {
    var x = _ref6.x,
        y = _ref6.y,
        type = _ref6.type;
    var combinableChesses = [new _Chess__WEBPACK_IMPORTED_MODULE_2__["default"](type, x, y)];

    _this.addCombinableChesses(combinableChesses, chesses, {
      x: x,
      y: y,
      type: type
    }, prevCalcX, prevCalcY, true);

    _this.addCombinableChesses(combinableChesses, chesses, {
      x: x,
      y: y,
      type: type
    }, nextCalcX, nextCalcY, false);

    var length = combinableChesses.length;

    if (length >= 5) {
      for (var i = 0, groupCount = length - 4; i < groupCount; i++) {
        var group = new _Group__WEBPACK_IMPORTED_MODULE_1__["default"](direction);

        for (var j = i; j < i + 5; j++) {
          group.add(combinableChesses[j]);
        }

        _this.groups.push(group);
      }

      _this.groups = _this.groups.filter(function (_ref7) {
        var realCount = _ref7.realCount;
        return realCount > 0;
      });
    }
  });

  _defineProperty(this, "addCombinableChesses", function (combinableChesses, chesses, _ref8, xCalc, yCalc, isBefore) {
    var x = _ref8.x,
        y = _ref8.y,
        type = _ref8.type;
    var canContain = true;

    while (canContain) {
      x = xCalc(x);
      y = yCalc(y);
      canContain = _this.canContain(chesses, {
        x: x,
        y: y,
        type: type
      });

      if (canContain) {
        var exist = chesses.some(function (chess) {
          return chess.x === x && chess.y === y;
        });
        var chessObj = new _Chess__WEBPACK_IMPORTED_MODULE_2__["default"](exist ? type : _Constants__WEBPACK_IMPORTED_MODULE_0__["CHESS_TYPE"].NONE, x, y);
        isBefore ? combinableChesses.splice(0, 0, chessObj) : combinableChesses.push(chessObj);
      }
    }
  });

  _defineProperty(this, "canContain", function (chesses, _ref9) {
    var x = _ref9.x,
        y = _ref9.y,
        type = _ref9.type;

    if (x < 0 || x > _this.colCount || y < 0 || y > _this.rowCount) {
      return false;
    }

    var exist = chesses.some(function (chess) {
      return chess.x === x && chess.y === y;
    });

    if (!exist) {
      return true;
    }

    exist = chesses.some(function (chess) {
      return chess.x === x && chess.y === y && chess.type === type;
    });
    return exist;
  });

  _defineProperty(this, "sort", function (a, b) {
    return a.y - b.y === 0 ? a.x - b.x : a.y - b.y;
  });

  _defineProperty(this, "getNextChess", function (oppositeGroups, type) {
    var chess = null;

    for (var i = 4; i > 0; i--) {
      chess = _this.getPossibleChessInGroup(oppositeGroups, i, type);

      if (chess) {
        break;
      }
    }

    if (!chess) {
      var x = Math.round(Math.random() * _this.colCount);
      var y = Math.round(Math.random() * _this.rowCount);
      chess = {
        x: x,
        y: y,
        type: type
      };
    }

    return chess;
  });

  _defineProperty(this, "getPossibleChessInGroup", function (oppositeGroups, realCount, type) {
    var chess = null;

    if (realCount !== 3) {
      chess = _this.findCommonChess(oppositeGroups, realCount, type);
    } else {
      var subGroup = _this.groups.find(function (group) {
        return group.realCount === realCount && group.group[0].type === _Constants__WEBPACK_IMPORTED_MODULE_0__["CHESS_TYPE"].NONE && group.group[4].type === _Constants__WEBPACK_IMPORTED_MODULE_0__["CHESS_TYPE"].NONE;
      });

      if (subGroup) {
        chess = _objectSpread({}, subGroup.group[0]);
      }

      if (!chess) {
        var oppositeSubGroup = oppositeGroups.groups.find(function (group) {
          return group.realCount === realCount && group.group[0].type === _Constants__WEBPACK_IMPORTED_MODULE_0__["CHESS_TYPE"].NONE && group.group[4].type === _Constants__WEBPACK_IMPORTED_MODULE_0__["CHESS_TYPE"].NONE;
        });

        if (oppositeSubGroup) {
          chess = _objectSpread({}, oppositeSubGroup.group[0]);
        }
      }

      if (!chess) {
        chess = _this.findCommonChess(oppositeGroups, realCount, type);
      }
    }

    if (chess) {
      chess.type = type;
    }

    return chess;
  });

  _defineProperty(this, "findCommonChess", function (oppositeGroups, realCount, type) {
    var chess = null;

    var subGroup = _this.groups.find(function (group) {
      return group.realCount === realCount;
    });

    if (subGroup) {
      chess = _objectSpread({}, subGroup.group.find(function (item, index) {
        return item.type === _Constants__WEBPACK_IMPORTED_MODULE_0__["CHESS_TYPE"].NONE && (index < 4 && subGroup.group[index + 1].type !== _Constants__WEBPACK_IMPORTED_MODULE_0__["CHESS_TYPE"].NONE || index > 0 && subGroup.group[index - 1].type !== _Constants__WEBPACK_IMPORTED_MODULE_0__["CHESS_TYPE"].NONE);
      }));
    }

    if (!chess) {
      var oppositeSubGroup = oppositeGroups.groups.find(function (group) {
        return group.realCount === realCount;
      });

      if (oppositeSubGroup) {
        chess = _objectSpread({}, oppositeSubGroup.group.find(function (item, index) {
          return item.type === _Constants__WEBPACK_IMPORTED_MODULE_0__["CHESS_TYPE"].NONE && (index < 4 && oppositeSubGroup.group[index + 1].type !== _Constants__WEBPACK_IMPORTED_MODULE_0__["CHESS_TYPE"].NONE || index > 0 && oppositeSubGroup.group[index - 1].type !== _Constants__WEBPACK_IMPORTED_MODULE_0__["CHESS_TYPE"].NONE);
        }));
      }
    }

    if (chess) {
      chess.type = type;
    }

    return chess;
  });

  this.type = _type;
  this.rowCount = rowCount;
  this.colCount = colCount;
  this.groups = [];
};



/***/ }),

/***/ 0:
/*!**********************************************************!*\
  !*** multi ./src/index.js webpack-hot-middleware/client ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/index.js */"./src/index.js");
module.exports = __webpack_require__(/*! webpack-hot-middleware/client */"./node_modules/webpack-hot-middleware/client.js");


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L0JvYXJkL0JvYXJkLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L0NoZXNzL0NoZXNzLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVyL0dhbWUuY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvQm9hcmQvQm9hcmQuY3NzPzMwOWIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9Cb2FyZC9Cb2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L0JvYXJkL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvQ2hlc3MvQ2hlc3MuY3NzP2E5NjQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9DaGVzcy9DaGVzcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L0NoZXNzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXIvR2FtZS5jc3M/MjNiZiIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVyL0dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9sb2dpYy9DaGVzcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbG9naWMvQ29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9sb2dpYy9FbmdpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvZ2ljL0dyb3VwLmpzIiwid2VicGFjazovLy8uL3NyYy9sb2dpYy9Hcm91cExpc3QuanMiXSwibmFtZXMiOlsiQm9hcmQiLCJwcm9wcyIsInNpZGUiLCJldnQiLCJwYWdlWCIsInBhZ2VZIiwieCIsIk1hdGgiLCJmbG9vciIsInkiLCJvbkNsaWNrIiwicm93Q291bnQiLCJjb2xDb3VudCIsImdyaWRzIiwiaSIsImhvcml6b24iLCJqIiwicHVzaCIsIndpZHRoIiwiaGVpZ2h0IiwiY2hpbGRyZW4iLCJzdHlsZSIsImhhbmRsZUNsaWNrIiwiZ2V0R3JpZHMiLCJwcm9wVHlwZXMiLCJudW1iZXIiLCJmdW5jIiwiQ2hlc3MiLCJ0eXBlIiwibGVmdCIsInRvcCIsImJhY2tncm91bmRDb2xvciIsIm9uZU9mIiwiU0lERSIsIlJPV19DT1VOVCIsIkNPTF9DT1VOVCIsIkdhbWUiLCJjaGVzc2VzIiwic3RhdGUiLCJleGlzdENoZXNzIiwiZmlsdGVyIiwiY2hlc3MiLCJsZW5ndGgiLCJuZXdDaGVzc2VzIiwiQkxBQ0siLCJzZXRTdGF0ZSIsImVuYWJsZSIsImVuZ2luZSIsIm5leHQiLCJpc1dpbiIsIndpbm5lclR5cGUiLCJuZXh0Q2hlc3MiLCJyZXMiLCJmb3JFYWNoIiwiaW5kZXgiLCJlbmdpbmVUeXBlIiwiV0hJVEUiLCJib2FyZFByb3BzIiwiT2JqZWN0IiwiYXNzaWduIiwiYWRkQ2hlc3MiLCJnZXRDaGVzcyIsIkFwcCIsInJlbmRlciIsIlJlYWN0RE9NIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm1vZHVsZSIsImhvdCIsImFjY2VwdCIsIkRJUkVDVElPTiIsIkhPUklaT05UQUwiLCJWRVJUSUNBTCIsIkxFRlRfRElBR09OQUwiLCJSSUdIVF9ESUFHT05BTCIsIkNIRVNTX1RZUEUiLCJOT05FIiwiQ0FMQ19QT1NJVElPTiIsInByZXZDYWxjWCIsInByZXZDYWxjWSIsIm5leHRDYWxjWCIsIm5leHRDYWxjWSIsIkVuZ2luZSIsImN1cnJlbnRDaGVzcyIsInJlc3VsdCIsIm9wZXJhdGlvbkFmdGVyQ2hlc3NQbGF5ZWQiLCJncm91cHMiLCJnZXROZXh0Q2hlc3MiLCJvcHBvc2l0ZVR5cGUiLCJkZWxldGVHcm91cEJ5UG9zaXRpb24iLCJhZGRHcm91cEJ5UG9zaXRpb24iLCJHcm91cCIsImRpcmVjdGlvbiIsImdyb3VwIiwicmVhbENvdW50IiwiR3JvdXBMaXN0Iiwic29tZSIsInJlZHVjZSIsImFjY3UiLCJrZXlzIiwia2V5IiwiYWRkR3JvdXBzQnlEaXJlY3Rpb24iLCJjb21iaW5hYmxlQ2hlc3NlcyIsImFkZENvbWJpbmFibGVDaGVzc2VzIiwiZ3JvdXBDb3VudCIsImFkZCIsInhDYWxjIiwieUNhbGMiLCJpc0JlZm9yZSIsImNhbkNvbnRhaW4iLCJleGlzdCIsImNoZXNzT2JqIiwic3BsaWNlIiwiYSIsImIiLCJvcHBvc2l0ZUdyb3VwcyIsImdldFBvc3NpYmxlQ2hlc3NJbkdyb3VwIiwicm91bmQiLCJyYW5kb20iLCJmaW5kQ29tbW9uQ2hlc3MiLCJzdWJHcm91cCIsImZpbmQiLCJvcHBvc2l0ZVN1Ykdyb3VwIiwiaXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBR0E7QUFDQSxpQ0FBa0MseUJBQXlCLDZCQUE2QixnQ0FBZ0MsS0FBSyxlQUFlLDZCQUE2Qiw2QkFBNkIsNEJBQTRCLEtBQUs7O0FBRXZPOzs7Ozs7Ozs7Ozs7QUNQQTtBQUNBOzs7QUFHQTtBQUNBLGlDQUFrQyx5QkFBeUIsbUJBQW1CLGdDQUFnQyxRQUFRLHNCQUFzQixrQkFBa0IsbUJBQW1CLHlCQUF5QixxQkFBcUIsUUFBUTs7QUFFdk87Ozs7Ozs7Ozs7OztBQ1BBO0FBQ0E7OztBQUdBO0FBQ0EsZ0NBQWlDLDZCQUE2QixvQkFBb0IsS0FBSzs7QUFFdkY7Ozs7Ozs7Ozs7Ozs7QUNOQTs7QUFFQTs7QUFFQTtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBLEVBQUU7O0FBRUYsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVDQTtDQUVBOztJQUVxQkEsSzs7Ozs7QUFDbkIsaUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsK0VBQU1BLEtBQU47O0FBRGlCLDBGQUlMLFVBQUFDLElBQUk7QUFBQSxhQUFJLFVBQUFDLEdBQUcsRUFBSTtBQUMzQixZQUFN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RXRCLEtBQUssR0FBRyxDQUFSLElBQWFvRSxnQkFBZ0IsQ0FBQzdCLEtBQWpCLENBQXVCdkMsS0FBSyxHQUFHLENBQS9CLEVBQWtDMUIsSUFBbEMsS0FBMkMscURBQVUsQ0FBQ2dELElBRjNCLENBQWpCO0FBQUEsU0FBNUIsQ0FEQSxDQUFMO0FBS0Q7QUFDRjs7QUFDRCxRQUFJbkMsS0FBSixFQUFXO0FBQUVBLFdBQUssQ0FBQ2IsSUFBTixHQUFhQSxJQUFiO0FBQW9COztBQUNqQyxXQUFPYSxLQUFQO0FBQ0QsR0F0TXFDOztBQUNwQyxPQUFLYixJQUFMLEdBQVlBLEtBQVo7QUFDQSxPQUFLakIsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxPQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLE9BQUswRSxNQUFMLEdBQWMsRUFBZDtBQUNELEMiLCJmaWxlIjoiY29tbW9ucy5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5ib2FyZCB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QyYWI4ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmdyaWQge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxufVxcclxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmNoZXNzIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIC8qIGJveC1zaXppbmc6IGJvcmRlci1ib3g7ICovXFxyXFxufVxcclxcblxcclxcbi5jaGVzc19pbm5lciB7XFxyXFxuICB3aWR0aDogMzBweDtcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIC8qIG1hcmdpbjogNXB4OyAqL1xcclxcbn1cXHJcXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5nYW1lIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbn1cXHJcXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9Cb2FyZC5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vQm9hcmQuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9Cb2FyZC5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG4vLyBpbXBvcnQgR3JpZCBmcm9tICcuLi9HcmlkJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvYXJkIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ2xpY2sgPSBzaWRlID0+IGV2dCA9PiB7XHJcbiAgICBjb25zdCBwYWdlWCA9IGV2dC5wYWdlWCxcclxuICAgICAgcGFnZVkgPSBldnQucGFnZVk7XHJcbiAgICBjb25zdCB4ID0gTWF0aC5mbG9vcigocGFnZVggLSAyMCArIHNpZGUgLyAyKSAvIHNpZGUpLFxyXG4gICAgICB5ID0gTWF0aC5mbG9vcigocGFnZVkgLSAyMCArIHNpZGUgLyAyKSAvIHNpZGUpO1xyXG4gICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgdGhpcy5wcm9wcy5vbkNsaWNrKHsgeCwgeSB9LCBldnQpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGdldEdyaWRzID0gKHJvd0NvdW50LCBjb2xDb3VudCkgPT4ge1xyXG4gICAgY29uc3QgeyBzaWRlIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgY29uc3QgZ3JpZHMgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93Q291bnQ7IGkrKykge1xyXG4gICAgICBjb25zdCBob3Jpem9uID0gW107XHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY29sQ291bnQ7IGorKykge1xyXG4gICAgICAgIGhvcml6b24ucHVzaChcclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAga2V5PXtgJHtpfV8ke2p9YH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZFwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBgJHtzaWRlfXB4YCwgaGVpZ2h0OiBgJHtzaWRlfXB4YCB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIGdyaWRzLnB1c2goaG9yaXpvbik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZ3JpZHM7XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBzaWRlLCByb3dDb3VudCwgY29sQ291bnQsIGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgY29uc3Qgc3R5bGUgPSB7XHJcbiAgICAgIHdpZHRoOiBgJHtjb2xDb3VudCAqIHNpZGV9cHhgLFxyXG4gICAgICBoZWlnaHQ6IGAke2NvbENvdW50ICogc2lkZX1weGBcclxuICAgIH07XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvYXJkXCIgc3R5bGU9e3N0eWxlfSBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrKHNpZGUpfT5cclxuICAgICAgICB7dGhpcy5nZXRHcmlkcyhyb3dDb3VudCwgY29sQ291bnQpfVxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuQm9hcmQucHJvcFR5cGVzID0ge1xyXG4gIHNpZGU6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgcm93Q291bnQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgY29sQ291bnQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmNcclxufTtcclxuIiwiaW1wb3J0IEJvYXJkIGZyb20gJy4vQm9hcmQnO1xyXG5pbXBvcnQgJy4vQm9hcmQuY3NzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJvYXJkOyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL0NoZXNzLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9DaGVzcy5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL0NoZXNzLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hlc3MgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IHR5cGUsIHNpZGUsIHgsIHkgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCBzdHlsZSA9IHtcclxuICAgICAgbGVmdDogYCR7eCAqIHNpZGUgLSBzaWRlIC8gMn1weGAsXHJcbiAgICAgIHRvcDogYCR7eSAqIHNpZGUgLSBzaWRlIC8gMn1weGAsXHJcbiAgICAgIHdpZHRoOiBgJHtzaWRlfXB4YCxcclxuICAgICAgaGVpZ2h0OiBgJHtzaWRlfXB4YFxyXG4gICAgfTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hlc3NcIiBzdHlsZT17c3R5bGV9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hlc3NfaW5uZXJcIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IHR5cGUgfX0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuQ2hlc3MucHJvcFR5cGVzID0ge1xyXG4gIHR5cGU6IFByb3BUeXBlcy5vbmVPZihbXCJibGFja1wiLCBcIndoaXRlXCJdKSxcclxuICBzaWRlOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gIHg6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgeTogUHJvcFR5cGVzLm51bWJlclxyXG59O1xyXG4iLCJpbXBvcnQgQ2hlc3MgZnJvbSAnLi9DaGVzcyc7XHJcbmltcG9ydCAnLi9DaGVzcy5jc3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hlc3M7IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vR2FtZS5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vR2FtZS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL0dhbWUuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IFJlYWN0LCB7XHJcbiAgQ29tcG9uZW50XHJcbn0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQm9hcmQgZnJvbSAnLi4vY29tcG9uZW50L0JvYXJkJztcclxuaW1wb3J0IENoZXNzIGZyb20gJy4uL2NvbXBvbmVudC9DaGVzcyc7XHJcbmltcG9ydCBFbmdpbmUgZnJvbSAnLi4vbG9naWMvRW5naW5lJztcclxuaW1wb3J0IHtcclxuICBDSEVTU19UWVBFXHJcbn0gZnJvbSAnLi4vbG9naWMvQ29uc3RhbnRzJztcclxuaW1wb3J0ICcuL0dhbWUuY3NzJztcclxuXHJcbmNvbnN0IFNJREUgPSA0MCxcclxuICBST1dfQ09VTlQgPSAxNSxcclxuICBDT0xfQ09VTlQgPSAxNTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLmVuZ2luZSA9IG5ldyBFbmdpbmUoe1xyXG4gICAgICByb3dDb3VudDogUk9XX0NPVU5ULFxyXG4gICAgICBjb2xDb3VudDogQ09MX0NPVU5ULFxyXG4gICAgICBlbmdpbmVUeXBlOiBDSEVTU19UWVBFLldISVRFXHJcbiAgICB9KTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGNoZXNzZXM6IFtdLFxyXG4gICAgICBlbmFibGU6IHRydWUsXHJcbiAgICAgIGlzV2luOiBmYWxzZSxcclxuICAgICAgd2lubmVyVHlwZTogbnVsbFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGFkZENoZXNzID0gKHtcclxuICAgIHgsXHJcbiAgICB5XHJcbiAgfSkgPT4ge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBjaGVzc2VzXHJcbiAgICB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGNvbnN0IGV4aXN0Q2hlc3MgPSBjaGVzc2VzLmZpbHRlcihjaGVzcyA9PiB4ID09PSBjaGVzcy54ICYmIHkgPT09IGNoZXNzLnkpO1xyXG4gICAgaWYgKGV4aXN0Q2hlc3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIGNvbnN0IG5ld0NoZXNzZXMgPSBbLi4uY2hlc3Nlcywge1xyXG4gICAgICAgIHR5cGU6IENIRVNTX1RZUEUuQkxBQ0ssXHJcbiAgICAgICAgeCxcclxuICAgICAgICB5XHJcbiAgICAgIH1dO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBjaGVzc2VzOiBuZXdDaGVzc2VzLFxyXG4gICAgICAgIGVuYWJsZTogZmFsc2VcclxuICAgICAgfSwgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgIGlzV2luLFxyXG4gICAgICAgICAgd2lubmVyVHlwZSxcclxuICAgICAgICAgIG5leHRDaGVzc1xyXG4gICAgICAgIH0gPSB0aGlzLmVuZ2luZS5uZXh0KG5ld0NoZXNzZXMsIHtcclxuICAgICAgICAgIHR5cGU6IENIRVNTX1RZUEUuQkxBQ0ssXHJcbiAgICAgICAgICB4LFxyXG4gICAgICAgICAgeVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChpc1dpbikge1xyXG5cclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpc1dpbixcclxuICAgICAgICAgICAgZW5hYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgd2lubmVyVHlwZVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBpZiAobmV4dENoZXNzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgIGNoZXNzZXM6IFsuLi5uZXdDaGVzc2VzLCBuZXh0Q2hlc3NdXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgY2hlc3NlczogWy4uLm5ld0NoZXNzZXMsIG5leHRDaGVzc10sXHJcbiAgICAgICAgICAgIGVuYWJsZTogdHJ1ZVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgZ2V0Q2hlc3MgPSAoe1xyXG4gICAgc2lkZSxcclxuICAgIHJvd0NvdW50LFxyXG4gICAgY29sQ291bnRcclxuICB9LCBjaGVzc2VzKSA9PiB7XHJcbiAgICBjb25zdCByZXMgPSBbXTtcclxuICAgIGNoZXNzZXMuZm9yRWFjaCgoe1xyXG4gICAgICB0eXBlLFxyXG4gICAgICB4LFxyXG4gICAgICB5XHJcbiAgICB9LCBpbmRleCkgPT4ge1xyXG4gICAgICByZXMucHVzaCg8Q2hlc3Mga2V5PXtpbmRleH0gdHlwZT17dHlwZX0gc2lkZT17c2lkZX0geD17eH0geT17eX0gLz4pO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcmVzO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IGJvYXJkUHJvcHMgPSB7XHJcbiAgICAgIHNpZGU6IFNJREUsXHJcbiAgICAgIHJvd0NvdW50OiBST1dfQ09VTlQsXHJcbiAgICAgIGNvbENvdW50OiBDT0xfQ09VTlRcclxuICAgIH07XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGNoZXNzZXMsXHJcbiAgICAgIGVuYWJsZSxcclxuICAgICAgaXNXaW4sXHJcbiAgICAgIHdpbm5lclR5cGVcclxuICAgIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgaWYgKGVuYWJsZSkge1xyXG4gICAgICBPYmplY3QuYXNzaWduKGJvYXJkUHJvcHMsIHtcclxuICAgICAgICBvbkNsaWNrOiB0aGlzLmFkZENoZXNzXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJnYW1lXCIgPlxyXG4gICAgICAgIHtpc1dpbiA/IGB3aW5uZXI6JHt3aW5uZXJUeXBlID09PSBDSEVTU19UWVBFLkJMQUNLID8gJ2JsYWNrJyA6ICd3aGl0ZSd9YCA6IG51bGx9XHJcbiAgICAgICAgPEJvYXJkIHsuLi5ib2FyZFByb3BzfSA+XHJcbiAgICAgICAgICB7dGhpcy5nZXRDaGVzcyhib2FyZFByb3BzLCBjaGVzc2VzKX1cclxuICAgICAgICA8L0JvYXJkPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5pbXBvcnQgR2FtZSBmcm9tIFwiLi9jb250YWluZXIvR2FtZVwiO1xyXG5cclxuZnVuY3Rpb24gQXBwKCkge1xyXG4gIHJldHVybiA8R2FtZSAvPjtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyKCkge1xyXG4gIFJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhaW5lclwiKSk7XHJcbn1cclxuXHJcbmlmIChtb2R1bGUuaG90KSB7XHJcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2NvbnRhaW5lci9HYW1lXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgcmVuZGVyKCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbnJlbmRlcigpO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDaGVzcyB7XHJcbiAgY29uc3RydWN0b3IodHlwZSwgeCwgeSkge1xyXG4gICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgIHRoaXMueCA9IHg7XHJcbiAgICB0aGlzLnkgPSB5O1xyXG4gIH1cclxufVxyXG4iLCJjb25zdCBESVJFQ1RJT04gPSB7XHJcbiAgSE9SSVpPTlRBTDogMCxcclxuICBWRVJUSUNBTDogMSxcclxuICBMRUZUX0RJQUdPTkFMOiAyLFxyXG4gIFJJR0hUX0RJQUdPTkFMOiAzXHJcbn07XHJcblxyXG5jb25zdCBDSEVTU19UWVBFID0ge1xyXG4gIFdISVRFOiAnd2hpdGUnLFxyXG4gIEJMQUNLOiAnYmxhY2snLFxyXG4gIE5PTkU6ICdub25lJ1xyXG59O1xyXG5cclxuY29uc3QgQ0FMQ19QT1NJVElPTiA9IHt9O1xyXG5DQUxDX1BPU0lUSU9OW0RJUkVDVElPTi5IT1JJWk9OVEFMXSA9IHtcclxuICBwcmV2Q2FsY1g6IHggPT4geCAtIDEsXHJcbiAgcHJldkNhbGNZOiB5ID0+IHksXHJcbiAgbmV4dENhbGNYOiB4ID0+IHggKyAxLFxyXG4gIG5leHRDYWxjWTogeSA9PiB5XHJcbn07XHJcbkNBTENfUE9TSVRJT05bRElSRUNUSU9OLlZFUlRJQ0FMXSA9IHtcclxuICBwcmV2Q2FsY1g6IHggPT4geCxcclxuICBwcmV2Q2FsY1k6IHkgPT4geSAtIDEsXHJcbiAgbmV4dENhbGNYOiB4ID0+IHgsXHJcbiAgbmV4dENhbGNZOiB5ID0+IHkgKyAxXHJcbn07XHJcbkNBTENfUE9TSVRJT05bRElSRUNUSU9OLkxFRlRfRElBR09OQUxdID0ge1xyXG4gIHByZXZDYWxjWDogeCA9PiB4IC0gMSxcclxuICBwcmV2Q2FsY1k6IHkgPT4geSAtIDEsXHJcbiAgbmV4dENhbGNYOiB4ID0+IHggKyAxLFxyXG4gIG5leHRDYWxjWTogeSA9PiB5ICsgMVxyXG59O1xyXG5DQUxDX1BPU0lUSU9OW0RJUkVDVElPTi5SSUdIVF9ESUFHT05BTF0gPSB7XHJcbiAgcHJldkNhbGNYOiB4ID0+IHggKyAxLFxyXG4gIHByZXZDYWxjWTogeSA9PiB5IC0gMSxcclxuICBuZXh0Q2FsY1g6IHggPT4geCAtIDEsXHJcbiAgbmV4dENhbGNZOiB5ID0+IHkgKyAxXHJcbn07XHJcblxyXG5leHBvcnQge1xyXG4gIERJUkVDVElPTixcclxuICBDSEVTU19UWVBFLFxyXG4gIENBTENfUE9TSVRJT05cclxufTsiLCJpbXBvcnQge1xyXG4gIENIRVNTX1RZUEVcclxufSBmcm9tICcuL0NvbnN0YW50cyc7XHJcbmltcG9ydCBHcm91cExpc3QgZnJvbSAnLi9Hcm91cExpc3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW5naW5lIHtcclxuICBjb25zdHJ1Y3Rvcih7XHJcbiAgICByb3dDb3VudCxcclxuICAgIGNvbENvdW50LFxyXG4gICAgZW5naW5lVHlwZVxyXG4gIH0pIHtcclxuICAgIHRoaXMucm93Q291bnQgPSByb3dDb3VudDtcclxuICAgIHRoaXMuY29sQ291bnQgPSBjb2xDb3VudDtcclxuICAgIHRoaXMuZW5naW5lVHlwZSA9IGVuZ2luZVR5cGU7XHJcbiAgICB0aGlzLm9wcG9zaXRlVHlwZSA9IGVuZ2luZVR5cGUgPT09IENIRVNTX1RZUEUuV0hJVEUgPyBDSEVTU19UWVBFLkJMQUNLIDogQ0hFU1NfVFlQRS5XSElURTtcclxuICAgIHRoaXMuZ3JvdXBzID0ge307XHJcbiAgICB0aGlzLmdyb3Vwc1tDSEVTU19UWVBFLldISVRFXSA9IG5ldyBHcm91cExpc3QoQ0hFU1NfVFlQRS5XSElURSwgcm93Q291bnQsIGNvbENvdW50KTtcclxuICAgIHRoaXMuZ3JvdXBzW0NIRVNTX1RZUEUuQkxBQ0tdID0gbmV3IEdyb3VwTGlzdChDSEVTU19UWVBFLkJMQUNLLCByb3dDb3VudCwgY29sQ291bnQpO1xyXG4gIH1cclxuXHJcbiAgbmV4dCA9IChjaGVzc2VzLCBjdXJyZW50Q2hlc3MpID0+IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHtcclxuICAgICAgaXNXaW46IGZhbHNlLFxyXG4gICAgICB3aW5uZXJUeXBlOiBDSEVTU19UWVBFLk5PTkUsXHJcbiAgICAgIG5leHRDaGVzczogbnVsbFxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLm9wZXJhdGlvbkFmdGVyQ2hlc3NQbGF5ZWQocmVzdWx0LCBjaGVzc2VzLCBjdXJyZW50Q2hlc3MpO1xyXG4gICAgaWYgKHJlc3VsdC5pc1dpbikge1xyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG5leHRDaGVzcyA9IHRoaXMuZ3JvdXBzW3RoaXMuZW5naW5lVHlwZV0uZ2V0TmV4dENoZXNzKHRoaXMuZ3JvdXBzW3RoaXMub3Bwb3NpdGVUeXBlXSwgdGhpcy5lbmdpbmVUeXBlKTtcclxuXHJcbiAgICByZXN1bHQubmV4dENoZXNzID0gbmV4dENoZXNzO1xyXG4gICAgdGhpcy5vcGVyYXRpb25BZnRlckNoZXNzUGxheWVkKHJlc3VsdCwgY2hlc3NlcywgbmV4dENoZXNzKTtcclxuICAgIGlmIChyZXN1bHQuaXNXaW4pIHtcclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgb3BlcmF0aW9uQWZ0ZXJDaGVzc1BsYXllZCA9IChyZXN1bHQsIGNoZXNzZXMsIGNoZXNzKSA9PiB7XHJcbiAgICBpZiAodGhpcy5ncm91cHNbY2hlc3MudHlwZV0uaXNXaW4oY2hlc3MpKSB7XHJcbiAgICAgIHJlc3VsdC5pc1dpbiA9IHRydWU7XHJcbiAgICAgIHJlc3VsdC53aW5uZXJUeXBlID0gY2hlc3MudHlwZTtcclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIHRoaXMuZ3JvdXBzW0NIRVNTX1RZUEUuV0hJVEVdLmRlbGV0ZUdyb3VwQnlQb3NpdGlvbihjaGVzcyk7XHJcbiAgICB0aGlzLmdyb3Vwc1tDSEVTU19UWVBFLkJMQUNLXS5kZWxldGVHcm91cEJ5UG9zaXRpb24oY2hlc3MpO1xyXG4gICAgdGhpcy5ncm91cHNbY2hlc3MudHlwZV0uYWRkR3JvdXBCeVBvc2l0aW9uKGNoZXNzZXMsIGNoZXNzKTtcclxuICB9XHJcblxyXG59IiwiaW1wb3J0IHtcclxuICBDSEVTU19UWVBFXHJcbn0gZnJvbSAnLi9Db25zdGFudHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JvdXAge1xyXG4gIGNvbnN0cnVjdG9yKGRpcmVjdGlvbiwgZ3JvdXAgPSBbXSkge1xyXG4gICAgdGhpcy5yZWFsQ291bnQgPSAwO1xyXG4gICAgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XHJcbiAgICB0aGlzLmdyb3VwID0gZ3JvdXA7XHJcbiAgfVxyXG5cclxuICBhZGQgPSAoY2hlc3MpID0+IHtcclxuICAgIHRoaXMuZ3JvdXAucHVzaChjaGVzcyk7XHJcbiAgICBpZiAoY2hlc3MudHlwZSAhPT0gQ0hFU1NfVFlQRS5OT05FKSB7XHJcbiAgICAgIHRoaXMucmVhbENvdW50Kys7XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiaW1wb3J0IHtcclxuICBESVJFQ1RJT04sXHJcbiAgQ0hFU1NfVFlQRSxcclxuICBDQUxDX1BPU0lUSU9OXHJcbn0gZnJvbSAnLi9Db25zdGFudHMnO1xyXG5pbXBvcnQgR3JvdXAgZnJvbSAnLi9Hcm91cCc7XHJcbmltcG9ydCBDaGVzcyBmcm9tICcuL0NoZXNzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyb3VwTGlzdCB7XHJcbiAgY29uc3RydWN0b3IodHlwZSwgcm93Q291bnQsIGNvbENvdW50KSB7XHJcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgdGhpcy5yb3dDb3VudCA9IHJvd0NvdW50O1xyXG4gICAgdGhpcy5jb2xDb3VudCA9IGNvbENvdW50O1xyXG4gICAgdGhpcy5ncm91cHMgPSBbXTtcclxuICB9XHJcblxyXG4gIGlzV2luID0gKHtcclxuICAgIHgsXHJcbiAgICB5XHJcbiAgfSkgPT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuZ3JvdXBzLnNvbWUoKHtcclxuICAgICAgcmVhbENvdW50LFxyXG4gICAgICBncm91cFxyXG4gICAgfSkgPT4gcmVhbENvdW50ID09IDQgJiYgZ3JvdXAuc29tZSgoY2hlc3MgPT5cclxuICAgICAgY2hlc3MueCA9PT0geCAmJiBjaGVzcy55ID09PSB5ICYmIGNoZXNzLnR5cGUgPT09IENIRVNTX1RZUEUuTk9ORVxyXG4gICAgKSkpO1xyXG4gIH07XHJcblxyXG4gIGRlbGV0ZUdyb3VwQnlQb3NpdGlvbiA9ICh7XHJcbiAgICB4LFxyXG4gICAgeVxyXG4gIH0pID0+IHtcclxuICAgIHRoaXMuZ3JvdXBzID0gdGhpcy5ncm91cHMuZmlsdGVyKCh7XHJcbiAgICAgIGdyb3VwXHJcbiAgICB9KSA9PiBncm91cC5maWx0ZXIoY2hlc3MgPT4gY2hlc3MudHlwZSA9PT0gQ0hFU1NfVFlQRS5OT05FKS5yZWR1Y2UoKChhY2N1LCBjaGVzcykgPT5cclxuICAgICAgYWNjdSAmJiAhKGNoZXNzLnggPT09IHggJiYgY2hlc3MueSA9PT0geSlcclxuICAgICksIHRydWUpKTtcclxuICB9XHJcblxyXG4gIGFkZEdyb3VwQnlQb3NpdGlvbiA9IChjaGVzc2VzLCB7XHJcbiAgICB4LFxyXG4gICAgeSxcclxuICAgIHR5cGVcclxuICB9KSA9PiB7XHJcbiAgICBPYmplY3Qua2V5cyhESVJFQ1RJT04pLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgY29uc3Qge1xyXG4gICAgICAgIHByZXZDYWxjWCxcclxuICAgICAgICBwcmV2Q2FsY1ksXHJcbiAgICAgICAgbmV4dENhbGNYLFxyXG4gICAgICAgIG5leHRDYWxjWVxyXG4gICAgICB9ID0gQ0FMQ19QT1NJVElPTltESVJFQ1RJT05ba2V5XV07XHJcbiAgICAgIHRoaXMuYWRkR3JvdXBzQnlEaXJlY3Rpb24oY2hlc3Nlcywge1xyXG4gICAgICAgIHgsXHJcbiAgICAgICAgeSxcclxuICAgICAgICB0eXBlXHJcbiAgICAgIH0sIHByZXZDYWxjWCwgcHJldkNhbGNZLCBuZXh0Q2FsY1gsIG5leHRDYWxjWSwga2V5KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYWRkR3JvdXBzQnlEaXJlY3Rpb24gPSAoY2hlc3Nlcywge1xyXG4gICAgeCxcclxuICAgIHksXHJcbiAgICB0eXBlXHJcbiAgfSwgcHJldkNhbGNYLCBwcmV2Q2FsY1ksIG5leHRDYWxjWCwgbmV4dENhbGNZLCBkaXJlY3Rpb24pID0+IHtcclxuICAgIGNvbnN0IGNvbWJpbmFibGVDaGVzc2VzID0gW25ldyBDaGVzcyh0eXBlLCB4LCB5KV07XHJcbiAgICB0aGlzLmFkZENvbWJpbmFibGVDaGVzc2VzKGNvbWJpbmFibGVDaGVzc2VzLCBjaGVzc2VzLCB7XHJcbiAgICAgIHgsXHJcbiAgICAgIHksXHJcbiAgICAgIHR5cGVcclxuICAgIH0sIHByZXZDYWxjWCwgcHJldkNhbGNZLCB0cnVlKTtcclxuICAgIHRoaXMuYWRkQ29tYmluYWJsZUNoZXNzZXMoY29tYmluYWJsZUNoZXNzZXMsIGNoZXNzZXMsIHtcclxuICAgICAgeCxcclxuICAgICAgeSxcclxuICAgICAgdHlwZVxyXG4gICAgfSwgbmV4dENhbGNYLCBuZXh0Q2FsY1ksIGZhbHNlKTtcclxuICAgIGxldCBsZW5ndGggPSBjb21iaW5hYmxlQ2hlc3Nlcy5sZW5ndGg7XHJcbiAgICBpZiAobGVuZ3RoID49IDUpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDAsIGdyb3VwQ291bnQgPSBsZW5ndGggLSA0OyBpIDwgZ3JvdXBDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGdyb3VwID0gbmV3IEdyb3VwKGRpcmVjdGlvbik7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IGk7IGogPCBpICsgNTsgaisrKSB7XHJcbiAgICAgICAgICBncm91cC5hZGQoY29tYmluYWJsZUNoZXNzZXNbal0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmdyb3Vwcy5wdXNoKGdyb3VwKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmdyb3VwcyA9IHRoaXMuZ3JvdXBzLmZpbHRlcigoeyByZWFsQ291bnQgfSkgPT4gcmVhbENvdW50ID4gMCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhZGRDb21iaW5hYmxlQ2hlc3NlcyA9IChjb21iaW5hYmxlQ2hlc3NlcywgY2hlc3Nlcywge1xyXG4gICAgeCxcclxuICAgIHksXHJcbiAgICB0eXBlXHJcbiAgfSwgeENhbGMsIHlDYWxjLCBpc0JlZm9yZSkgPT4ge1xyXG4gICAgbGV0IGNhbkNvbnRhaW4gPSB0cnVlO1xyXG4gICAgd2hpbGUgKGNhbkNvbnRhaW4pIHtcclxuICAgICAgeCA9IHhDYWxjKHgpO1xyXG4gICAgICB5ID0geUNhbGMoeSk7XHJcbiAgICAgIGNhbkNvbnRhaW4gPSB0aGlzLmNhbkNvbnRhaW4oY2hlc3Nlcywge1xyXG4gICAgICAgIHgsXHJcbiAgICAgICAgeSxcclxuICAgICAgICB0eXBlXHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAoY2FuQ29udGFpbikge1xyXG4gICAgICAgIGxldCBleGlzdCA9IGNoZXNzZXMuc29tZShjaGVzcyA9PiBjaGVzcy54ID09PSB4ICYmIGNoZXNzLnkgPT09IHkpO1xyXG4gICAgICAgIGNvbnN0IGNoZXNzT2JqID0gbmV3IENoZXNzKGV4aXN0ID8gdHlwZSA6IENIRVNTX1RZUEUuTk9ORSwgeCwgeSk7XHJcbiAgICAgICAgaXNCZWZvcmUgPyBjb21iaW5hYmxlQ2hlc3Nlcy5zcGxpY2UoMCwgMCwgY2hlc3NPYmopIDogY29tYmluYWJsZUNoZXNzZXMucHVzaChjaGVzc09iaik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjYW5Db250YWluID0gKGNoZXNzZXMsIHtcclxuICAgIHgsXHJcbiAgICB5LFxyXG4gICAgdHlwZVxyXG4gIH0pID0+IHtcclxuICAgIGlmICh4IDwgMCB8fCB4ID4gdGhpcy5jb2xDb3VudCB8fCB5IDwgMCB8fCB5ID4gdGhpcy5yb3dDb3VudCkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBsZXQgZXhpc3QgPSBjaGVzc2VzLnNvbWUoY2hlc3MgPT4gY2hlc3MueCA9PT0geCAmJiBjaGVzcy55ID09PSB5KTtcclxuICAgIGlmICghZXhpc3QpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBleGlzdCA9IGNoZXNzZXMuc29tZShjaGVzcyA9PiBjaGVzcy54ID09PSB4ICYmIGNoZXNzLnkgPT09IHkgJiYgY2hlc3MudHlwZSA9PT0gdHlwZSk7XHJcbiAgICByZXR1cm4gZXhpc3Q7XHJcbiAgfVxyXG5cclxuICBzb3J0ID0gKGEsIGIpID0+IChhLnkgLSBiLnkpID09PSAwID8gYS54IC0gYi54IDogYS55IC0gYi55O1xyXG5cclxuICBnZXROZXh0Q2hlc3MgPSAob3Bwb3NpdGVHcm91cHMsIHR5cGUpID0+IHtcclxuICAgIGxldCBjaGVzcyA9IG51bGw7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDQ7IGkgPiAwOyBpLS0pIHtcclxuICAgICAgY2hlc3MgPSB0aGlzLmdldFBvc3NpYmxlQ2hlc3NJbkdyb3VwKG9wcG9zaXRlR3JvdXBzLCBpLCB0eXBlKTtcclxuICAgICAgaWYgKGNoZXNzKSB7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICghY2hlc3MpIHtcclxuICAgICAgbGV0IHggPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiB0aGlzLmNvbENvdW50KTtcclxuICAgICAgbGV0IHkgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiB0aGlzLnJvd0NvdW50KTtcclxuICAgICAgY2hlc3MgPSB7XHJcbiAgICAgICAgeCxcclxuICAgICAgICB5LFxyXG4gICAgICAgIHR5cGVcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY2hlc3M7XHJcbiAgfVxyXG5cclxuICBnZXRQb3NzaWJsZUNoZXNzSW5Hcm91cCA9IChvcHBvc2l0ZUdyb3VwcywgcmVhbENvdW50LCB0eXBlKSA9PiB7XHJcbiAgICBsZXQgY2hlc3MgPSBudWxsO1xyXG5cclxuICAgIGlmIChyZWFsQ291bnQgIT09IDMpIHtcclxuICAgICAgY2hlc3MgPSB0aGlzLmZpbmRDb21tb25DaGVzcyhvcHBvc2l0ZUdyb3VwcywgcmVhbENvdW50LCB0eXBlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxldCBzdWJHcm91cCA9IHRoaXMuZ3JvdXBzLmZpbmQoZ3JvdXAgPT4gZ3JvdXAucmVhbENvdW50ID09PSByZWFsQ291bnRcclxuICAgICAgICAmJiBncm91cC5ncm91cFswXS50eXBlID09PSBDSEVTU19UWVBFLk5PTkVcclxuICAgICAgICAmJiBncm91cC5ncm91cFs0XS50eXBlID09PSBDSEVTU19UWVBFLk5PTkUpO1xyXG4gICAgICBpZiAoc3ViR3JvdXApIHtcclxuICAgICAgICBjaGVzcyA9IHtcclxuICAgICAgICAgIC4uLnN1Ykdyb3VwLmdyb3VwWzBdXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCFjaGVzcykge1xyXG4gICAgICAgIGxldCBvcHBvc2l0ZVN1Ykdyb3VwID0gb3Bwb3NpdGVHcm91cHMuZ3JvdXBzLmZpbmQoZ3JvdXAgPT4gZ3JvdXAucmVhbENvdW50ID09PSByZWFsQ291bnRcclxuICAgICAgICAgICYmIGdyb3VwLmdyb3VwWzBdLnR5cGUgPT09IENIRVNTX1RZUEUuTk9ORVxyXG4gICAgICAgICAgJiYgZ3JvdXAuZ3JvdXBbNF0udHlwZSA9PT0gQ0hFU1NfVFlQRS5OT05FKTtcclxuICAgICAgICBpZiAob3Bwb3NpdGVTdWJHcm91cCkge1xyXG4gICAgICAgICAgY2hlc3MgPSB7XHJcbiAgICAgICAgICAgIC4uLm9wcG9zaXRlU3ViR3JvdXAuZ3JvdXBbMF1cclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoIWNoZXNzKSB7XHJcbiAgICAgICAgY2hlc3MgPSB0aGlzLmZpbmRDb21tb25DaGVzcyhvcHBvc2l0ZUdyb3VwcywgcmVhbENvdW50LCB0eXBlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGNoZXNzKSB7IGNoZXNzLnR5cGUgPSB0eXBlOyB9XHJcbiAgICByZXR1cm4gY2hlc3M7XHJcbiAgfVxyXG5cclxuICBmaW5kQ29tbW9uQ2hlc3MgPSAob3Bwb3NpdGVHcm91cHMsIHJlYWxDb3VudCwgdHlwZSkgPT4ge1xyXG4gICAgbGV0IGNoZXNzID0gbnVsbDtcclxuICAgIGxldCBzdWJHcm91cCA9IHRoaXMuZ3JvdXBzLmZpbmQoZ3JvdXAgPT4gZ3JvdXAucmVhbENvdW50ID09PSByZWFsQ291bnQpO1xyXG4gICAgaWYgKHN1Ykdyb3VwKSB7XHJcbiAgICAgIGNoZXNzID0ge1xyXG4gICAgICAgIC4uLnN1Ykdyb3VwLmdyb3VwLmZpbmQoKGl0ZW0sIGluZGV4KSA9PiBpdGVtLnR5cGUgPT09IENIRVNTX1RZUEUuTk9ORVxyXG4gICAgICAgICAgJiYgKChpbmRleCA8IDQgJiYgc3ViR3JvdXAuZ3JvdXBbaW5kZXggKyAxXS50eXBlICE9PSBDSEVTU19UWVBFLk5PTkUpXHJcbiAgICAgICAgICAgIHx8IChpbmRleCA+IDAgJiYgc3ViR3JvdXAuZ3JvdXBbaW5kZXggLSAxXS50eXBlICE9PSBDSEVTU19UWVBFLk5PTkUpKSlcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWNoZXNzKSB7XHJcbiAgICAgIGxldCBvcHBvc2l0ZVN1Ykdyb3VwID0gb3Bwb3NpdGVHcm91cHMuZ3JvdXBzLmZpbmQoZ3JvdXAgPT4gZ3JvdXAucmVhbENvdW50ID09PSByZWFsQ291bnQpO1xyXG4gICAgICBpZiAob3Bwb3NpdGVTdWJHcm91cCkge1xyXG4gICAgICAgIGNoZXNzID0ge1xyXG4gICAgICAgICAgLi4ub3Bwb3NpdGVTdWJHcm91cC5ncm91cC5maW5kKChpdGVtLCBpbmRleCkgPT4gaXRlbS50eXBlID09PSBDSEVTU19UWVBFLk5PTkVcclxuICAgICAgICAgICAgJiYgKChpbmRleCA8IDQgJiYgb3Bwb3NpdGVTdWJHcm91cC5ncm91cFtpbmRleCArIDFdLnR5cGUgIT09IENIRVNTX1RZUEUuTk9ORSlcclxuICAgICAgICAgICAgICB8fCAoaW5kZXggPiAwICYmIG9wcG9zaXRlU3ViR3JvdXAuZ3JvdXBbaW5kZXggLSAxXS50eXBlICE9PSBDSEVTU19UWVBFLk5PTkUpKSlcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoY2hlc3MpIHsgY2hlc3MudHlwZSA9IHR5cGU7IH1cclxuICAgIHJldHVybiBjaGVzcztcclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9