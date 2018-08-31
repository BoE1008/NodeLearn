var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer((req,res)=>{
    var pathname = url.parse(req.url).pathname;
    fs.readFile(pathname.substr(1),(err,data)=>{
        if(err) {
            console.log(err);
            res.writeHead(400,{'Content-type':"text/html"})
        }else{
            res.writeHead(200,{"Content-type":"text/html"});
            res.write(data.toString());
        }
        res.end();
    })
}).listen(8001);

console.log('server is running')