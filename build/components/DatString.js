'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = require('lodash.isstring');

var _lodash2 = _interopRequireDefault(_lodash);

var _lodash3 = require('lodash.result');

var _lodash4 = _interopRequireDefault(_lodash3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DatString = function (_Component) {
  _inherits(DatString, _Component);

  function DatString() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, DatString);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DatString.__proto__ || Object.getPrototypeOf(DatString)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: _this.getValue()
    }, _this.handleChange = function (event) {
      var value = event.target.value;

      _this.setState({ value: value }, function () {
        _this.props.liveUpdate && _this.update();
      });
    }, _this.handleFocus = function () {
      document.addEventListener('keydown', _this.handleKeyDown);
    }, _this.handleBlur = function () {
      document.removeEventListener('keydown', _this.handleKeyDown);
      window.getSelection().removeAllRanges();
      !_this.props.liveUpdate && _this.update();
    }, _this.handleKeyDown = function (event) {
      var key = event.keyCode || event.which;

      if (key === 13) {
        !_this.props.liveUpdate && _this.update();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DatString, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        value: this.getValue(nextProps)
      });
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;

      return (0, _lodash4.default)(props.data, props.path);
    }
  }, {
    key: 'update',
    value: function update() {
      var value = this.state.value;


      this.props._onUpdateValue && this.props._onUpdateValue(this.props.path, value);
      this.props.onUpdate && this.props.onUpdate(value);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          path = _props.path,
          label = _props.label,
          labelWidth = _props.labelWidth;

      var labelText = (0, _lodash2.default)(label) ? label : path;

      return _react2.default.createElement(
        'li',
        { className: 'cr string' },
        _react2.default.createElement(
          'label',
          null,
          _react2.default.createElement(
            'span',
            { className: 'label-text', style: { width: labelWidth + '%' } },
            labelText
          ),
          _react2.default.createElement('input', {
            type: 'text',
            value: this.state.value,
            style: { width: 100 - labelWidth + '%' },
            onChange: this.handleChange,
            onFocus: this.handleFocus,
            onBlur: this.handleBlur
          })
        )
      );
    }
  }]);

  return DatString;
}(_react.Component);

DatString.propTypes = {
  data: _propTypes2.default.object,
  path: _propTypes2.default.string,
  label: _propTypes2.default.string,
  labelWidth: _propTypes2.default.number,
  liveUpdate: _propTypes2.default.bool,
  onUpdate: _propTypes2.default.func,
  _onUpdateValue: _propTypes2.default.func
};
exports.default = DatString;
module.exports = exports['default'];