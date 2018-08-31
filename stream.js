var fs = require('fs');

// var data = '';

// var readstream = fs.createReadStream('input.txt');
// readstream.setEncoding('UTF-8');
// readstream.on('data',(chunk)=>{
//     data+=chunk;
// });
// readstream.on('err',(err)=>{
//     console.log(err.stack);
// });
// readstream.on('end',()=>{
//     console.log(data);
// });
// console.log('完毕');

var myReadStream = fs.createReadStream('input.txt');
var myWriteStream = fs.createWriteStream('write1.txt');

// myReadStream.on('data',(chunk)=>{
//     myWriteStream.write(chunk)
// });

// myReadStream.on('end',()=>{
//     console.log('succcess')
// })

myReadStream.pipe(myWriteStream);
