//Install module
var     
        DEBUG_MODE              = true,                                                             //Debug switch
        applicationExecutable   = "Hedwig",                                                         //** need to configure **
        admzip                  = require('adm-zip'),                                               // zip module
        http                    = require('http'),                                                  // require http
        https                   = require('https'),                                                 // require https
        fs                      = require('fs'),                                                    //file system
        path                    = require('path'),                                                  //file path
        request                 = require('superagent'),                                            //  It's a module used to support client-side http library support.
        ProgressBar             = require('progress'),                                              // It's a module used to support everything we need for ProgressBar
        execFile                = require('child_process').execFile,        
        exec                    = require('child_process').exec,
        gui                     = window.require('nw.gui'),                                         //For node nw.exe
        win                     = gui.Window.get(),
        hostname                = (DEBUG_MODE==true) ?  "127.0.0.1":"update.gethedwig.com",      //** need to configure **
        port                    = "80",
        protocol                = (DEBUG_MODE==true) ?  "http":"https",
        url                     = "" + protocol + "://" + hostname + "/package.json",
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
        __APPDIR                = "",                                                               //update.exe or update.app dir
        __PARENTDIR,                                                                                //In windows is uppder dir. In Mac is current dir.
        __HEDWIGDIR,   
        __EXTRACTDIR,
        __DOWNLOADDIR,
        __TARGETDIR,
        versionFile,
        localVersion,
        _this = this,
        
        //All the Functions are below
        checkUpdate,
        downloadUpdate,
        extractError,
        extractUpdate,
        restartApp,
        run,
        showError;

    if (DEBUG_MODE) {
        win.showDevTools();
    }
    
    //*****************************************************
    //Get the __APPDIR & __PARENTDIR
    if(platform === 'osx' || platform === 'linux'){
        len=len-6;
        _len=_len-6;
    }
    for (index = _i = 0; _i < _len; index = ++_i) {
        frag = pathfrags[index];
        if (index < len - 1) {
            __APPDIR += frag + ds;
        }
    }
    __PARENTDIR = (platform === 'osx')?     path.join(__APPDIR,"..","..",".."):    path.join(__APPDIR, ".." + ds);
    //*****************************************************
    
    
    //*****************************************************
    //Get __HEDWIGDIR & __EXTRACTDIR & __DOWNLOADDIR
    if (platform === 'win' || platform === 'linux') {
        __HEDWIGDIR = __PARENTDIR;
        __EXTRACTDIR = __PARENTDIR;
        __DOWNLOADDIR = __APPDIR;
        versionFile = path.join(__PARENTDIR, "VERSION");
        if (DEBUG_MODE) {
            __EXTRACTDIR = path.join(__PARENTDIR, '..', 'test');
            __HEDWIGDIR = path.join(__PARENTDIR, '..', 'test');
            __DOWNLOADDIR = path.join(__PARENTDIR, '..', 'test');
        }
    }else{
        __EXTRACTDIR = path.join(__PARENTDIR);  //PARENTDIR is /app
        __TARGETDIR = path.join(__EXTRACTDIR,applicationExecutable+".app");//  /app/Hedwig.app
        if (DEBUG_MODE) {
            __EXTRACTDIR = path.join(__PARENTDIR,'test');// APP nodebob/app/test
            
        }
        __HEDWIGDIR   = path.join(__EXTRACTDIR);
        
        console.log("__APPDIR path:           ", __APPDIR);
        console.log("__PARENTDIR Path:        ", __PARENTDIR);
        console.log("__HEDWIGDIR Path:        ", __HEDWIGDIR);
        console.log("__EXTRACTDIR Path:       ", __EXTRACTDIR);
        console.log("__TARGETDIR Path:        ", __TARGETDIR);
        console.log("__DOWNLOADDIR Path:      ", __DOWNLOADDIR);
        
        versionFile   = path.join(__TARGETDIR, 'Contents', 'Resources', "VERSION");
        __DOWNLOADDIR = path.join(__TARGETDIR, 'Contents', 'Resources', 'Updates');
        if (!fs.existsSync(__DOWNLOADDIR)) {
            fs.mkdirSync(__DOWNLOADDIR);
        }
    }
    //*****************************************************

    if (fs.existsSync(versionFile)) {
        localVersion = fs.readFileSync(versionFile).toString();
    } else {
        localVersion = "0.0";
    }

console.log("Operation plantform:     ", platform);
console.log("__APPDIR path:           ", __APPDIR);
console.log("__PARENTDIR Path:        ", __PARENTDIR);
console.log("__HEDWIGDIR Path:        ", __HEDWIGDIR);
console.log("__EXTRACTDIR Path:       ", __EXTRACTDIR);
console.log("__TARGETDIR Path:        ", __TARGETDIR);
console.log("__DOWNLOADDIR Path:      ", __DOWNLOADDIR);
console.log("versionFile Path:        ", versionFile);
console.log("frag:", frag);
console.log("ds:", ds);
console.log("You are currently on version:", localVersion);


extractError = function(filepath) {
  $('.load-spinner').hide();
  $('.progress-bar').hide();
  showError("There was an error while extracting the update. \nMake sure you have sufficient write permissions, \nand that all instances of Circadio has been terminated. <a href=\"#\" class=\"retry-update\">Try again</a>.");
  return $('a.retry-update').click(function(e) {
    e.preventDefault();
    return extractUpdate(filepath);
  });
};

