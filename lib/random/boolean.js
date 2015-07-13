'use strict';

var util = require('../util');

var exports = {
  bool: function (min, max, seed) {

    if (util.isUndefined(seed)) {
      return Math.random() >= 0.5;
    }

    min = util.isNumber(min) ? util.toInt(min) : 1;
    max = util.isNumber(max) ? util.toInt(max) : 1;

    var range = util.getRange(min, max);

    min = range.min;
    max = range.max;

    return Math.random() > min / (min + max) ? !seed : !!seed;
  }
};

exports.boolean = exports.bool;

module.exports = exports;
