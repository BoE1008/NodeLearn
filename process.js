process.nextTick(()=>{
    console.log('hello'); //2
})

console.log('world') //1

process.on('exit',()=>{
    console.log('end') //4
})

process.nextTick(()=>{
    if(typeof(window) === 'undefined') {
        console.log('node')  //3
    }else {
        console.log('browser')
    }
})