extractUpdate = function(filepath, err) {
    var msg;
    $('.load-spinner').show();                                                    //try to extract 
    $('.progress-bar').hide();                                                    
    if (err) {
        showError("Failed to download update, please try again later or contact support.");
    }
    if (err) {
        return console.log("Couldn't download update: ", err);
    }
    msg = "Extracting update";
    $('#description').text('');
    $('.update-text').text(msg);
    return setTimeout(function() {
        var zip;
        if (platform === 'osx') {
            return exec("unzip -o '" + filepath + "' -d '" + __EXTRACTDIR + "'", function(err, stdout, stderr) {
                if (err) {
                    console.log(err, stdout, stderr);
                    return extractError(filepath);
                } else {
                    $('.update-text').text('Cleaning up');
                    $('#description').text('Deleting downloaded update');
                    fs.unlinkSync(filepath);
                    $('#description').text('All done, restarting Hedwig!');
                    return restartApp();
                }
            });
        } else {
            zip = new admzip(filepath);
            try {
                zip.extractAllTo(__EXTRACTDIR, true);
            } catch (_error) {
                return extractError(filepath);
            }
            if (platform === 'linux') {
                fs.chmodSync(path.join(__HEDWIGDIR, applicationExecutable), '775');
            }
            $('.update-text').text('Cleaning up');
            $('#description').text('Deleting downloaded update..');
            fs.unlinkSync(filepath);
            $('#description').text('All done, restarting Hedwig!');
            return restartApp();
        }
    }, 220);
};

restartApp = function() {
    if (platform === 'win') {
        gui.Shell.openItem(path.join(__HEDWIGDIR, applicationExecutable + '.exe'));
    } else if (platform === 'osx') {
        console.log('starting', path.join(__HEDWIGDIR, applicationExecutable + '.app'));
        gui.Shell.openItem(path.join(__HEDWIGDIR, applicationExecutable + '.app'));
    } else {
        execFile(path.join(__HEDWIGDIR, applicationExecutable), [], {    
            cwd: __HEDWIGDIR
      });
    }
    if (!(DEBUG_MODE)) {    
        return gui.Window.get().close(true);
    }
};

showError = function(message) {
    $('.update-text').text("Failed to update");
    return $('#description').html(message);
};


downloadUpdate = function(download,callback) {
    var downloadPath;
    downloadPath = path.join(__DOWNLOADDIR, download.filename);
    return fs.open(downloadPath, 'w', function(err, destination) {
        var req;
        if (err) {
            console.log("could not open " + download.filename + " for downloading " + download.filename + ": " + err.message);
            callback(null, err);
            return;
        }
        
        if (DEBUG_MODE==false) {
            req = https.request({
                hostname: hostname,
                port: port,
                path: download.path,
                method: 'GET'
            });
        } else {
            req = http.request({
                hostname: hostname,
                port: port,
                path: download.path,
                method: 'GET'
            });
        }
        
        req.on('error', function(err) {
            fs.closeSync(destination);
            console.error("failed to get " + download.filename + " from " + hostname + ": " + err.message);
            return callback(null, err);
        }); 

        req.on('response', function(res) {
            var totalDownloaded;
            len = parseInt(res.headers['content-length'], 10);
            totalDownloaded = 0;
            $('#description').text("Downloading " + download.filename + " 0%");
            res.on('data', function(chunk) {
                var e, percent;
                if (chunk.length) {
                    totalDownloaded += chunk.length;
                    percent = Math.round((totalDownloaded / len) * 100);
                    $('.progress-bar .bar').css('width', percent + '%');
                    $('#description').text("Downloading " + download.filename + " " + percent + "%");
                    try {
                        return fs.writeSync(destination, chunk, 0, chunk.length, null);
                    } catch (_error) {
                    e = _error;
                        return showError("There was an error while downloading the update. Make sure you have sufficient write permissions.");
                    }
                }
            });
            return res.on('end', function() {
                console.log();
                fs.closeSync(destination);
                return callback(downloadPath);
            });
        });
        return req.end();
    });
};

//http://visionmedia.github.io/superagent/
checkUpdate = function(callback) {
    var _this = this,
    toDownload;
    
    return request.get(url).end(
            function(err, res){
                console.log("url    ",url);
                if(err!=null){
                    console.log(err);
                    return callback(null, err);
                }
                
                
                toDownload  =       (platform ==='win')  ?
                        res.body.update.win:
                                    (platform ==='osx')  ?
                        res.body.update.osx:
                                    
                                    (platform ==='linux')?
                                    (
                                            (process.arch ==='ia32')?
                                                res.body.update.linux_ia32:
                                                res.body.update.linux_x64
                                            )
                                        :
                        res.body.update.unknown;
                console.log("toDownload",toDownload);
                
                var remoteVersion= toDownload.version;
                console.log('Process arch =      ',process.arch);
                console.log('Local version:      ',localVersion);
                console.log('Remote version:     ',remoteVersion);
                if(localVersion<remoteVersion){
                    console.log("New version available! (v"+remoteVersion +")");
                    console.log("-------------------------------------------------");
                    return callback(toDownload);
                }
                else{
                    callback(false);
                    return console.log("No need for update");
                }
            }
            
    );
};

run = function() {
    return checkUpdate(
        function(download, err) {
            var msg;
            if (err ||!download) {
                msg = 'No updates available.. Exiting..';
                console.log(msg);
                showError(msg);
                $('.update-text').text("No updates available");
                if (err) {
                  console.log(err);
                }
                if (!(DEBUG_MODE)) {
                    gui.Window.get().close(true);
                }
                return;
            }
            $('.load-spinner').hide();
            $('.progress-bar').show();
            $('.update-text').html("Downloading version " + download.version);
            
            return downloadUpdate(download,extractUpdate);
        }
    );
};

module.exports = run;