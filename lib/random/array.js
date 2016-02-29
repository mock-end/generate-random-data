'use strict';

var util = require('../util');

module.exports = {
  range: function (start, stop, step) {

    start = util.isNumber(start) ? util.toFloat(start) : 0;
    stop = util.isNumber(stop) ? util.toFloat(stop) : 100;
    step = util.isNumber(step) ? util.toFloat(step) : 1;

    var p1 = util.getPrecision(start);
    var p2 = util.getPrecision(stop);
    var p3 = util.getPrecision(step);

    var precision = Math.max(p1, p2, p3);

    var ret = [];

    while (start <= stop) {

      if (precision) {
        start = util.toFixed(start, precision);
      }

      ret.push(start);
      start += step;
    }

    return ret;
  },

  pickOne: function (arr) {
    arr = arr || [];
    return arr.length ? arr[this.int(0, arr.length - 1)] : undefined;
  },

  pickSome: function (arr, count, shuffle) {

    arr = arr || [];
    arr = arr.slice(0);

    if (arr.length === 0) {
      return [];
    }

    count = util.isNumber(count)
      ? util.toInt(count)
      : this.int(1, arr.length);

    count = count < 0 ? this.int(1, arr.length)
      : count > arr.length ? arr.length
      : count;

    if (count === 1) {
      return [this.pickOne(arr)];
    }


    var idx = [];
    var index;

    while (count) {
      index = this.int(0, arr.length - 1);
      if (idx.indexOf(index) === -1) {
        count -= 1;
        idx.push(index);
      }
    }

    if (!shuffle) {
      idx.sort();
    }


    var ret = [];

    while (idx.length) {
      index = idx.shift();
      ret.push(arr[index]);
    }

    return ret;
  },

  shuffle: function (arr) {

    arr = arr || [];
    arr = arr.slice(0);

    var length = arr.length;
    var ret = [];

    while (ret.length < length) {
      var index = this.int(0, arr.length - 1);
      ret.push(arr[index]);
      arr.splice(index, 1);
    }

    return ret;
  }
};
