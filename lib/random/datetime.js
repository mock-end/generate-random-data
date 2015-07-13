var moment = require('moment');
var util = require('../util');

module.exports = {
  formatDate: function (date, format) {
    return moment(date).format(format);
  },

  randomDate: function (min, max) {

    min = util.isNumber(min) ? util.toInt(min) : 0;
    max = util.isNumber(max) ? util.toInt(max) : +(new Date());

    var range = util.getRange(min, max);

    min = range.min;
    max = range.max;

    return new Date(Math.random() * (max - min));
  },

  date: function (date, format) {
    if (arguments.length <= 1) {
      format = date;
      date = null;
    }
    date = date || this.randomDate();
    format = format || 'YYYY-MM-DD';
    return this.formatDate(date, format);
  },

  time: function (date, format) {
    if (arguments.length <= 1) {
      format = date;
      date = null;
    }
    date = date || this.randomDate();
    format = format || 'HH:mm:ss';
    return this.formatDate(date, format);
  },

  datetime: function (date, format) {
    if (arguments.length <= 1) {
      format = date;
      date = null;
    }
    date = date || this.randomDate();
    format = format || 'YYYY-MM-DD HH:mm:ss';
    return this.formatDate(date, format);
  }
};
