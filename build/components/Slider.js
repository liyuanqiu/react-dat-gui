'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _lodash = require('lodash.clamp');

var _lodash2 = _interopRequireDefault(_lodash);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Slider = function (_Component) {
  _inherits(Slider, _Component);

  function Slider() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Slider);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Slider.__proto__ || Object.getPrototypeOf(Slider)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: (0, _utils.toNumber)(_this.props.value)
    }, _this.handleMouseDown = function (event) {
      _this.update(event.pageX);

      window.addEventListener('mousemove', _this.handleMouseMove);
      window.addEventListener('mouseup', _this.handleMouseUp);
    }, _this.handleMouseMove = function (event) {
      _this.update(event.pageX);

      event.preventDefault();
    }, _this.handleMouseUp = function (event) {
      _this.update(event.pageX, false);

      window.removeEventListener('mousemove', _this.handleMouseMove);
      window.removeEventListener('mouseup', _this.handleMouseUp);
    }, _this.handleClick = function (event) {
      // do not focus input field on slider click
      event.preventDefault();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Slider, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        value: (0, _utils.toNumber)(nextProps.value)
      });
    }
  }, {
    key: 'update',
    value: function update(pageX) {
      var isLive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var _props = this.props,
          min = _props.min,
          max = _props.max,
          onUpdate = _props.onUpdate;

      var rect = _reactDom2.default.findDOMNode(this).getBoundingClientRect();
      var x = pageX - rect.left;
      var w = rect.right - rect.left;
      var value = min + (0, _lodash2.default)(x / w, 0, 1) * (max - min);

      this.setState({ value: value }, function () {
        onUpdate(value, isLive);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          min = _props2.min,
          max = _props2.max,
          width = _props2.width;

      var widthBackground = (0, _lodash2.default)((this.state.value - min) * 100 / (max - min), 0, 100);
      var style = {
        width: width + '%',
        backgroundSize: widthBackground + '% 100%'
      };

      return _react2.default.createElement('span', {
        className: 'slider',
        style: style,
        onClick: this.handleClick,
        onMouseDown: this.handleMouseDown
      });
    }
  }]);

  return Slider;
}(_react.Component);

Slider.propTypes = {
  value: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  min: _propTypes2.default.number,
  max: _propTypes2.default.number,
  width: _propTypes2.default.number,
  onUpdate: _propTypes2.default.func
};
exports.default = Slider;
module.exports = exports['default'];