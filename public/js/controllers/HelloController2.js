

//Don't forget to add your controller to controllerList.js!

//You can inclue your own Services as parameter.
define(['../module'], function (app) {
  'use strict';
    app.controller('HelloController2', function ($scope,$stateParams,helloworldService) {
        //write your own controller here.
        $scope.name=helloworldService.helloRobin();
    });
});