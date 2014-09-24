/*
 * core control module for update.
 * It may cause errors when you try to put process into tne console.
 */

define(['../module'], function (app) {
    'use strict';
    app.controller('updaterCtrl', function ($scope, $http, $window) {
        $scope.localVersion=$window.settings.appVersion;
        $scope.message="Checking for update...Please wait......";
        $scope.showUpdateButton= false;
        
        global.$=window.$;
        var
            DEBUG_MODE              = true,                                                             //Debug switch
            applicationExecutable   = "update",                                                         //** need to configure **
            path                    = require('path'),                                                  //file path
            execFile                = require('child_process').execFile,
            fs                      = require('fs'),
            gui                     = window.require('nw.gui'),                                         //For node nw.exe
            serverAddress           = (DEBUG_MODE == true) ?  "localhost:80":"update.getlsseed.com",      //** need to configure **
            protocol                = (DEBUG_MODE == true) ?  "http":"https",
            url                     = protocol + "://" + serverAddress+"/package.json",
            
            
            ds                      = process.platform.match(/^win/) ?"\\":"/",
            platform                = process.platform.match(/^win/) ?
                                        'win':
                                                process.platform.match(/^darwin/)?
                                        "osx":
                                                process.platform.match(/^linux/)?
                                        "linux":
                                                "unknown platform",
            pathfrags               = process.execPath.split(ds),
            len                     = pathfrags.length,
            _len                    = pathfrags.length,
            index,
            _i,
            frag,
            __APPDIR                = "",                                                               //ls-seed.exe or ls-seed.app dir
            __CHILDDIR,
            __UPDATEDIR;
            
            
        
        for (index = _i = 0; _i < _len; index = ++_i) {
            frag = pathfrags[index];
            if (index < len - 1) {
                __APPDIR += frag + ds;
            }
        }
        __CHILDDIR = path.join(__APPDIR, "update" + ds);
        
        if (platform === 'win' || platform === 'linux') {
            __UPDATEDIR = __CHILDDIR;
        }
        else{
            __UPDATEDIR = path.join(__APPDIR,"..","..","..");
        }
        console.log('pathfrags path:   ',pathfrags);
        console.log('__APPDIR path:    ',__APPDIR);
        console.log('__CHILDDIR path:  ',__CHILDDIR);
        console.log('__UPDATEDIR path: ',__UPDATEDIR);
        
        
        //Call update app                                                                               //** need to configure **
        var activateUpdate=function(){
            if(platform === 'win'){
                gui.Shell.openItem(path.join(__UPDATEDIR,applicationExecutable+ '.exe' ));
                console.log('starting', path.join(__UPDATEDIR, applicationExecutable + '.exe'));
            }else if( platform === 'osx'){
                    if (fs.existsSync(path.join(__UPDATEDIR, applicationExecutable + '.app'))) {
                        gui.Shell.openItem(path.join(__UPDATEDIR, applicationExecutable + '.app'));
                        console.log('starting',path.join(__UPDATEDIR, applicationExecutable + '.app'));
                    }
                    else{
                        console.log("Can't find the update.app. Activate failed!");
                    }
            }else{
                execFile(path.join(__UPDATEDIR,applicationExecutable),[],{
                    cwd:__UPDATEDIR
                });
                console.log('starting', path.join(__UPDATEDIR, applicationExecutable));
            }
        };
        
        $http.get(url)                                                                                  //** need to configure **
        .success(function (data) {
            var res = data.update;
            console.log('res',res);
            var isMasterRelease = (res.github === 'master');
            var remoteVersion ;
            if ( isMasterRelease ) {
                $scope.showUpdateButton = function() {
                    var result  =   (platform ==='win')  ?
                        res.win:
                                    (platform ==='osx')  ?
                        res.osx:
                                    (platform ==='linux')?
                                    (
                                            (process.arch ==='ia32')?
                                                res.linux_ia32:
                                                res.linux_x64
                                            )
                                        :
                                    "Platform not support";
                    if( result === "Platform not support"){
                        $scope.message= 'Platform not support. Will be supported later';
                        return false;
                        console.log('Platform not support. Will be supported later');                   //** need to configure **
                    }
                    remoteVersion=result.version;
                    if ($scope.localVersion < remoteVersion){
                        $scope.message="New version available v:"+remoteVersion+"!  Need Update!";
                        $scope.test=remoteVersion;
                        console.log("Local version:",$window.settings.appVersion);
                        console.log("New version available v:"+remoteVersion+"!  Need Update!");
                        return true;
                    }
                    else{
                        $scope.message="No need for update!";
                        console.log("No need for update!");
                        return false;
                    }
                };
            }
            $scope.updateNow=function(){
                if(confirm('Update require close the App. Continue?')){
                    activateUpdate();
                    if((DEBUG_MODE)){
                        return gui.Window.get().close(false);
                    }
                }
            };
        })
        .error(function (error) {
            $scope.message="Error checking if is a new version available";
            console.log('Error checking if is a new version available', error);
        });
    });
});