/*
 * core control module for update.
 * It may cause errors when you try to put process into tne console.
 */

define(['../module'], function (app) {
    'use strict';
    app.controller('updaterCtrl', function ($scope, $http, $window) {
        $scope.localVersion=$window.settings.appVersion;
        $scope.serverMessage="Checking for update...Please wait......";
        $scope.showUpdateButton= false;
        var updatedServerVesion = true;
        var
            DEBUG_MODE              = true,                                                             //Debug switch                                        //For node nw.exe
            serverAddress           = (DEBUG_MODE == true) ?  "192.168.11.206:80":"update.getlsseed.com",      //** need to configure **
            protocol                = (DEBUG_MODE == true) ?  "http":"https",
            url                     = protocol + "://" + serverAddress+"/package.json";
        
        //Go to update web page                                                                             //** need to configure **
        var activateUpdate=function(){
            $scope.serverMessage="Please go to http://www.lsseed.com to download newest version";
        };
        
        $http.get(url)                                                                                  //** need to configure **
        .success(function (data) {
            var res = data.update;
            var isMasterRelease = (res.github === 'master');
            var remoteVersion;
            if ( isMasterRelease ) {
                $scope.showUpdateButton = function() {
                    var result  = res.android;
                    remoteVersion=result.version;
                    if ($scope.localVersion < remoteVersion){
                        if(updatedServerVesion)
                        {
                            $scope.serverMessage=remoteVersion+" available!";
                        }
                        console.log("Local version:",$window.settings.appVersion);
                        console.log("New version available v:"+remoteVersion+"!  Need Update!");
                        return true;
                    }
                    else{
                        $scope.serverMessage="No need for update!";
                        console.log("No need for update!");
                        return false;
                    }
                };
            }
        })
        .error(function (error) {
            $scope.serverMessage="Error checking if is a new version available";
            console.log('Error checking if is a new version available', error);
        });
        
        $scope.updateNow=function(){
            updatedServerVesion = false;
            if(confirm('Update require close the App. Continue?')){    
                
                $scope.serverMessage="Go to 192.168.11.206 to check out";
                
            }
            else{
                
                $scope.serverMessage=remoteVersion+" available!";
            }
        };
        
    });
});