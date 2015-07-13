'use strict';


var util = require('../util');

var exports = {
  int: function (min, max) {

    min = util.isNumber(min) ? util.toInt(min) : util.MIN_NUMBER;
    max = util.isNumber(max) ? util.toInt(max) : util.MAX_NUMBER;

    var range = util.getRange(min, max);

    min = range.min;
    max = range.max;

    return Math.round(Math.random() * (max - min)) + min;
  },

  natural: function (min, max) {

    min = util.isNumber(min) ? util.toInt(min) : 0;
    max = util.isNumber(max) ? util.toInt(max) : util.MAX_NUMBER;

    var range = util.getRange(min, max);

    min = range.min;
    max = range.max;

    return Math.round(Math.random() * (max - min)) + min;
  },

  float: function (iMin, iMax, dMin, dMax, precision) {

    var i = this.int(iMin, iMax);
    var d = this.int(dMin, dMax);
    var ret = [i, d].join('.');

    ret = util.toFloat(ret);

    if (util.isNumber(precision)) {
      precision = util.toInt(precision);
      ret = util.toFixed(util.toFloat(ret), precision);
    }

    return ret;
  }
};

exports.integer = exports.int;

module.exports = exports;
