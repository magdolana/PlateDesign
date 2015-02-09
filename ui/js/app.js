/**
 * loads sub modules and wraps them up into the main module
 * this should be used for top-level module definitions only
 */
define([
      'angular',
      'angular-route',
      'angular-bootstrap',
      'angular-animate',
      'bootstrap-file-input',
      'kendo-ui-core',
      './config',
      'flot.time',
      'flot.resize',
      'flot.stack',
      'flot.pie',
      'angular.easy-pie-chart',
      'jquery.slimscroll',
      'jquery-spinner',
      'jquery-steps',
      'jquery.sparkline',
      'gauge',
      'morris',
      'seiyria-bootstrap-slider',
      'angular-wizard',
      'textAngularSetup',
      'textAngular',
      'textAngular-sanitize',
      'toastr',
      'angular-loading-bar',
      'underscore',

      './UI/UICtrl',
      './UI/UIDirective',
      './UI/UIService',

      './shared/directives',
      './shared/localize',
      './shared/main',

      './Form/FormCtrl',
      './Form/FormDirective',
      './Form/FormValidation',

      './Table/TableCtrl',

      './Task/Task',


      './Chart/ChartCtrl',
      './Chart/ChartDirective'

    ], function (ng) {
      'use strict';
      return ng.module('lsseedApp', [
          'ngRoute',
          'ngAnimate',
          'ngSanitize',
          'ui.bootstrap',
          'kendo.directives',
          'easypiechart',
          'mgo-angular-wizard',
          'textAngular',
          'textAngularSetup',
          'angular-loading-bar',
          'app.ui.ctrls',
          'app.ui.directives',
          'app.ui.services',
          'app.controllers',
          'app.directives',
          'app.form.validation',
          'app.ui.form.ctrls',
          'app.ui.form.directives',
          'app.tables',
          'app.task',
          'app.localization',
          'app.chart.ctrls',
          'app.chart.directives',
          'app.constants'
      ]);
});