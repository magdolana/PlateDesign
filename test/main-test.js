// Find all the test files
var allTestFiles = [],
  TEST_FILE_MATCH_REGEXP = /_Spec\.js$/i;

Object.keys(window.__karma__.files).forEach(function (file) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    if (TEST_FILE_MATCH_REGEXP.test(file)) {
      allTestFiles.push(file);
    }
  }
});

// The paths are automatically generated with the grunt-bower-requirejs task
requirejs.config({
  baseUrl: '/base/public/js',
  paths: {
    angular: 'bower_components/angular/angular',
    'angular-route': 'bower_components/angular-route/angular-route',
    'angular-ui-router': 'bower_components/angular-ui-router/release/angular-ui-router',
    jquery: 'bower_components/jquery/dist/jquery',
    bootstrap: 'bower_components/bootstrap/dist/js/bootstrap',
    domReady: 'public/js/vendor/requirejs/require-domReady',
    'angular-animate': 'bower_components/angular-animate/angular-animate',
    'angular-cookies': 'bower_components/angular-cookies/angular-cookies',
    'angular-hotkeys': 'bower_components/angular-hotkeys/angular-hotkeys.min',
    'angular-mocks': 'bower_components/angular-mocks/angular-mocks',
    'angular-resource': 'bower_components/angular-resource/angular-resource',
    'angular-sanitize': 'bower_components/angular-sanitize/angular-sanitize',
    'angular-scenario': 'bower_components/angular-scenario/angular-scenario',
    'angular-touch': 'bower_components/angular-touch/angular-touch',
    boiler: 'bower_components/boiler/boiler',
    'jasmine-matchers': 'bower_components/jasmine-matchers/src/matchers',
    ngInfiniteScroll: 'bower_components/ngInfiniteScroll/build/ng-infinite-scroll',
    requirejs: 'bower_components/requirejs/require',
    'requirejs-domready': 'bower_components/requirejs-domready/domReady',
    async: 'bower_components/requirejs-plugins/src/async',
    depend: 'bower_components/requirejs-plugins/src/depend',
    font: 'bower_components/requirejs-plugins/src/font',
    goog: 'bower_components/requirejs-plugins/src/goog',
    image: 'bower_components/requirejs-plugins/src/image',
    json: 'bower_components/requirejs-plugins/src/json',
    mdown: 'bower_components/requirejs-plugins/src/mdown',
    noext: 'bower_components/requirejs-plugins/src/noext',
    propertyParser: 'bower_components/requirejs-plugins/src/propertyParser',
    'Markdown.Converter': 'bower_components/requirejs-plugins/lib/Markdown.Converter',
    text: 'bower_components/requirejs-plugins/lib/text',
    'requirejs-text': 'bower_components/requirejs-text/text'
  },
  shim: {
    angular: {
      exports: 'angular'
    },
    'angular-route': [
      'angular'
    ],
    'angular-ui-router': [
      'angular'
    ],
    bootstrap: {
      deps: [
        'jquery'
      ]
    },
    'jquery.alpha': [
      'jquery'
    ],
    'jquery.beta': [
      'jquery'
    ]
  },
  packages: [

  ]
});

// Define the properties down here, to avoid interfering with the grunt-bower-requirejs script
requirejs.config({
  deps: allTestFiles,
  callback: window.__karma__.start
});