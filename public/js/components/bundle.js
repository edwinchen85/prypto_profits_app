webpackJsonp([0],{

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _reactDatepicker = __webpack_require__(63);

var _reactDatepicker2 = _interopRequireDefault(_reactDatepicker);

var _moment = __webpack_require__(0);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function Home(props) {
  return _react2.default.createElement(
    'section',
    { id: 'home' },
    _react2.default.createElement(
      'div',
      { className: 'container' },
      _react2.default.createElement(
        'div',
        { className: 'col-md-6' },
        _react2.default.createElement('img', { className: 'bitcoin-logo', src: '/img/bitcoin-logo.png', alt: 'bitcoin-logo' })
      ),
      _react2.default.createElement(
        'div',
        { className: 'col-md-6' },
        _react2.default.createElement(
          'h2',
          null,
          'Enter Transaction'
        ),
        _react2.default.createElement(
          'label',
          { htmlFor: 'amount' },
          'Crypto amount'
        ),
        _react2.default.createElement('input', { type: 'text', name: 'amount', id: 'amount',
          onChange: props.onInputChange,
          value: props.globalState.cryptoAmount }),
        _react2.default.createElement(
          'label',
          { htmlFor: 'date' },
          'Date'
        ),
        _react2.default.createElement(_reactDatepicker2.default, { selected: props.globalState.date, onChange: props.handleDateChange }),
        _react2.default.createElement(
          'button',
          { type: 'submit', onClick: props.apiCall },
          'Check Profits'
        )
      )
    )
  );
};

exports.default = Home;

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Results = function Results(props) {
  var status = props.globalState.status;
  var _props$globalState$to = props.globalState.totalStatus,
      gainPercent = _props$globalState$to.gainPercent,
      lossPercent = _props$globalState$to.lossPercent,
      newCP = _props$globalState$to.newCP,
      newSP = _props$globalState$to.newSP;

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
          "Your $",
          newCP,
          " dollar investment is now "
        ),
        _react2.default.createElement(
          "h1",
          null,
          "$",
          newSP
        ),
        _react2.default.createElement(
          "h4",
          null,
          "You made ",
          status === 'gain' ? gainPercent + "% profit" : lossPercent + "% loss"
        ),
        _react2.default.createElement(
          "a",
          { href: "#", className: "main-btn active" },
          "Create account to keep track of all your records"
        ),
        _react2.default.createElement(
          "a",
          { href: "#", className: "main-btn", onClick: props.reset },
          "Or check another transaction."
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

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(29);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactDatepicker = __webpack_require__(63);

var _reactDatepicker2 = _interopRequireDefault(_reactDatepicker);

var _moment = __webpack_require__(0);

var _moment2 = _interopRequireDefault(_moment);

var _axios = __webpack_require__(229);

var _axios2 = _interopRequireDefault(_axios);

var _Home = __webpack_require__(230);

var _Home2 = _interopRequireDefault(_Home);

var _Results = __webpack_require__(231);

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
      location: 'Home',
      date: (0, _moment2.default)(),
      data: '',
      cryptoAmount: 1,
      status: '',
      totalStatus: ''
    };
    _this.routingSystem = _this.routingSystem.bind(_this);
    _this.handleDateChange = _this.handleDateChange.bind(_this);
    _this.apiCall = _this.apiCall.bind(_this);
    _this.onInputChange = _this.onInputChange.bind(_this);
    _this.reset = _this.reset.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var self = this;
      _axios2.default.get('https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=BTC,USD,EUR&ts=' + (0, _moment2.default)().unix() + '&extraParams=crypto_profits').then(function (response) {
        self.setState({
          btcToday: response.data.BTC
        }, function () {
          return console.log(self.state);
        });
      }).catch(function (error) {
        console.log(error);
      });
    }
  }, {
    key: 'routingSystem',
    value: function routingSystem() {
      switch (this.state.location) {
        case 'Home':
          return _react2.default.createElement(_Home2.default, {
            handleDateChange: this.handleDateChange,
            globalState: this.state,
            onInputChange: this.onInputChange,
            apiCall: this.apiCall });
          break;
        case 'Results':
          return _react2.default.createElement(_Results2.default, { globalState: this.state, reset: this.reset });
          break;
        default:
          return _react2.default.createElement(_Home2.default, null);
      }
    }
  }, {
    key: 'handleDateChange',
    value: function handleDateChange(date) {
      var _this2 = this;

      this.setState({
        date: date
      }, function () {
        return console.log(_this2.state.date.unix());
      });
    }
  }, {
    key: 'onInputChange',
    value: function onInputChange(event) {
      this.setState({
        cryptoAmount: event.target.value
      });
    }
  }, {
    key: 'apiCall',
    value: function apiCall() {
      var self = this;
      _axios2.default.get('https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=BTC,USD,EUR&ts=' + self.state.date.unix() + '&extraParams=crypto_profits').then(function (response) {
        self.setState({
          data: response.data.BTC
        }, function () {
          // CP = COST PRICE
          // SP = SELLING PRICE
          // GAIN = SP - CP
          // GAIN% = (GAIN / CP) * 100
          // LOSS = CP - SP
          // LOSS% = (LOSS / CP)
          var CP = self.state.data.USD;
          var newCP = self.state.cryptoAmount;
          newCP = newCP * CP;
          var SP = self.state.btcToday.USD;
          var newSP = self.state.cryptoAmount;
          newSP = newSP * SP;
          if (newCP < newSP) {
            var gain = newSP - newCP;
            var gainPercent = gain / newCP * 100;
            gainPercent = gainPercent.toFixed(2);
            console.log('Profit percent is ' + gainPercent);

            // set state with totals and change location
            self.setState({
              location: 'Results',
              status: 'gain',
              totalStatus: {
                newCP: newCP.toFixed(2),
                newSP: newSP.toFixed(2),
                gainPercent: gainPercent
              }
            }, function () {
              return console.log(self.state);
            });
          } else {
            var loss = newCP - newSP;
            var lossPercent = loss / newCP * 100;
            lossPercent = lossPercent.toFixed(2);
            console.log('Loss percent is ' + lossPercent);

            // set state with totals and change location
            self.setState({
              location: 'Results',
              status: 'loss',
              totalStatus: {
                newCP: newCP.toFixed(2),
                newSP: newSP.toFixed(2),
                lossPercent: lossPercent
              }
            }, function () {
              return console.log(self.state);
            });
          }
        });
      }).catch(function (error) {
        console.log(error);
      });
    }
  }, {
    key: 'reset',
    value: function reset() {
      this.setState({
        location: 'Home',
        date: (0, _moment2.default)(),
        data: '',
        cryptoAmount: 1,
        status: '',
        totalStatus: ''
      });
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
              { className: 'logo', onClick: this.apiCall },
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

},[250]);