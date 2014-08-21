/**
 * Defines the main routes in the application.
 * The routes you see here will be anchors '#/' unless specifically configured otherwise.
 */

//config.js is used for including ui-router.
//define(['./public/js/app','./public/js/config'], function (app) {
define(['./app','./config'], function (app) {
  'use strict';
  app.config(function ($stateProvider, $urlRouterProvider) { 
      
      // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
    $stateProvider
        .state('home',
            {
                url:'/',
                templateUrl: 'views/welcome.html'
            })
        .state('hello1',
            {
                url:'/hello1',
                controller:  'HelloController1',
                templateUrl: 'views/hello1.html'
            })
        .state('hello2',
            {
                url:'/hello2',
                controller:  'HelloController2',
                templateUrl: 'views/hello2.html'
            })
        .state('hello3',
            {
                url:'/hello3',
                controller:  'HelloController3',
                templateUrl: 'views/hello3.html'
            })
        .state('about',
            {
                url:'/about',
                controller:  'UpdaterCtrl',
                templateUrl: 'views/about.html'
            })
            ;
      
      //Define a route that has a route parameter in it (:customerID)
  });
});


//UI-router example
/*
define(['./app','./config'], function (app) {
  'use strict';
  app.config(function ($stateProvider, $urlRouterProvider) { 
      
      // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
    $stateProvider
        .state('home',
            {
                url:'/',
                templateUrl: 'views/welcome.html'
            })
        .state('customers',
            {
                url:         '/customers',
                controller:  'CustomersController',
                templateUrl: 'views/customers.html'
            })
        .state('orders',
            {
                url:         '/orders',
                controller:  'OrdersController',
                templateUrl: 'views/orders.html'
            })            
        //Define a route that has a route parameter in it (:customerID)
        .state('customerorders',
            {
                url:         '/customerorders/:customerId',
                controller:  'CustomerOrdersController',
                templateUrl: 'views/customerOrders.html'
            });
      
      //Define a route that has a route parameter in it (:customerID)
  });
});
 */