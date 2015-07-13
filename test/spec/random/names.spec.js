'use strict';

var expect = require('chai').expect;
var maleFirstNames = ['James', 'John', 'Robert', 'Michael', 'William', 'David',
  'Richard', 'Charles', 'Joseph', 'Thomas', 'Christopher', 'Daniel', 'Paul',
  'Mark', 'Donald', 'George', 'Kenneth', 'Steven', 'Edward', 'Brian', 'Ronald',
  'Anthony', 'Kevin', 'Jason', 'Matthew', 'Gary', 'Timothy', 'Jose', 'Larry',
  'Jeffrey', 'Frank', 'Scott', 'Eric'];

var femaleFirstNames = ['Mary', 'Patricia', 'Linda', 'Barbara', 'Elizabeth',
  'Jennifer', 'Maria', 'Susan', 'Margaret', 'Dorothy', 'Lisa', 'Nancy', 'Karen',
  'Betty', 'Helen', 'Sandra', 'Donna', 'Carol', 'Ruth', 'Sharon', 'Michelle',
  'Laura', 'Sarah', 'Kimberly', 'Deborah', 'Jessica', 'Shirley', 'Cynthia',
  'Angela', 'Melissa', 'Brenda', 'Amy', 'Anna'];

var lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Miller',
  'Davis', 'Garcia', 'Rodriguez', 'Wilson', 'Martinez', 'Anderson', 'Taylor',
  'Thomas', 'Hernandez', 'Moore', 'Martin', 'Jackson', 'Thompson', 'White',
  'Lopez', 'Lee', 'Gonzalez', 'Harris', 'Clark', 'Lewis', 'Robinson', 'Walker',
  'Perez', 'Hall', 'Young', 'Allen'];

describe('./lib/random/names', function () {

  var random = require('../../../lib');

  it('maleFirstName()', function () {

    expect(maleFirstNames).to.include((random.maleFirstName()));
  });

  it('femaleFirstName()', function () {

    expect(femaleFirstNames).to.include((random.femaleFirstName()));
  });

  it('lastName()', function () {

    expect(lastNames).to.include((random.lastName()));
  });

  it('name()', function () {

    expect((random.name()).split(' ').length).to.equal(2);
    expect((random.name('bob')).split(' ').length).to.equal(3);

    var name = random.name('middle').split(' ');

    expect(name.length).to.equal(3);
    expect(name[1]).to.equal('middle');
  });

});

