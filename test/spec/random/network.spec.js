'use strict';

var expect = require('chai').expect;
var tlds = ['com', 'net', 'cn', 'org', 'edu', 'gov', 'co.uk', 'so', 'io', 'cc',
  'name', 'me', 'biz', 'com.cn', '.net.cn', 'org.cn', 'mobi', 'tel', 'asia',
  'tv', 'info'];

describe('./lib/random/article', function () {

  var random = require('../../../lib');

  it('tld()', function () {
    expect(tlds).to.include((random.tld()));
  });

  it('domain()', function () {

    var domain = random.domain();

    expect(tlds).to.include(domain.split('.')[1]);
    expect(domain).match(/^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}$/);
  });

  it('domain(tld)', function () {

    var domain = random.domain('com');
    expect(domain.split('.')[1]).to.equal('com');
  });

  it('url()', function () {
    expect(random.url()).match(/[a-zA-z]+:\/\/[^\s]*/);
  });

  it('email()', function () {
    expect(random.email()).to.match(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/);
  });

  it('ip()', function () {
    expect(random.ip()).match(/((25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)\.){3}(25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|[1-9])/);
  });

});

