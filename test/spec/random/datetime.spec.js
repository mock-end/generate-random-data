/* global describe, it */

'use strict';

var expect = require('chai').expect;
var assert = require('chai').assert;

describe('./lib/random/datetime', function () {

  var random = require('../../../lib');

  it('randomDate()', function () {

    var now = +(new Date());

    expect(+random.randomDate())
      .to.be.at.least(1)
      .and
      .to.be.at.most(now);

    var start = 0;
    var end = now;

    expect(+random.randomDate(start, end))
      .to.be.at.least(start)
      .and
      .to.be.at.most(end);
  });

  it('date()', function () {

    expect(random.date()).to.match(/\d{4}-\d{2}-\d{2}/);
    expect(random.date('YYYY-MM-DD')).to.match(/\d{4}-\d{2}-\d{2}/);
    expect(random.date(new Date(), 'YYYY-MM-DD')).to.match(/\d{4}-\d{2}-\d{2}/);
    expect(random.date('2014-04-25T01:32:21.196+0600', 'YYYY-MM-DD')).to.match(/\d{4}-\d{2}-\d{2}/);
  });

  it('time()', function () {

    expect(random.time()).to.match(/\d{2}:\d{2}:\d{2}/);
    expect(random.time('HH:mm:ss')).to.match(/\d{2}:\d{2}:\d{2}/);
    expect(random.time(new Date(), 'HH:mm:ss')).to.match(/\d{2}:\d{2}:\d{2}/);
    expect(random.time('2014-04-25T01:32:21.196+0600', 'HH:mm:ss')).to.match(/\d{2}:\d{2}:\d{2}/);
  });

  it('datetime()', function () {

    expect(random.datetime()).to.match(/\d{4}-\d{2}-\d{2}\s{1}\d{2}:\d{2}:\d{2}/);
    expect(random.datetime('YYYY-MM-DD HH:mm:ss')).to.match(/\d{4}-\d{2}-\d{2}\s{1}\d{2}:\d{2}:\d{2}/);
    expect(random.datetime(new Date(), 'YYYY-MM-DD HH:mm:ss')).to.match(/\d{4}-\d{2}-\d{2}\s{1}\d{2}:\d{2}:\d{2}/);
    expect(random.datetime('2014-04-25T01:32:21.196+0600', 'YYYY-MM-DD HH:mm:ss')).to.match(/\d{4}-\d{2}-\d{2}\s{1}\d{2}:\d{2}:\d{2}/);
  });

});
