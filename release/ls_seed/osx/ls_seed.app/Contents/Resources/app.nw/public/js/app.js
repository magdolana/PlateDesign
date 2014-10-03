/**
 * loads sub modules and wraps them up into the main module
 * this should be used for top-level module definitions only
 */
define([
      'angular',
      './config',
      './controllerList'
    ], function (ng) {
      'use strict';
      return ng.module('lsseedApp', [
          'app.constants',
          'app.home',
          'ui.router'
      ]);
});