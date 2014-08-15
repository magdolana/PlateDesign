

//Don't forget to add your controller to controllerList.js!

//You can inclue your own Services here.
define(['../module'], function (app) {
  'use strict';
    app.controller('HelloController3', function ($scope,$stateParams,helloworldService) {
        //write your own controller here.
        $scope.name=helloworldService.helloKuan();
    });
});