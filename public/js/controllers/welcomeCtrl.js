
//Don't forget to add your controller to controllerList.js!

//You can inclue your own Services as parameter.
define(['../module'], function (app) {

  'use strict';
    app.controller('welcomeCtrl', function ($scope, $http, $window) {
        $scope.localVersion=$window.settings.appVersion;
        
    });
});