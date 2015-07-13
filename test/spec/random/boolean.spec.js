'use strict';

var expect = require('chai').expect;
var assert = require('chai').assert;

describe('./lib/random', function () {

  var random = require('../../../lib');

  it('boolean(min, max, seed)', function () {


    assert.typeOf(random.bool(), 'boolean');
    assert.typeOf(random.bool(1, 1, true), 'boolean');
    assert.typeOf(random.bool('a', 'b', true), 'boolean');
  });


});
