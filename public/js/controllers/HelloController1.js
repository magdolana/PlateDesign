
//Don't forget to add your controller to controllerList.js!

//You can inclue your own Services as parameter.
define(['../module'], function (app) {
  'use strict';
    app.controller('HelloController1', function ($scope,$stateParams,helloworldService) {
        $scope.name=helloworldService.helloSuhas();
        //Example to use $stateParams:
        //We can send customerId in routes.js and use $stateParams to get it.
        //var customerID = ($stateParams.customerId) ? parseInt($stateParams.customerId) : 0;
    });
});