var fs = require('fs');
var http = require('http');
var path = require('path');
var url = require('url');

var root = path.resolve(process.argv[2] || '.');
console.log('root dir' + root);

var server = http.createServer((req,res)=>{
    console.log(req);

    var pathname = url.parse(req.url).pathname;
    var filepath = path.join(root,pathname);

    fs.stat(filepath,(err,data)=>{
        if(!err && data.isFile()){
            console.log('200' + req.url);
            res.writeHead(200);
            fs.createReadStream(filepath).pipe(res);
        } else {
            console.log('404' + req.url);
            res.writeHead(404);
            res.end('404 not found');
        }
    })
});
server.listen(8009);

console.log('server is running at port 8009');