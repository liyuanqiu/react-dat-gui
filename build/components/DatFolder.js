'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DatFolder = function (_Component) {
  _inherits(DatFolder, _Component);

  function DatFolder() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, DatFolder);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DatFolder.__proto__ || Object.getPrototypeOf(DatFolder)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      closed: _this.props.closed
    }, _this.handleClick = function () {
      var closed = !_this.state.closed;

      _this.setState({ closed: closed });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DatFolder, [{
    key: 'renderChildren',
    value: function renderChildren() {
      // Disable this rule to take title out of the props so nested folders can have unique titles.
      // eslint-disable-next-line no-unused-vars
      var _props = this.props,
          children = _props.children,
          title = _props.title,
          rest = _objectWithoutProperties(_props, ['children', 'title']);

      return _react2.default.Children.map(children, function (child) {
        return (0, _react.cloneElement)(child, _extends({}, rest));
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var closed = this.state.closed;
      var title = this.props.title;


      return _react2.default.createElement(
        'li',
        { className: (0, _classnames2.default)('folder', { 'closed': closed }) },
        _react2.default.createElement(
          'div',
          { className: 'dg' },
          _react2.default.createElement(
            'div',
            { className: 'title', onClick: this.handleClick },
            title
          ),
          _react2.default.createElement(
            'ul',
            null,
            this.renderChildren()
          )
        )
      );
    }
  }]);

  return DatFolder;
}(_react.Component);

DatFolder.propTypes = {
  title: _propTypes2.default.string.isRequired
};
DatFolder.defaultProps = {
  title: 'Folder',
  closed: true
};
exports.default = DatFolder;
module.exports = exports['default'];