
// Don't forget to add your controller to ./index.js!

// You can include your own Services as parameters.
define(['./module'], function (app) {
  'use strict';
    app.controller('HelloController3', function ($scope,$stateParams,helloworldService) {
        //write your own controller here.
        $scope.name=helloworldService.helloKuan();
    });
});