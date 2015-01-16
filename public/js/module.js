/**
 * if you get 'unknown {x}Provider' errors from angular, be sure they are
 * properly referenced in one of the module dependencies in the array.
 * You can see we bring in our own services and constants modules
 **/

define( ['angular','./config'], function (ng) {
  'use strict';
  return ng.module('app.home', ['app.constants']);
});