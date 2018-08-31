var express = require('express');
var app = express();

app.get('/',(req,res)=>{
    res.send('hello world');
});

var server = app.listen(8082,()=>{
    var host = server.address().address;
    var port = server.address().port;

    console.log('express is running')
})