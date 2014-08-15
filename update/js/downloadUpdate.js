downloadUpdate = function(download, callback) {
    var downloadPath;
    downloadPath = path.join(__DOWNLOADDIR, download.filename);
    return fs.open(downloadPath, 'w', function(err, destination) {
      var req;
      if (err) {
        console.log("could not open " + download.filename + " for downloading " + download.filename + ": " + err.message);
        callback(null, err);
        return;
      }
      if (download.protocol === 'https') {
        req = https.request({
          hostname: download.host,
          port: download.port,
          path: download.path,
          headers: {
            Cookie: download.cookie
          },
          method: 'GET'
        });
      } else {
        req = http.request({
          hostname: download.host,
          port: download.port,
          path: download.path,
          headers: {
            Cookie: download.cookie
          },
          method: 'GET'
        });
      }
      req.on('error', function(err) {
        fs.closeSync(destination);
        console.error("failed to get " + download.filename + " from " + download.host + ": " + err.message);
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