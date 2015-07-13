'use strict';

var expect = require('chai').expect;

describe('./lib/random/number', function () {

  var random = require('../../../lib');

  it('int()', function () {

    expect(random.int(1, 9))
      .to.be.at.least(1)
      .and
      .to.be.at.most(9);

    expect(random.int()).to.be.a('number');

  });

  it('natural()', function () {

    expect(random.natural(1, 9))
      .to.be.at.least(1)
      .and
      .to.be.at.most(9);

    expect(random.natural()).to.be.a('number');

  });

  it('dx()', function () {

    expect(random.d5())
      .to.be.at.least(1)
      .and
      .to.be.at.most(5);
  });

  it('float()', function () {

    expect(random.float(1, 9, 0, 9))
      .to.be.at.least(1)
      .and
      .to.be.at.most(9.9);

    expect(random.float(1, 9, 0, 99, 2))
      .to.be.at.least(1)
      .and
      .to.be.at.most(9.99)
      .and
      .to.match(/\d.\d{1,3}/);

    expect(random.float()).to.be.a('number');

  });
});

