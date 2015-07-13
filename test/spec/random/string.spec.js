'use strict';

var expect = require('chai').expect;

describe('./lib/random/string', function () {

  var random = require('../../../lib');

  it('char()', function () {

    expect('abcdefghijklmnopqrstuvwxyz').to.have.string(random.char('lower'));
    expect('ABCDEFGHIJKLMNOPQRSTUVWXYZ').to.have.string(random.char('upper'));
    expect('0123456789').to.have.string(random.char('number'));
    expect('!@#$%^&*()[]').to.have.string(random.char('symbol'));
    expect('asdf').to.have.string(random.char('asdf'));
  });

  it('str()', function () {

    // 3 arguments
    expect(random.str('lower', 1, 9).length)
      .to.be.at.least(1)
      .and
      .to.be.at.most(9);

    // 2 arguments
    expect(random.str('lower', 2).length).to.equal(2);
    expect(random.str(1, 9).length)
      .to.be.at.least(1)
      .and
      .to.be.at.most(9);

    // 1 argument
    expect(random.str(2).length).to.equal(2);
    expect(random.str('lower').length)
      .to.be.at.least(3)
      .and
      .to.be.at.most(7);

    // none argument
    expect(random.str().length)
      .to.be.at.least(3)
      .and
      .to.be.at.most(7);

  });

});

