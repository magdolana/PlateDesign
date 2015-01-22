var express = require('express');
var app = express();
var helloService = require('./helloworld');

app.get('/', function(req,res){
    res.send('Home');
})
app.get('/HelloWorld', function(req,res) {
    var s = new helloService();
    s.get(req, res);
});

var server = app.listen(8080, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('ls-seed listening at http://%s:%s', host, port);
});