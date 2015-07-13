'use strict';

var expect = require('chai').expect;

describe('./lib/random/color', function () {

  var random = require('../../../lib');

  it('color()', function () {
    expect(random.color()).to.match(/^#[0-9a-fA-F]{6}$/);
  });
});
