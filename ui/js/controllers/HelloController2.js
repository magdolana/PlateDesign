
// Don't forget to add your controller to ./index.js!

// You can include your own Services as parameters.
define(['./module'], function (app) {
  'use strict';
    app.controller('HelloController2', function ($scope, $stateParams, helloworldService) {
        //write your own controller here.
        helloworldService.hello("http://0.0.0.0:8080", "Robin").then(
            function(response) {
                $scope.message = response.message;
            },
            function(errorMessage) {
                $scope.message = "ErrorHC2";
            }
        );
    });
});