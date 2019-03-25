'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('./utils');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Slider = require('./Slider');

var _Slider2 = _interopRequireDefault(_Slider);

var _lodash = require('lodash.isfinite');

var _lodash2 = _interopRequireDefault(_lodash);

var _lodash3 = require('lodash.isstring');

var _lodash4 = _interopRequireDefault(_lodash3);

var _lodash5 = require('lodash.result');

var _lodash6 = _interopRequireDefault(_lodash5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DatNumber = function (_Component) {
  _inherits(DatNumber, _Component);

  function DatNumber() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, DatNumber);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DatNumber.__proto__ || Object.getPrototypeOf(DatNumber)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: _this.getValue()
    }, _this.handleChange = function (event) {
      _this.setState({ value: event.target.value }, _this.update);
    }, _this.handleFocus = function () {
      document.addEventListener('keydown', _this.handleKeyDown);
    }, _this.handleBlur = function (event) {
      var value = _this.applyConstraints(event.target.value);

      document.removeEventListener('keydown', _this.handleKeyDown);
      window.getSelection().removeAllRanges();

      _this.setState({ value: value }, _this.update);
    }, _this.handleKeyDown = function (event) {
      var key = event.keyCode || event.which;

      if (key === 13) {
        var value = _this.applyConstraints(_this.state.value);

        _this.setState({ value: value }, _this.update);
      }
    }, _this.handleSliderUpdate = function (value, isLive) {
      var constrained = _this.applyConstraints(value);
      var shouldUpdate = !isLive || _this.props.liveUpdate;

      _this.setState({ value: constrained }, function () {
        if (shouldUpdate) {
          _this.update();
        }
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DatNumber, [{
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

      return this.applyConstraints((0, _lodash6.default)(props.data, props.path));
    }
  }, {
    key: 'applyConstraints',
    value: function applyConstraints(value) {
      var _props = this.props,
          min = _props.min,
          max = _props.max,
          step = _props.step;
      var _ref2 = [(0, _lodash2.default)(min), (0, _lodash2.default)(max), (0, _lodash2.default)(step)],
          hasMin = _ref2[0],
          hasMax = _ref2[1],
          hasStep = _ref2[2];

      var decimalPlaces = hasStep && !(0, _utils.isInteger)(step) ? step.toString().split('.')[1].length : 0;
      var isMin = false,
          isMax = false;


      value = (0, _utils.toNumber)(value);

      if (hasMin && value <= min) {
        value = min;
        isMin = true;
      }

      if (hasMax && value >= max) {
        value = max;
        isMax = true;
      }

      if (!isMin && !isMax) {
        if (hasStep && step !== 0) {
          value = Math.round(value / step) * step;
        }
      }

      return value.toFixed(decimalPlaces);
    }

    /**
     * @deprecated This has been deprecated for now and is no longer applied to the
     * component onBlur.
     */

  }, {
    key: 'update',
    value: function update() {
      var value = this.state.value;


      this.props._onUpdateValue && this.props._onUpdateValue(this.props.path, (0, _utils.toNumber)(value));
      this.props.onUpdate && this.props.onUpdate((0, _utils.toNumber)(value));
    }
  }, {
    key: 'renderSlider',
    value: function renderSlider(width) {
      var _props2 = this.props,
          min = _props2.min,
          max = _props2.max;
      var value = this.state.value;


      return _react2.default.createElement(_Slider2.default, {
        value: value,
        min: min,
        max: max,
        width: width,
        onUpdate: this.handleSliderUpdate
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          min = _props3.min,
          max = _props3.max,
          path = _props3.path,
          label = _props3.label,
          labelWidth = _props3.labelWidth,
          step = _props3.step,
          disableSlider = _props3.disableSlider;

      var labelText = (0, _lodash4.default)(label) ? label : path;
      var hasSlider = (0, _lodash2.default)(min) && (0, _lodash2.default)(max);
      var controlsWidth = 100 - labelWidth;
      var inputWidth = hasSlider && disableSlider !== true ? Math.round(controlsWidth / 3) : controlsWidth;
      var sliderWidth = controlsWidth - inputWidth;

      return _react2.default.createElement(
        'li',
        { className: 'cr number' },
        _react2.default.createElement(
          'label',
          null,
          _react2.default.createElement(
            'span',
            { className: 'label-text', style: { width: labelWidth + '%' } },
            labelText
          ),
          hasSlider && disableSlider !== true ? this.renderSlider(sliderWidth) : null,
          _react2.default.createElement('input', {
            type: 'number',
            step: step,
            min: min,
            max: max,
            inputMode: 'numeric',
            value: this.state.value,
            style: { width: inputWidth + '%' },
            onChange: this.handleChange,
            onFocus: this.handleFocus
          })
        )
      );
    }
  }]);

  return DatNumber;
}(_react.Component);

DatNumber.propTypes = {
  min: _propTypes2.default.number,
  max: _propTypes2.default.number,
  step: _propTypes2.default.number,
  data: _propTypes2.default.object,
  path: _propTypes2.default.string,
  label: _propTypes2.default.string,
  labelWidth: _propTypes2.default.number,
  liveUpdate: _propTypes2.default.bool,
  onUpdate: _propTypes2.default.func,
  _onUpdateValue: _propTypes2.default.func,
  disableSlider: _propTypes2.default.bool
};
exports.default = DatNumber;
module.exports = exports['default'];