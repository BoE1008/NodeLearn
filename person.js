var events = require('events');
var util = require('util');

var Person = function(name) {
  this.name = name;
}

util.inherits(Person,events.EventEmitter);

var xiaoming  = new Person('xiaoming');
var xiaohong = new Person('xiaohong');
var jack = new Person('jack');

var person = [xiaoming,xiaohong,jack];

person.forEach((item)=>{
  item.on('speak',(mes)=>{
    console.log(item.name + ' said ' + mes)
  })
})

xiaoming.emit('speak','hi');
xiaohong.emit('speak','hello');
jack.emit('speak','damn');
