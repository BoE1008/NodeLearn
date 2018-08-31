//创建一个长度为10，且用0填充的buffer
const buf1 = Buffer.alloc(10);

//创建一个长度为10，且用0x1填充的buffer
const buf2 = Buffer.alloc(10,1);

const buf3 = Buffer.allocUnsafe(10);

const buf4 = Buffer.from([1,2,3]);

const buf5 = Buffer.from('test');

const buf6 = Buffer.from('test','latin1');

console.log(buf1);
console.log(buf2);
console.log(buf3);
console.log(buf4);
console.log(buf5);
console.log(buf6);




