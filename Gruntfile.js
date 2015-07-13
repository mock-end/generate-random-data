/*
 * json-from-template
 *
 *
 * Copyright (c) 2014 bubkoo
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({

    paths: {
      test: 'test',
      coverage: '<%= paths.test %>/coverage'
    },

    clean: {
      coverage: ['<%= paths.coverage %>']
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        'lib/**/*.js',
        'test/**/*.js',
        '!<%= paths.coverage %>/**/*.js'
      ]
    },
    mochaTest: {
      test: {
        options: {
          reporter: 'spec',
          quiet: false,
          clearRequireCache: true
        },
        src: ['<%= paths.test %>']
      }
    },
    mocha_istanbul: {
      coverage: {
        src: '<%= paths.test %>',
        options: {
          mask: 'index.js',
          root: './lib',
          check: {
            statements: 90,
            branches: 90,
            functions: 90,
            lines: 90
          },
          mochaOptions: ['--reporter spec', '--check-leaks'], // ref: http://mochajs.org/#usage
          reportFormats: ['lcov'],                            // istanbul help report
          coverageFolder: '<%= paths.coverage %>'
        }
      }
    },
    istanbul_check_coverage: {
      check: {
        options: {
          coverageFolder: '<%= paths.coverage %>',
          check: {
            statements: 100,
            branches: 100,
            functions: 100,
            lines: 100
          }
        }
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-mocha-istanbul');


  grunt.registerTask('test', ['jshint', 'mochaTest']);
  grunt.registerTask('test-cov', ['clean:coverage', 'mocha_istanbul:coverage']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
