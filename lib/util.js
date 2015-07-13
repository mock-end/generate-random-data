'use strict';

var MIN_NUMBER = -9007199254740992;
var MAX_NUMBER = 9007199254740992;

var toString = Object.prototype.toString;
var hasOwn = Object.prototype.hasOwnProperty;


exports.MIN_NUMBER = MIN_NUMBER;
exports.MAX_NUMBER = MAX_NUMBER;

exports.getType = function (obj) {

  if (obj === null || obj === undefined) {
    return '';
  } else {
    return toString.call(obj).match(/\[object (\w+)\]/)[1].toLowerCase();
  }
};

exports.hasKey = function hasKey(obj, key) {
  return obj && hasOwn.call(obj, key);
};

exports.isUndefined = function (val) {
  return typeof val === 'undefined';
};

exports.isNumber = function (val) {
  return !exports.isUndefined(val) && !isNaN(val) && isFinite(val);
};

exports.toInt = function (val) {
  return parseInt(val, 10);
};

exports.toFloat = function (val) {
  return parseFloat(val);
};

exports.getPrecision = function (float) {

  var tail = (float + '').split('.')[1];

  return tail ? tail.length : 0;
};

// fixes native `toFixed` rounding issues
// eg. (0.615).toFixed(2) === "0.61"
exports.toFixed = function (val, precision) {

  // must be positive integer
  precision = Math.abs(precision);

  var power = Math.pow(10, precision);

  // multiply up by precision, round accurately,
  // then divide and use native `toFixed`
  var ret = (Math.round(val * power) / power).toFixed(precision);
  return +ret;
};

exports.getRange = function (val1, val2) {
  return {
    min: Math.min(val1, val2),
    max: Math.max(val1, val2)
  };
};
