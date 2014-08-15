//This handles retrieving data and is used by controllers. 3 options (server, factory, provider) with 
//each doing the same thing just structuring the functions/data differently.
define(['../app'],function(app){
    'use strict';
    app.service('helloworldService', function () {
        //write your service here.
        this.helloSuhas = function () {
            return "Suhas";
        }; 
        this.helloRobin = function () {
            return "Robin";
        };
        this.helloKuan = function () {
            return "Kuan";
        };
        this.helloJeyaraman = function () {
            return "Jeyaraman";
        };
        this.helloRamesh = function () {
            return "Ramesh";
        };        
        this.helloYebio = function () {
            return "Yebio";
        };           
        
    });
    }
);
