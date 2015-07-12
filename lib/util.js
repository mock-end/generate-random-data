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

exports.getRange = function (val1, val2) {
  return {
    min: Math.min(val1, val2),
    max: Math.max(val1, val2)
  }
};
