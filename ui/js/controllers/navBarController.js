/**
 * Created by james on 1/28/15.
 */
define(['./module'], function (app) {
    'use strict';
    app.controller('navBarController', function ($scope, $stateParams, $log) {
        $log.log('initiationing navbarcontroller');
        $scope.toolbarOptions = {
            items: [
                {
                    type: "button",
                    text: "Home"
                },
                {
                    type: "button",
                    text: "Test Page 1",
                    overflow: "always"
                },
                {
                    type: "button",
                    text: "Test Page 2",
                    overflow: "always"
                },
                {
                    type: "button",
                    text: "Test Page 3",
                    overflow: "always"
                },
                {type: "separator" },
                {
                    type: "button",
                    text: "settings",
                    overflow: "always"
                }
            ]
        };
    });
});