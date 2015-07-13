'use strict';

var expect = require('chai').expect;

describe('./lib/random/array', function () {

  var random = require('../../../lib');

  it('range(start, stop, step)', function () {

    expect(random.range().length).to.equal(101);
    expect(random.range(1, 4, 1)).to.eql([1, 2, 3, 4]);
    expect(random.range(1, 4, 0.4)).to.eql([1, 1.4, 1.8, 2.2, 2.6, 3, 3.4, 3.8]);
  });

  it('pickOne()', function () {

    expect([1, 2, 3]).to.include(random.pickOne([1, 2, 3]));
    expect(random.pickOne([])).to.equal(undefined);
    expect(random.pickOne()).to.equal(undefined);
  });

  it('pickSome()', function () {

    expect(random.pickSome()).to.eql([]);
    expect(random.pickSome([])).to.eql([]);
    expect(random.pickSome([1, 2, 3], 0)).to.eql([]);
    expect(random.pickSome([1, 2, 3], 'count')).to.eql([]);
    expect(random.pickSome([1, 2, 3], 10)).to.eql([1, 2, 3]);
    expect([1, 2, 3]).to.include.members(random.pickSome([1, 2, 3], 10, true));
    expect([1, 2, 3]).to.include.members(random.pickSome([1, 2, 3], -1, false));
    expect([1, 2, 3]).to.include.members(random.pickSome([1, 2, 3], 1, false));
    expect([1, 2, 3]).to.include.members(random.pickSome([1, 2, 3], 2, false));
    expect([1, 2, 3]).to.include.members(random.pickSome([1, 2, 3], 2, true));
  });

  it('shuffle()', function () {
    expect(random.shuffle()).to.eql([]);
    expect(random.shuffle([])).to.eql([]);
    expect([1, 2, 3]).to.include.members(random.shuffle([1, 2, 3]));
  });

});
