var hello = require('../lib/HelloWorld');

var HelloWorld = function HelloWorld() {
    console.log("creating new helloworld service");
    this.get = function (req, res) {
        hello(function (err, data) {
            res.send(data);
        });
    }
};

module.exports = HelloWorld;