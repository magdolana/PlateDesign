/**
 * Defines the main routes in the application.
 * The routes you see here will be anchors '#/' unless specifically configured otherwise.
 */

define(['./app','./config'], function (app) {
    'use strict';
    app.config(function ($stateProvider, $urlRouterProvider) {
    // For any unmatched url, redirect to state 'home'
    $urlRouterProvider.otherwise("/");
    $stateProvider
        .state('home',
            {
                url:'/',
                controller:  'welcomeCtrl',
                templateUrl: 'public/views/welcome.html'
            })
        .state('hello1',
            {
                url:'/hello1',
                controller:  'HelloController1',
                templateUrl: 'public/views/hello1.html'
            })
        .state('hello2',
            {
                url:'/hello2',
                controller:  'HelloController2',
                templateUrl: 'public/views/hello2.html'
            })
        .state('hello3',
            {
                url:'/hello3',
                controller:  'HelloController3',
                templateUrl: 'public/views/hello3.html'
            })
        .state('about',
            {
                url:'/about',
                controller:  'updaterCtrl',
                templateUrl: 'public/views/about.html'
            })
            ;
  });
});