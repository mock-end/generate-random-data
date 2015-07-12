var util = require('./util');

module.exports = {
  range: function (start, stop, step) {

    start = util.isNumber(start) ? util.toInt(start) : 0;
    stop = util.isNumber(stop) ? util.toInt(stop) : 100;
    step = util.isNumber(step) ? util.toInt(step) : 1;

    var ret = [];

    while (start <= stop) {
      ret.push(start);
      start += step;
    }

    return ret;
  },

  pickOne: function (arr) {
    arr = arr || [];
    return arr[this.int(0, arr.length - 1)];
  },

  pickSome: function (arr, count, shuffle) {

    arr = arr || [];
    arr = arr.slice(0);

    count = util.isNumber(count) ? util.toInt(count) : 0;
    count = count <= 0 ? this.int(1, arr.length)
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
