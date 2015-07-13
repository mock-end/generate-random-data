var util = require('./util');

var random = {};

'boolean string number dx array datetime form network names article color'.split(' ')
  .forEach(function (name) {
    var module = require('./random/' + name);
    for (var methodName in module) {
      if (util.hasKey(module, methodName)) {
        random[methodName] = module[methodName];
      }
    }
  });

module.exports = random;
