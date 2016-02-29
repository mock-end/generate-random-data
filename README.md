# generate-random-data

> Javascript utilities for generating random data. 

[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/bubkoo/generate-random-data/blob/master/LICENSE)

[![tag:?](https://img.shields.io/github/tag/bubkoo/generate-random-data.svg?style=flat-square)](https://github.com/bubkoo/generate-random-data/releases)
[![build:?](https://img.shields.io/travis/bubkoo/generate-random-data/master.svg?style=flat-square)](https://travis-ci.org/bubkoo/generate-random-data)
[![coverage:?](https://img.shields.io/coveralls/bubkoo/generate-random-data/master.svg?style=flat-square)](https://coveralls.io/github/bubkoo/generate-random-data)

[![npm:](https://img.shields.io/npm/v/generate-random-data.svg?style=flat-square)](https://www.npmjs.com/packages/generate-random-data)
[![downloads:?](https://img.shields.io/npm/dm/generate-random-data.svg?style=flat-square)](https://www.npmjs.com/packages/generate-random-data)
[![dependencies:?](https://img.shields.io/david/bubkoo/generate-random-data.svg?style=flat-square)](https://david-dm.org/bubkoo/generate-random-data)


Install with npm:

```shell
npm install generate-random-data
```

Use with node.js:

```javascript
var random = require('generate-random-data');
random.int(1, 99); // => 13
```

## Usage

This module provides many util functions for generating random data:

- int(min, max) or integer(min, max)
- natural(min, max)
- d?(max)
- float(iMin, iMax, dMin, dMax, precision)
- bool(min, max, seed) or boolean(min, max, seed)
- char(pool) or character(pool)
- str(pool, min, max) or string(pool, min, max)
- range(start, stop, step)
- pickOne(arr)
- pickSome(arr, count, shuffle)
- shuffle(arr)
- datetime(date, format)
- randomDate(min, max)
- formatDate(data, format)
- parseDate(...)
- now(unit, format)
- date(date, format)
- time(date, format)
- language() or lang()
- zipcode(length) or zip(length)
- mobile()
- guid()
- id()
- maleFirstName()
- femaleFirstName()
- lastName()
- name(middleName)
- ip()
- tld()
- domain(tld)
- email(domain)
- url()
- color()
- capitalize(word)
- upper(str)
- lower(str) 
- word(min, max)
- sentence(min, max)
- title(min, max)
- paragraph(min, max)
- lorem()
- lorems()



[Changelog](https://github.com/bubkoo/generate-random-data/blob/master/HISTORY.md)

