webpackJsonp([0],{

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(46);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(59);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Header = __webpack_require__(230);

var _Header2 = _interopRequireDefault(_Header);

var _Home = __webpack_require__(231);

var _Home2 = _interopRequireDefault(_Home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.clickedBtn = function () {};

    _this.state = {};
    return _this;
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(_Home2.default, null)
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;

/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(46);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(59);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(225);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(_App2.default, null), app);

/***/ }),

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(46);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(59);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

    _this.clickedBtn = function () {};

    _this.state = {};
    return _this;
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'header',
        null,
        _react2.default.createElement(
          'div',
          { className: 'left-menu' },
          _react2.default.createElement(
            'div',
            { className: 'logo' },
            'Craigslist'
          ),
          _react2.default.createElement(
            'div',
            { className: 'city' },
            'Ottawa ',
            _react2.default.createElement('i', { className: 'fas fa-chevron-down' })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'right-menu' },
          _react2.default.createElement(
            'div',
            { className: 'user-img' },
            _react2.default.createElement('i', { className: 'far fa-user' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'account' },
            'My account ',
            _react2.default.createElement('i', { className: 'fas fa-chevron-down' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'post-btn' },
            'Post to classifieds'
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(46);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(59);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this));

    _this.clickedBtn = function () {};

    _this.loopCategories = function () {
      var array = [1, 2, 3, 4, 5, 6, 7];
      return array.map(function () {
        return _react2.default.createElement(
          'div',
          { className: 'category' },
          _react2.default.createElement(
            'div',
            { className: 'title' },
            'Community'
          ),
          _react2.default.createElement(
            'div',
            { className: 'links' },
            _react2.default.createElement(
              'a',
              { href: '#', className: 'link' },
              'Community'
            ),
            _react2.default.createElement(
              'a',
              { href: '#', className: 'link' },
              'General'
            ),
            _react2.default.createElement(
              'a',
              { href: '#', className: 'link' },
              'Activities'
            ),
            _react2.default.createElement(
              'a',
              { href: '#', className: 'link' },
              'Groups'
            ),
            _react2.default.createElement(
              'a',
              { href: '#', className: 'link' },
              'Artists'
            ),
            _react2.default.createElement(
              'a',
              { href: '#', className: 'link' },
              'Local News'
            ),
            _react2.default.createElement(
              'a',
              { href: '#', className: 'link' },
              'Child Care'
            ),
            _react2.default.createElement(
              'a',
              { href: '#', className: 'link' },
              'Lost & Found'
            ),
            _react2.default.createElement(
              'a',
              { href: '#', className: 'link' },
              'Classes'
            ),
            _react2.default.createElement(
              'a',
              { href: '#', className: 'link' },
              'Musician'
            ),
            _react2.default.createElement(
              'a',
              { href: '#', className: 'link' },
              'Events'
            ),
            _react2.default.createElement(
              'a',
              { href: '#', className: 'link' },
              'Pets'
            )
          )
        );
      });
    };

    _this.loopTags = function () {
      var array = [1, 2, 3, 4, 5, 6, 7];
      return array.map(function () {
        return _react2.default.createElement(
          'div',
          { className: 'tag' },
          'Apple Macbook'
        );
      });
    };

    _this.state = {};
    return _this;
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { id: 'home' },
        _react2.default.createElement(
          'h1',
          null,
          ' Connecting People ',
          _react2.default.createElement('br', null),
          ' Everywhere '
        ),
        _react2.default.createElement(
          'section',
          { className: 'link-section' },
          this.loopCategories()
        ),
        _react2.default.createElement(
          'section',
          { className: 'trending' },
          _react2.default.createElement('input', { type: 'text', name: 'search', className: 'search', placeholder: 'search' }),
          _react2.default.createElement(
            'div',
            { className: 'trending-title' },
            _react2.default.createElement('i', { className: 'far fa-clock' }),
            ' Trending Now'
          ),
          _react2.default.createElement(
            'div',
            { className: 'trending-tags' },
            this.loopTags()
          )
        )
      );
    }
  }]);

  return Home;
}(_react.Component);

exports.default = Home;

/***/ })

},[229]);