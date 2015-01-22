/*
 * core control module for update.
 * It may cause errors when you try to put process into the console.
 */
define(['./module'], function (app) {
    'use strict';
    app.controller('updaterCtrl', function ($scope, $window) {
        $scope.localVersion=$window.settings.appVersion;
        $scope.message="Checking for update...Please wait......";
        
    });
});