/**
 * loads sub modules and wraps them up into the main module
 * this should be used for top-level module definitions only
 */

define([
      'angular',
      './config',
      //'./../js/controllers/controllerList'
      './controllerList'
    ], function (ng) {
      'use strict';
      
      //return ng.module('app', [
      return ng.module('customersApp', [
          'app.constants',
          'app.home',
          'ui.router'//'ngRoute'
      ]);
      //return ng.module('app', [require('angular-ui-router')]  );
});