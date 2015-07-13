'use strict';


var util = require('./util');

var randoms = {};

'boolean string number dx array datetime form network names article color'.split(' ')
  .forEach(function (name) {
    var module = require('./random/' + name);
    for (var methodName in module) {
      if (util.hasKey(module, methodName)) {
        randoms[methodName] = module[methodName];
      }
    }
  });

module.exports = randoms;
