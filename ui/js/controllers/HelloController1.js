
// Don't forget to add your controller to ./index.js!

// You can include your own Services as parameters.
define(['./module'], function (app) {
  'use strict';
    app.controller('HelloController1', function ($scope, $stateParams, helloworldService) {

        helloworldService.hello("http://0.0.0.0:8080", "Suhas").then(
            function(response) {
                $scope.message = response.message;
            },
            function(errorMessage) {
                $scope.message = "ErrorHC1";
            }
        );
        //$scope.name=helloworldService.helloSuhas();
        //Example to use $stateParams:
        //We can send customerId in routes.js and use $stateParams to get it.
        //var customerID = ($stateParams.customerId) ? parseInt($stateParams.customerId) : 0;
    });
});