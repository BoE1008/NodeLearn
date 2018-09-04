var fs = require('fs');

// console.log(1)
// var content = fs.readFile('input.txt','utf8',(err,data)=>{
//     console.log(data)
//     fs.writeFileSync('newInput.txt',data);
// }); //异步读取
// console.log(2)

// fs.unlink('newInput.txt',(err)=>{
//     console.log('success')
// })

// fs.mkdirSync('pub');

// fs.rmdirSync('pub')

// fs.mkdir('pub',()=>{
//     fs.readFile('input.txt',(err,data)=>{
//         fs.writeFile('./pub/write.txt',data,()=>{
//             console.log('success')
//         })
//     })
// })

// fs.readFile('证件照.jpg',(err,data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         var txt = data.toString('utf-8');
//         console.log(txt)
//     }
// })

// try{
//     var txt = fs.readFileSync('input.txt','utf-8');
//     console.log(txt);
// } catch(err) {
//     console.log(err)
// }

// fs.stat('input.txt',(err,stat)=>{
//     console.log(stat)
// })

var stat = fs.statSync('input.txt');
console.log(stat)