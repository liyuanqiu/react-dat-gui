'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toNumber = toNumber;
function toNumber(value) {
  var float = parseFloat(value);
  return isNaN(float) ? 0 : float;
}

/**
 * Polyfill for isInteger.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger#Polyfill
 * @param {number} value
 * @return {bool}
 */
var isInteger = exports.isInteger = Number.isInteger || function (value) {
  return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
};