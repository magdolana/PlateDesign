module.exports = function (config) {
  'use strict';
  config.set({
    autoWatch: true,
    basePath: '../',
    frameworks: ['jasmine', 'requirejs'],
    files: [
      {pattern: 'ls_seed_source/public/js/**/*.js', included: false},
      {pattern: 'test/unit/**/*.js', included: false},
      'test/main-test.js'
    ],
    reporters: ['progress', 'coverage'],
    coverageReporter: {
      dir: 'test/coverage'
    },
    preprocessors: {
      'public/js/controllers/*.js': ['coverage'],
      'public/js/services/*.js': ['coverage']
    },
    exclude: [],
    port: 8080,
    // Currently installed browser options: PhantomJS, Chrome, NodeWebkit
    browsers: ['Chrome'],
    plugins: [
      'karma-jasmine',
      'karma-nodewebkit-launcher',
      'karma-chrome-launcher',
      'karma-phantomjs-launcher',
      'karma-requirejs',
      'karma-coverage'
    ],
    singleRun: false,
    colors: true,
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO
  });
};