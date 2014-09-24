/**
 * defines constants for application
 * You have to include angular-ui-router here otherwise it won't work. 
*/
define(['angular','angular-ui-router'], function (ng) {
  'use strict';
  return ng.module('app.constants', [])
          .constant('CONFIG', {});
});