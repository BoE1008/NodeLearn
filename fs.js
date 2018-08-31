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

fs.mkdir('pub',()=>{
    fs.readFile('input.txt',(err,data)=>{
        fs.writeFile('./pub/write.txt',data,()=>{
            console.log('success')
        })
    })
})