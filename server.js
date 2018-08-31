var http = require('http');
var fs = require('fs');

// http.createServer((req,res)=>{
//     res.writeHead(200,{'content-type':'text/plain'});
//     res.end('hello world');
// }).listen(8888);

// console.log("running")

var onRequest = (req,res)=>{
    res.writeHead(200,{'content-type':'text/html'});
    // var myJson = {
    //     name: 'BoE',
    //     job: 'webber',
    //     age: 25
    // }
    // res.end(JSON.stringify(myJson));
    var myHtml = fs.createReadStream('index.html');
    myHtml.pipe(res)
}

http.createServer(onRequest).listen(8002);