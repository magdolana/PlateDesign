/*
* Be sure you run: npm install requirejs.
* The API link below will help you.
* http://requirejs.org/docs/node.html
* http://requirejs.org/docs/api.html
* 
* requirejs.config
*/
requirejs.config({
   baseUrl: '',
    paths: {
    'angular':                  'public/js/vendor/angular/angular',
    'angular-route':            'public/js/vendor/angular/angular-route',
    'angular-ui-router':        'public/js/vendor/angular/angular-ui-router',
    'jquery':                   'public/js/UI/jquery.min',
    'bootstrap':                'public/js/UI/bootstrap',
    'domReady':                 'public/js/vendor/requirejs/require-domReady'
  },
  shim: {
    'angular': {
      'exports': 'angular'
    },
    'angular-route':        ['angular'],
    'angular-ui-router':    ['angular'],
    'bootstrap': {
        deps:['jquery']
    },
    "jquery.alpha":         ["jquery"],
    "jquery.beta":          ["jquery"]
  }
});

//After config requirejs, we need to call main.js
requirejs(['public/js/main']);
