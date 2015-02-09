/**
 * requirejs.config
 *
 * The paths for third party libraries are automatically generated using the grunt-bower-requirejs task
 * ('grunt updatePaths').  The task is set to run after installing a new bower component in the .bowerrc post install script.
 */
requirejs.config({
    paths: {
        angular: 'bower_components/angular/angular',
        'angular-animate': 'bower_components/angular-animate/angular-animate',
        'angular-cookies': 'bower_components/angular-cookies/angular-cookies',
        'angular-hotkeys': 'bower_components/angular-hotkeys/angular-hotkeys.min',
        'angular-mocks': 'bower_components/angular-mocks/angular-mocks',
        'angular-resource': 'bower_components/angular-resource/angular-resource',
        'angular-route': 'bower_components/angular-route/angular-route',
        'angular-sanitize': 'bower_components/angular-sanitize/angular-sanitize',
        'angular-scenario': 'bower_components/angular-scenario/angular-scenario',
        'angular-touch': 'bower_components/angular-touch/angular-touch',
        'angular-ui-router': 'bower_components/angular-ui-router/release/angular-ui-router',
        boiler: 'bower_components/boiler/boiler',
        bootstrap: 'bower_components/bootstrap/dist/js/bootstrap',
        'jasmine-matchers': 'bower_components/jasmine-matchers/src/matchers',
        jquery: 'bower_components/jquery/dist/jquery',
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
        'requirejs-text': 'bower_components/requirejs-text/text',
        'kendo-ui-core': 'bower_components/kendo-ui-core/js/kendo.ui.core.min',
        'angular-bootstrap': 'bower_components/angular-bootstrap/ui-bootstrap-tpls',
        'angular-loading-bar': 'bower_components/angular-loading-bar/build/loading-bar',
        'angular-wizard': 'bower_components/angular-wizard/dist/angular-wizard',
        'bootstrap-file-input': 'bower_components/bootstrap-file-input/bootstrap.file-input',
        'bootstrap-sass-official': 'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap',
        flot: 'bower_components/flot/jquery.flot',
        'flot.time': 'bower_components/flot/jquery.flot.time',
        'flot.pie': 'bower_components/flot/jquery.flot.pie',
        'flot.resize': 'bower_components/flot/jquery.flot.resize',
        'flot.stack': 'bower_components/flot/jquery.flot.stack',
        'flot.tooltip': 'bower_components/flot.tooltip/js/jquery.flot.tooltip',
        'font-awesome': 'bower_components/font-awesome/fonts/*',
        gauge: 'bower_components/gauge.js/dist/gauge.min',
        holderjs: 'bower_components/holderjs/holder',
        'jquery-spinner': 'bower_components/jquery-spinner/dist/jquery.spinner',
        'jquery-steps': 'bower_components/jquery-steps/build/jquery.steps',
        'jquery.easing': 'bower_components/jquery.easing/js/jquery.easing',
        'jquery.easy-pie-chart': 'bower_components/jquery.easy-pie-chart/dist/jquery.easypiechart',
        'angular.easy-pie-chart': 'bower_components/jquery.easy-pie-chart/dist/angular.easypiechart.min',
        'jquery.slimscroll': 'bower_components/jquery.slimscroll/jquery.slimscroll.min',
        'jquery.sparkline': 'vendors/jquery.sparkline.min',
        morris: 'bower_components/morris.js/morris',
        'seiyria-bootstrap-slider': 'bower_components/seiyria-bootstrap-slider/js/bootstrap-slider',
        textAngular: 'bower_components/textAngular/src/textAngular',
        'textAngular-sanitize': 'bower_components/textAngular/src/textAngular-sanitize',
        textAngularSetup: 'bower_components/textAngular/src/textAngularSetup',
        'rangy-selectionsaverestore': 'bower_components/rangy-official/rangy-selectionsaverestore',
        toastr: 'bower_components/toastr/toastr',
        underscore: 'bower_components/underscore/underscore'
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
        'angular-bootstrap': [
            'angular'
        ],
        'angular-animate': [
            'angular'
        ],
        'angular-wizard': [
            'angular'
        ],
        'angular-loading-bar': [
            'angular'
        ],
        'angular-sanitize': [
            'angular'
        ],
        flot: {
            deps: [
                'jquery'
            ],
            exports: '$.plot'
        },
        'flot.time': [
            'flot'
        ],
        'flot.resize': [
            'flot'
        ],
        'flot.pie': [
            'flot'
        ],
        'flot.stack': [
            'flot'
        ],
        morris: {
            deps: [
                'jquery'
            ],
            exports: 'Morris'
        },
        textAngular: [
            'angular'
        ],
        textAngularSetup: [
            'angular'
        ],
        'textAngular-sanitize': [
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
        ],
        'jquery.easy-pie-chart': [
            'jquery'
        ],
        'jquery.sparkline': [
            'jquery'
        ],
        'jquery.slimscroll': [
            'jquery'
        ],
        'jquery-spinner': [
            'jquery'
        ],
        'kendo-ui-core': {
            deps: [
                'jquery',
                'angular'
            ]
        },
        underscore: {
            exports: '_'
        }
    },
    packages: [

    ]
});

//After config requirejs, we need to call main.js
requirejs(['main']);
