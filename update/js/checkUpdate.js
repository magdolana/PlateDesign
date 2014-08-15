checkUpdate = function(callback) {
    var url,
    _this = this;
    //Call check method. 
    //send version and plateformArch=win-ia32
    
    //
    url = "" + protocol + "://" + serverAddress + "/check?v=" + version + "&p=" + platformArch;
    
    return request.post(url).type('json').send({secret: secretString}).end(
            function(err, res){
                var toDownload;
                if (err != null){
                    console.log(err);
                    return callback(null, err);
                }
                if ((res.body.result != null) && res.body.result === 'ok') {
                    console.log(res.body.update);
                    toDownload = res.body.update;
                    toDownload.cookie = res.header['set-cookie'];
                    console.log("New version available! (v" + toDownload.version + ")");
                    console.log();
                    return callback(toDownload);
                }
                else {
                    allback(false);
                    return console.log(res);
                }
            }
    );
};