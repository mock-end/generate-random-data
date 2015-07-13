var util = require('../util');

module.exports = {
  int: function (min, max) {

    min = util.isNumber(min) ? util.toInt(min) : util.MIN_NUMBER;
    max = util.isNumber(max) ? util.toInt(max) : util.MAX_NUMBER;

    var range = util.getRange(min, max);

    min = range.min;
    max = range.max;

    return Math.round(Math.random() * (max - min)) + min;
  },

  integer: this.int,

  natural: function (min, max) {

    min = util.isNumber(min) ? util.toInt(min) : 0;
    max = util.isNumber(max) ? util.toInt(max) : util.MAX_NUMBER;

    var range = util.getRange(min, max);

    min = range.min;
    max = range.max;

    return Math.round(Math.random() * (max - min)) + min;
  },

  float: function (iMin, iMax, dMin, dMax) {

    var i = this.int(iMin, iMax);
    var d = this.int(dMin, dMax);
    return util.toFloat([i, d].join('.'));
  }
};
