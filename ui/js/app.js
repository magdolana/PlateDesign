/**
 * loads sub modules and wraps them up into the main module
 * this should be used for top-level module definitions only
 */
define([
      'angular',
      'angular-animate',
      'angular-aria',
      'angular-cookies',
      'angular-material',
      'angular-messages',
      'angular-resource',
      'angular-route',
      'angular-sanitize',
      'angular-touch',
      'xtk',
      /* Inject Custom Dependencies */
      './HelloWorld/HelloWorldCtrl',
      './HelloWorld/HelloWorldService',
      './vendors/XTK/xtkDirective',
      /* Inject AngularMaterial */
      './Users/UserController',
      './Users/UserService',
      './Users/starterApp'

    ], function (ng) {
      'use strict';
      return ng.module('lsseedApp', [
          'ngAnimate',
          'ngAria',
          'ngCookies',
          'ngMaterial',
          'ngMessages',
          'ngResource',
          'ngRoute',
          'ngSanitize',
          'ngTouch',
          /* Custom Modules */
          'app.helloworld.services',
          'app.helloworld.ctrls',
          'app.xtk.directives',
          /* AngularMaterial */
          'users',
          'starterApp'
      ]);
});