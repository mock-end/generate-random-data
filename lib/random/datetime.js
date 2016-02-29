'use strict';

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

    return new Date(Math.random() * (max - min)).toISOString();
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
  },

  now: function (unit, format) {

    if (arguments.length === 1) {
      if (!/year|month|week|day|hour|minute|second/.test(unit)) {
        format = unit;
        unit = '';
      }
    }

    unit = (unit || '').toLowerCase();
    format = format || 'YYYY-MM-DD HH:mm:ss';

    var date = new Date();

    switch (unit) {
      case 'year':
        date.setMonth(0);
        break;
      case 'month':
        date.setDate(1);
        break;
      case 'week':
        date.setHours(0);
        date.setDate(date.getDate() - date.getDay());
        break;
      case 'day':
        date.setHours(0);
        break;
      case 'hour':
        date.setMinutes(0);
        break;
      case 'minute':
        date.setSeconds(0);
        break;
      case 'second':
        date.setMilliseconds(0);
        break;
    }

    return this.formatDate(date.toISOString(), format);
  },

  parseDate: function () {
    return moment(arguments).format();
  }

};
