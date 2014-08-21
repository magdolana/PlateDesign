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