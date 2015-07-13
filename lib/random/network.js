'use strict';


var tlds = ['com', 'net', 'cn', 'org', 'edu', 'gov', 'co.uk', 'so', 'io', 'cc',
  'name', 'me', 'biz', 'com.cn', '.net.cn', 'org.cn', 'mobi', 'tel', 'asia',
  'tv', 'info'];

module.exports = {

  domain: function (tld) {
    return this.word() + '.' + (tld || this.tld());
  },

  url: function () {
    return 'http://www.' + this.domain() + '/' + this.word();
  },

  email: function (domain) {
    domain = domain || this.domain();
    return this.word() + '@' + domain;
  },

  ip: function () {
    return this.natural(0, 255) + '.' +
      this.natural(0, 255) + '.' +
      this.natural(0, 255) + '.' +
      this.natural(0, 255);
  },

  tld: function () {
    return this.pickOne(tlds);
  }
};
