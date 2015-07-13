'use strict';

var util = require('../util');

var words = ('' +
'lorem ipsum dolor sit amet consectetur adipisicing elit sed do ' +
'eiusmod tempor incididunt ut labore et dolore magna aliqua Ut ' +
'enim ad minim veniam quis nostrud exercitation ullamco laboris ' +
'nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in ' +
'reprehenderit in voluptate velit esse cillum dolore eu fugiat ' +
'nulla pariatur Excepteur sint occaecat cupidatat non proident ' +
'sunt in culpa qui officia deserunt mollit anim id est laborum').split(' ');

function getLength(min, max, length) {
  /*jshint validthis: true */

  if (length === 0) {
    length = this.int(3, 7);
  } else if (length === 1) {
    length = util.isNumber(min) ? util.toInt(min) : this.int(3, 7);
  } else {

    min = util.isNumber(min) ? util.toInt(min) : 3;
    max = util.isNumber(max) ? util.toInt(max) : 7;

    var range = util.getRange(min, max);

    min = range.min;
    max = range.max;
    length = this.int(min, max);
  }

  return length;
}

var exports = {

  capitalize: function (word) {
    word = word + '';
    return word.charAt(0).toUpperCase() + word.substr(1);
  },

  upper: function (str) {
    return (str + '').toUpperCase();
  },

  lower: function (str) {
    return (str + '').toLowerCase();
  },

  word: function (min, max) {
    var length = getLength.call(this, min, max, arguments.length);
    var ret = '';

    while (ret.length < length) {
      ret += this.char('lower');
    }

    return ret;
  },

  sentence: function (min, max) {
    var length = getLength.call(this, min, max, arguments.length);
    var arr = [];

    while (arr.length < length) {
      arr.push(this.word());
    }

    return this.capitalize(arr.join(' ')) + '.';
  },

  title: function (min, max) {
    var length = getLength.call(this, min, max, arguments.length);
    var arr = [];

    while (arr.length < length) {
      arr.push(this.capitalize(this.word()));
    }

    return arr.join(' ');
  },

  paragraph: function (min, max) {
    var length = getLength.call(this, min, max, arguments.length);
    var arr = [];

    while (arr.length < length) {
      arr.push(this.sentence());
    }

    return arr.join(' ');
  },

  lorem: function () {
    return this.pickOne(words);
  },

  lorem_ipsum: function () {

    var length = words.length;

    length = this.int(length / 2, length);

    var arr = [];

    while (arr.length < length) {
      var index = this.int(0, length);
      arr.push(words[index]);
    }

    return arr.join(' ');
  }
};

exports.lorems = exports.lorem_ipsum;

module.exports = exports;
