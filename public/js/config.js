/**
 * defines constants for application
 */
//angular-route necessary.
//define(['angular','angular-route'], function (ng) {
define(['angular','angular-ui-router'], function (ng) {
  'use strict';
  return ng.module('app.constants', [])
          .constant('CONFIG', {});
});