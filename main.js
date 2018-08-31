var events = require('events');

var eventEmitter = new events.EventEmitter();

var connectHandler = ()=>{
    console.log('connected');
    eventEmitter.emit('datagot');
}

eventEmitter.on('connect',connectHandler);

eventEmitter.on('datagot',()=>{
    console.log('got');
})

eventEmitter.emit('connect');

console.log('done')