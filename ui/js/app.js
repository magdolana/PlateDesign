/**
 * loads sub modules and wraps them up into the main module
 * this should be used for top-level module definitions only
 */
define([
      'angular',
      'angular-ui-router',
      'angular-bootstrap',
      'kendo-ui-core',
      './config',
      './controllers/index',
      './services/index'
    ], function (ng) {
      'use strict';
      return ng.module('lsseedApp', [
          'app.controllers',
          'app.services',
          'app.constants',
          'ui.router',
          'ui.bootstrap',
          'kendo.directives'
      ]);
});