'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _common = require('react-color/lib/components/common');

var _color = require('react-color/lib/helpers/color');

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Fields = function (_Component) {
  _inherits(Fields, _Component);

  function Fields() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Fields);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Fields.__proto__ || Object.getPrototypeOf(Fields)).call.apply(_ref, [this].concat(args))), _this), _this.handleChange = function (value, e) {
      _color2.default.isValidHex(value) && _this.props.onChange({
        hex: value,
        source: 'hex'
      }, e);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Fields, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'flexbox-fix fields-wrap' },
        _react2.default.createElement(
          'div',
          { className: 'flexbox-fix fields' },
          _react2.default.createElement(
            'div',
            { className: 'field' },
            _react2.default.createElement(_common.EditableInput, {
              value: this.props.hex,
              onChange: this.handleChange
            })
          )
        )
      );
    }
  }]);

  return Fields;
}(_react.Component);

exports.default = Fields;
module.exports = exports['default'];