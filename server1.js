var http = require('http');
var url = require('url');

function start() {
    function onRequest(req,res) {
        var pathname = url.parse(req.url).pathname;
        res.writeHead(200,{'Content-type':'text/plain'});
        res.write('hello world');
        res.end();
    }
};

http.createServer(start).listen(8801);

module.exports = start;