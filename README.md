# generate-random-data

> A simple javascript utility for generating random data.

[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/bubkoo/generate-random-data/blob/master/LICENSE)

[![tag:?](https://img.shields.io/github/tag/bubkoo/generate-random-data.svg?style=flat-square)](https://github.com/bubkoo/generate-random-data/releases)
[![build:?](https://img.shields.io/travis/bubkoo/generate-random-data/master.svg?style=flat-square)](https://travis-ci.org/bubkoo/generate-random-data)
[![coverage:?](https://img.shields.io/coveralls/bubkoo/generate-random-data/master.svg?style=flat-square)](https://coveralls.io/github/bubkoo/generate-random-data)

[![npm:](https://img.shields.io/npm/v/generate-random-data.svg?style=flat-square)](https://www.npmjs.com/packages/generate-random-data)
[![downloads:?](https://img.shields.io/npm/dm/generate-random-data.svg?style=flat-square)](https://www.npmjs.com/packages/generate-random-data)
[![dependencies:?](https://img.shields.io/david/bubkoo/generate-random-data.svg?style=flat-square)](https://david-dm.org/bubkoo/generate-random-data)


Install with npm or Bower:

```shell
npm install generate-random-data
```

Use with node.js:

```javascript
var random = require('generate-random-data');
random.int(1, 99); // => 13
```

## Usage

This module provides many util function for generating random data:

- int(min, max) or integer(min, max)
- natural(min, max)
- float(iMin, iMax, dMin, dMax, precision)
- bool(min, max, seed) or boolean(min, max, seed)
- char(pool) or character(pool)
- str(pool, min, max) or string(pool, min, max)


[Changelog](https://github.com/bubkoo/generate-random-data/blob/master/HISTORY.md)

