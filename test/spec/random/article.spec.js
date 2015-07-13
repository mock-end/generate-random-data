/* global describe, it */

'use strict';

var expect = require('chai').expect;
var words = ('' +
'lorem ipsum dolor sit amet consectetur adipisicing elit sed do ' +
'eiusmod tempor incididunt ut labore et dolore magna aliqua Ut ' +
'enim ad minim veniam quis nostrud exercitation ullamco laboris ' +
'nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in ' +
'reprehenderit in voluptate velit esse cillum dolore eu fugiat ' +
'nulla pariatur Excepteur sint occaecat cupidatat non proident ' +
'sunt in culpa qui officia deserunt mollit anim id est laborum').split(' ');

describe('./lib/random/article', function () {

  var random = require('../../../lib');

  it('capitalize()', function () {

    expect(random.capitalize()).to.equal('Undefined');
    expect(random.capitalize(0)).to.equal('0');
    expect(random.capitalize('abc')).to.equal('Abc');
    expect(random.capitalize('Abc')).to.equal('Abc');
  });

  it('upper()', function () {

    expect(random.upper()).to.equal('UNDEFINED');
    expect(random.upper(0)).to.equal('0');
    expect(random.upper('abc')).to.equal('ABC');
    expect(random.upper('Abc')).to.equal('ABC');
  });

  it('lower()', function () {

    expect(random.lower()).to.equal('undefined');
    expect(random.lower(0)).to.equal('0');
    expect(random.lower('abc')).to.equal('abc');
    expect(random.lower('Abc')).to.equal('abc');
  });

  it('word()', function () {

    expect((random.word()).length)
      .to.be.at.least(3)
      .and
      .to.be.at.most(7);
    expect((random.word(2)).length).to.equal(2);
    expect((random.word(2, 2)).length).to.equal(2);

    expect((random.word('a')).length)
      .to.be.at.least(3)
      .and
      .to.be.at.most(7);

    expect((random.word('a', 'b')).length)
      .to.be.at.least(3)
      .and
      .to.be.at.most(7);
  });

  it('sentence()', function () {

    expect((random.sentence().split(' ')).length)
      .to.be.at.least(3)
      .and
      .to.be.at.most(7);
    expect((random.sentence(2).split(' ')).length).to.equal(2);
    expect((random.sentence(2, 2).split(' ')).length).to.equal(2);

    expect((random.sentence('a').split(' ')).length)
      .to.be.at.least(3)
      .and
      .to.be.at.most(7);

    expect((random.sentence('a', 'b').split(' ')).length)
      .to.be.at.least(3)
      .and
      .to.be.at.most(7);
  });

  it('title()', function () {

    expect((random.title().split(' ')).length)
      .to.be.at.least(3)
      .and
      .to.be.at.most(7);
    expect((random.title(2).split(' ')).length).to.equal(2);
    expect((random.title(2, 2).split(' ')).length).to.equal(2);

    expect((random.title('a').split(' ')).length)
      .to.be.at.least(3)
      .and
      .to.be.at.most(7);

    expect((random.title('a', 'b').split(' ')).length)
      .to.be.at.least(3)
      .and
      .to.be.at.most(7);
  });

  it('paragraph()', function () {

    expect((random.paragraph().split('. ')).length)
      .to.be.at.least(3)
      .and
      .to.be.at.most(7);
    expect((random.paragraph(2).split('. ')).length).to.equal(2);
    expect((random.paragraph(2, 2).split('. ')).length).to.equal(2);

    expect((random.paragraph('a').split('. ')).length)
      .to.be.at.least(3)
      .and
      .to.be.at.most(7);

    expect((random.paragraph('a', 'b').split('. ')).length)
      .to.be.at.least(3)
      .and
      .to.be.at.most(7);
  });

  it('lorem()', function () {

    expect(words).to.include(random.lorem());
  });

  it('lorems()', function () {
    expect(words).to.include.members((random.lorems()).split(' '));
  });
});

