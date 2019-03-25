'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _common = require('react-color/lib/components/common');

var _Fields = require('./Fields');

var _Fields2 = _interopRequireDefault(_Fields);

var _Pointer = require('./Pointer');

var _Pointer2 = _interopRequireDefault(_Pointer);

var _PointerCircle = require('./PointerCircle');

var _PointerCircle2 = _interopRequireDefault(_PointerCircle);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Picker = function Picker(_ref) {
  var onChange = _ref.onChange,
      hsl = _ref.hsl,
      hsv = _ref.hsv,
      hex = _ref.hex,
      _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className;

  return _react2.default.createElement(
    'div',
    { className: 'picker ' + className },
    _react2.default.createElement(
      'div',
      { className: 'saturation-wrap' },
      _react2.default.createElement(_common.Saturation, {
        className: 'saturation',
        hsl: hsl,
        hsv: hsv,
        pointer: _PointerCircle2.default,
        onChange: onChange
      })
    ),
    _react2.default.createElement(
      'div',
      { className: 'body' },
      _react2.default.createElement(
        'div',
        { className: 'controls' },
        _react2.default.createElement(
          'div',
          { className: 'toggles' },
          _react2.default.createElement(
            'div',
            { className: 'hue-wrap' },
            _react2.default.createElement(_common.Hue, {
              className: 'hue',
              hsl: hsl,
              pointer: _Pointer2.default,
              onChange: onChange
            })
          )
        )
      ),
      _react2.default.createElement(_Fields2.default, {
        hex: hex,
        onChange: onChange
      })
    )
  );
};

Picker.propTypes = {
  disableAlpha: _propTypes2.default.bool
};

Picker.defaultProps = {
  disableAlpha: false
};

exports.default = (0, _common.ColorWrap)(Picker);
module.exports = exports['default'];