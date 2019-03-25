'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DatPresets = exports.DatColor = exports.DatSelect = exports.DatFolder = exports.DatButton = exports.DatBoolean = exports.DatNumber = exports.DatString = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _DatString = require('./components/DatString');

Object.defineProperty(exports, 'DatString', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_DatString).default;
  }
});

var _DatNumber = require('./components/DatNumber');

Object.defineProperty(exports, 'DatNumber', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_DatNumber).default;
  }
});

var _DatBoolean = require('./components/DatBoolean');

Object.defineProperty(exports, 'DatBoolean', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_DatBoolean).default;
  }
});

var _DatButton = require('./components/DatButton');

Object.defineProperty(exports, 'DatButton', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_DatButton).default;
  }
});

var _DatFolder = require('./components/DatFolder');

Object.defineProperty(exports, 'DatFolder', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_DatFolder).default;
  }
});

var _DatSelect = require('./components/DatSelect');

Object.defineProperty(exports, 'DatSelect', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_DatSelect).default;
  }
});

var _DatColor = require('./components/DatColor');

Object.defineProperty(exports, 'DatColor', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_DatColor).default;
  }
});

var _DatPresets = require('./components/DatPresets');

Object.defineProperty(exports, 'DatPresets', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_DatPresets).default;
  }
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = require('lodash.clonedeep');

var _lodash2 = _interopRequireDefault(_lodash);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _lodash3 = require('lodash.isundefined');

var _lodash4 = _interopRequireDefault(_lodash3);

var _lodash5 = require('lodash.set');

var _lodash6 = _interopRequireDefault(_lodash5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DatGui = function (_Component) {
  _inherits(DatGui, _Component);

  function DatGui() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, DatGui);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DatGui.__proto__ || Object.getPrototypeOf(DatGui)).call.apply(_ref, [this].concat(args))), _this), _this.handleUpdateValue = function (path, value) {
      var _this$props = _this.props,
          data = _this$props.data,
          onUpdate = _this$props.onUpdate;

      var dataUpdated = (0, _lodash6.default)((0, _lodash2.default)(data), path, value);

      onUpdate(dataUpdated);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DatGui, [{
    key: 'renderChildren',
    value: function renderChildren() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          data = _props.data;


      return _react2.default.Children.toArray(children).map(function (child, i) {
        var liveUpdate = (0, _lodash4.default)(child.props.liveUpdate) ? _this2.props.liveUpdate : child.props.liveUpdate;
        var labelWidth = (0, _lodash4.default)(child.props.labelWidth) ? _this2.props.labelWidth : child.props.labelWidth;

        return (0, _react.cloneElement)(child, {
          key: i,
          data: data,
          liveUpdate: liveUpdate,
          labelWidth: labelWidth,
          _onUpdateValue: _this2.handleUpdateValue
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props$style = this.props.style,
          style = _props$style === undefined ? {} : _props$style;

      var className = (0, _classnames2.default)('react-dat-gui', this.props.className);

      return _react2.default.createElement(
        'div',
        { className: className, style: style },
        _react2.default.createElement(
          'ul',
          { className: 'dg main' },
          this.renderChildren()
        )
      );
    }
  }]);

  return DatGui;
}(_react.Component);

DatGui.propTypes = {
  data: _propTypes2.default.object.isRequired,
  children: _propTypes2.default.node.isRequired,
  onUpdate: _propTypes2.default.func.isRequired,
  liveUpdate: _propTypes2.default.bool,
  labelWidth: _propTypes2.default.number,
  className: _propTypes2.default.string,
  style: _propTypes2.default.object
};
DatGui.defaultProps = {
  liveUpdate: true,
  labelWidth: 40
};
exports.default = DatGui;