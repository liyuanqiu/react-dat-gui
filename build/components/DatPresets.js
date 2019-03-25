'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = require('lodash.clonedeep');

var _lodash2 = _interopRequireDefault(_lodash);

var _lodash3 = require('lodash.isstring');

var _lodash4 = _interopRequireDefault(_lodash3);

var _lodash5 = require('lodash.result');

var _lodash6 = _interopRequireDefault(_lodash5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DEFAULT_PRESET_KEY = 'Default';

var DatPresets = function (_Component) {
  _inherits(DatPresets, _Component);

  function DatPresets() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, DatPresets);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DatPresets.__proto__ || Object.getPrototypeOf(DatPresets)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: {},
      options: [_defineProperty({}, DEFAULT_PRESET_KEY, (0, _lodash2.default)(_this.props.data))].concat(_toConsumableArray(_this.props.options))
    }, _this.handleChange = function (event) {
      var value = JSON.parse(event.target.value);

      _this.setState({ value: value }, function () {
        _this.props.liveUpdate && _this.update();
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DatPresets, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState({ value: (0, _lodash2.default)(this.props.data) });
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;

      return (0, _lodash6.default)(props.data, props.path);
    }
  }, {
    key: 'update',
    value: function update() {
      var value = this.state.value;


      this.props.onUpdate && this.props.onUpdate(value);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          path = _props.path,
          label = _props.label,
          labelWidth = _props.labelWidth;
      var options = this.state.options;

      var labelText = (0, _lodash4.default)(label) ? label : path;

      return _react2.default.createElement(
        'li',
        { className: 'cr presets' },
        _react2.default.createElement(
          'label',
          null,
          _react2.default.createElement(
            'span',
            { className: 'label-text', style: { width: labelWidth + '%' } },
            labelText
          ),
          _react2.default.createElement(
            'select',
            {
              style: { width: 100 - labelWidth + '%' },
              onChange: this.handleChange
            },
            options.map(function (preset) {
              return Object.keys(preset).map(function (key) {
                return _react2.default.createElement(
                  'option',
                  { key: key, value: JSON.stringify(preset[key]) },
                  key
                );
              });
            })
          )
        )
      );
    }
  }]);

  return DatPresets;
}(_react.Component);

DatPresets.propTypes = {
  data: _propTypes2.default.object,
  label: _propTypes2.default.string.isRequired,
  options: _propTypes2.default.array.isRequired,
  labelWidth: _propTypes2.default.number,
  liveUpdate: _propTypes2.default.bool,
  onUpdate: _propTypes2.default.func
};
exports.default = DatPresets;
module.exports = exports['default'];