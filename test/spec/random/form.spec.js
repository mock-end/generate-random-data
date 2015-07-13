/* global describe, it */

'use strict';

var expect = require('chai').expect;
var assert = require('chai').assert;

var langs = ['Afrikaans', 'Azərbaycan dili (Latın)', 'Bahasa Indonesia',
  'Bahasa Melayu', 'Bosanski (Latinica)', 'Català', 'Čeština', 'Cymraeg',
  'Dansk', 'Deutsch', 'Eesti', 'English (United Kingdom)',
  'English (United States)', 'Español', 'Euskara', 'Filipino', 'Français',
  'Gaeilge', 'Gàidhlig', 'Galego', 'Hausa', 'Hrvatski', 'Igbo', 'isiXhosa',
  'isiZulu', 'Íslenska', 'Italiano', 'K\'iche\'', 'Kinyarwanda',
  'Kiswahili', 'Latviešu', 'Lëtzebuergesch', 'Lietuvių', 'Magyar', 'Malti',
  'Māori', 'Nederlands', 'Norsk (Bokmål)', 'Norsk (Nynorsk)', 'O‘zbekcha (Lotin)',
  'Polski', 'Português (Brasil)', 'Português (Portugal)', 'Quechua', 'Română',
  'Sesotho sa Leboa', 'Setswana', 'Shqip', 'Slovenčina', 'Slovenščina',
  'Srpski (Srbija, Crna Gora)', 'Suomi', 'Svenska', 'Tiếng Việt', 'Türkçe',
  'Türkmençe', 'Valencià', 'Wolof', 'Yorùbá', 'Ελληνικά', 'Беларускі',
  'български', 'Кыргызча', 'Қазақ', 'Македонски', 'Монгол (Кирилл)', 'Русский',
  'српски (Босна и Херцеговина)', 'српски (Србија, Црна Гора)', 'Татарча',
  'Тоҷикӣ', 'Українська', 'Հայերեն', 'ქართული', 'עברית', 'اردو', 'اللغة العربية',
  'پنجابی', 'درى', 'سنڌي', 'فارسی', 'کوردیی ناوەڕاست', 'ئۇيغۇرچە', 'कोंकणी',
  'नेपाली', 'मराठी', 'हिंदी', 'অসমীয়া', 'বাংলা (বাংলাদেশ)', 'বাংলা (ভারত)', 'ਪੰਜਾਬੀ (ਗੁਰਮੁਖੀ)',
  ' ગુજરાતી', 'ଓଡ଼ିଆ', 'தமிழ்', 'తెలుగు', 'ಕನ್ನಡ ', 'മലയാളം', 'සිංහල', 'ไทย',
  'ខ្មែរ', 'ᏣᎳᎩ', 'ትግርኛ', 'አማርኛ', '한국어', '日本語', '简体中文', '繁體中文'];

var isp = [130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 145, 147,
  150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 180, 181,
  182, 183, 184, 185, 186, 187, 188, 189];

describe('./lib/random/boolean', function () {

  var random = require('../../../lib');

  it('guid()', function () {
    expect(random.guid()).to.have.length(36);
  });

  it('id()', function () {
    expect(random.id()).to.have.length(18);
  });

  it('lang()', function () {
    expect(langs).to.include((random.lang()));
  });

  it('zipcode()', function () {
    expect(random.zipcode(5)).to.have.length(5);
    expect(random.zipcode()).to.have.length(6);
  });

  it('mobile()', function () {
    expect(random.mobile()).to.have.length(11);
  });
});
