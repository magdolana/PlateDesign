

//Don't forget to add your controller to controllerList.js!

//You can inclue your own Services as parameter.



define(['../module'], function (app) {

  'use strict';
    app.controller('UpdaterCtrl', function ($scope, $http, $window) {
        $scope.localVersion=$window.settings.appVersion;
        var serverAddress="127.0.0.1:80";
        var protocol="http";
        var url = "" + protocol + "://" + serverAddress+"/serverEnd/package.json"
        $scope.showUpdateButton= false;
        $scope.message="Checking for update";
        global.$=window.$;
        var //no need for process.
            platform,
            
            path = require('path'),
            gui =window.require('nw.gui'),
            win,    
            
            __UPDATEDIR,
            applicationExecutable,
            execFile,
            
            __CHILDDIR,
            updateDir,
            __APPDIR,
            ds,
            __EXTRACTDIR,
            DEBUG_MODE,
            DEV_MODE,
            
            len,
            pathfrags,
            index,
            _i,
            _len,
            frag;
            
            DEBUG_MODE=false;
            DEV_MODE=false;
            win = gui.Window.get();
            
            console.log('GUI test',gui);
            console.log('Win test',win);
            console.log('Path test',path);
            
        if (process.platform.match(/^win/)){
            platform = 'win';
        }
        else if (process.platform.match(/^darwin/)) {
            platform = 'osx';
        }
        else if (process.platform.match(/^linux/)) {
            platform = 'linux';
        }
        if (process.platform.match(/^win/)) {
            ds = "\\";
        } else {
            ds = "/";
        }
        
        //console.log('process test:',process); better not console process Otherwise
        // will call error
        console.log('platform test:',platform);
        console.log('ds test:',ds);
        
        applicationExecutable= "update";
        if (DEBUG_MODE || DEV_MODE) {
            win.showDevTools();
        }
        pathfrags = process.execPath.split(ds);
        __APPDIR='';
        len= pathfrags.length;
        _len = pathfrags.length;
        
        if(platform ==='osx' || platform ==='linux' ){
            len=len-6;
            _len=_len-6;
        }
        
        for (index = _i = 0; _i < _len; index = ++_i) {
            frag = pathfrags[index];
            if (index < len - 1) {
                __APPDIR += frag + ds;
            }
        }
        __CHILDDIR = path.join(__APPDIR, "update" + ds);
        
        if (platform === 'win' || platform === 'linux'||platform ==='osx') {
            __UPDATEDIR = __CHILDDIR;
        }
        // no idea why Mac need this
        else{
            updateDir = path.join(__APPDIR, '..', '..', '..', '..', '..');
            __EXTRACTDIR = path.join(updateDir, '..', '..', '..');
            __UPDATEDIR = path.join(__EXTRACTDIR, '..');
        }
        console.log('pathfrags test:',pathfrags);
        console.log('__APPDIR test:',__APPDIR);
        console.log('__CHILDDIR test:',__CHILDDIR);
        
        console.log('updateDir test:',updateDir);
        console.log('__EXTRACTDIR test:',__EXTRACTDIR);
        console.log('__UPDATEDIR test:',__UPDATEDIR);
        
        
        var activateUpdate=function(){
            if(platform === 'win'){
                gui.Shell.openItem(path.join(__UPDATEDIR,applicationExecutable+ '.exe' ));
                console.log('starting', path.join(__UPDATEDIR, applicationExecutable + '.exe'));
            }else if( platform === 'osx'){
                gui.Shell.openItem(path.join(__UPDATEDIR, applicationExecutable + '.app'));
            }else{
                execFile(path.join(__UPDATEDIR,applicationExecutable),[],{
                    cwd:__UPDATEDIR
                });
            }
            if(!(DEBUG_MODE||DEV_MODE)){
                return gui.Window.get().close(true);
            }
        };
        
        
        //For somereason http: get can't understand localhost
        $http.get("http://127.0.0.1:80/serverEnd/package.json")
        .success(function (data) {
            var res = data.update
            var isMasterRelease = res.github === 'master';
            
            if ( isMasterRelease ) {
                    console.log('Local Version', $scope.localVersion);
                    console.log('New version available', res.version);                  
                $scope.showUpdateButton = function() {
                    if ($window.settings.appVersion < res.version){
                        $scope.message="New version available v:"+res.version;
                        console.log("Need update!");
                        return true;
                    }
                    else{
                        $scope.message="Newest version!";
                        console.log("No need for update!");
                        return false;
                    }
                };
            }
            $scope.updateNow=function(){
                if(confirm('Update need to close the App. Continue?')){
                    activateUpdate();
                }
            };
        })
        .error(function (error) {
            console.log('Error checking if is a new version available', error);
        });
        

    });
});
/*
      var gui=require('nw.gui');
                        var appGUI={}
                        appGUI.getGUI=gui.Window.get();
                        
                        appGUI.close=function(){
                            var guiWin=this.getGUI;
                            guiWin.close(true);
                        }
                        appGUI.close();

var process,
            platform,
            gui,
            path,
            __UPDATEDIR,
            applicationExecutable,
            execFile,   


            __CHILDDIR,
            updateDir,
            __APPDIR,
            ds,
            __EXTRACTDIR,
            DEBUG_MODE,
            DEV_MODE,
            win,
            len,
            pathfrags,
            index,
            _i,
            _len,
            frag,
            __indexOf;

        __indexOf = [].indexOf || function(item) {
            for (var i = 0, l = this.length;i < l; i++){
                if (i in this && this[i] === item)
                    return i;
            }
            return -1;
        };

        DEBUG_MODE=false;
        DEV_MODE=false;//in order to shut down the program

        gui = window.requirejs('nw.gui');
        win = gui.Window.get(); 
        path = requirejs('path');
        console.log(gui);
        console.log(win);
        console.log(path);
        //get platform
        if (process.platform.match(/^win/)){
            platform = 'win';
        }
        else if (process.platform.match(/^darwin/)) {
            platform = 'osx';
        }
        else if (process.platform.match(/^linux/)) {
            platform = 'linux';
        }
        if (process.platform.match(/^win/)) {
            ds = "\\";
        } else {
            ds = "/";
        }
        applicationExecutable = "update";

        if (DEBUG_MODE || DEV_MODE) {
            win.showDevTools();
        }
        pathfrags = process.execPath.split(ds);
        __APPDIR = '';
        len = pathfrags.length;
        for (index = _i = 0, _len = pathfrags.length; _i < _len; index = ++_i) {
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
            updateDir = path.join(__APPDIR, '..', '..', '..', '..', '..');
            __EXTRACTDIR = path.join(updateDir, '..', '..', '..');
            __UPDATEDIR = path.join(__EXTRACTDIR, '..');
        }



        activateUpdate=function(){
            if(platform === 'win'){
                gui.Shell.openItem(path.join(__UPDATEDIR,applicationExecutable+ '.exe' ));
                console.log('starting', path.join(__UPDATEDIR, applicationExecutable + '.app'));
            }else if( platform === 'osx'){
                gui.Shell.openItem(path.join(__UPDATEDIR, applicationExecutable + '.app'));
            }else{
                execFile(path.join(__UPDATEDIR,applicationExecutable),[],{
                    cwd:__UPDATEDIR
                });
            }
            if(!(DEBUG_MODE)||DEV_MODE){
                return gui.Window.get().close(true);
            }
        };



 */