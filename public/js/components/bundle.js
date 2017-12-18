webpackJsonp([0],{

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(20);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function Home() {
  return _react2.default.createElement(
    "section",
    { id: "home" },
    _react2.default.createElement(
      "div",
      { className: "container" },
      _react2.default.createElement(
        "div",
        { className: "col-md-6" },
        _react2.default.createElement("img", { className: "bitcoin-logo", src: "/img/bitcoin-logo.png", alt: "bitcoin-logo" })
      ),
      _react2.default.createElement(
        "div",
        { className: "col-md-6" },
        _react2.default.createElement(
          "h2",
          null,
          "Enter Transaction"
        ),
        _react2.default.createElement(
          "label",
          { htmlFor: "amount" },
          "Crypto amount"
        ),
        _react2.default.createElement("input", { type: "text", name: "amount", id: "amount" }),
        _react2.default.createElement(
          "label",
          { htmlFor: "date" },
          "Date"
        ),
        _react2.default.createElement("input", { type: "text", name: "date", id: "date" }),
        _react2.default.createElement(
          "button",
          { type: "submit" },
          "Check Profits"
        )
      )
    )
  );
};

exports.default = Home;

/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(20);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Results = function Results() {
  return _react2.default.createElement(
    "section",
    { id: "results" },
    _react2.default.createElement(
      "div",
      { className: "container" },
      _react2.default.createElement(
        "div",
        { className: "col-md-12" },
        _react2.default.createElement("div", { className: "ads" })
      ),
      _react2.default.createElement(
        "div",
        { className: "col-md-12" },
        _react2.default.createElement(
          "h3",
          null,
          "Your $1200 dollar investment is now "
        ),
        _react2.default.createElement(
          "h1",
          null,
          "$7300"
        ),
        _react2.default.createElement(
          "h4",
          null,
          "You made 400% profit"
        ),
        _react2.default.createElement(
          "a",
          { href: "#", className: "main-btn active" },
          "Create account to keep track of all your records"
        )
      ),
      _react2.default.createElement(
        "div",
        { className: "col-md-12" },
        _react2.default.createElement("div", { className: "ads" })
      )
    )
  );
};

exports.default = Results;

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(20);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(33);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Home = __webpack_require__(96);

var _Home2 = _interopRequireDefault(_Home);

var _Results = __webpack_require__(97);

var _Results2 = _interopRequireDefault(_Results);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      location: 'Home'
    };
    _this.routingSystem = _this.routingSystem.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'routingSystem',
    value: function routingSystem() {
      switch (this.state.location) {
        case 'Home':
          return _react2.default.createElement(_Home2.default, null);
          break;
        case 'Results':
          return _react2.default.createElement(_Results2.default, null);
          break;
        default:
          return _react2.default.createElement(_Home2.default, null);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'header',
            null,
            _react2.default.createElement(
              'div',
              { className: 'logo' },
              'Prypto Profits'
            ),
            _react2.default.createElement(
              'nav',
              { className: 'menu' },
              _react2.default.createElement(
                'a',
                { href: '#', className: 'main-btn' },
                'Register'
              )
            )
          ),
          this.routingSystem()
        )
      );
    }
  }]);

  return App;
}(_react.Component);

_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('app'));

/***/ })

},[99]);