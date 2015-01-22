
// Don't forget to add your controller to ./index.js!

// You can include your own Services as parameters.
define(['./module'], function (app) {

  'use strict';
    app.controller('welcomeCtrl', function ($scope, $http, $window) {
        $scope.localVersion=$window.settings.appVersion;
        
    });
});