var events = require('events');

var eventEmitter = new events.EventEmitter();

eventEmitter.on('get',()=>{
    console.log('触发');
});

setInterval(()=>{
    eventEmitter.emit('get');
},2000);