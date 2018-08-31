var path = require('path');

var l = path.join('/foo', 'bar', 'baz/asdf/as', '/quux', '..');
console.log(l)

var s = path.parse('/home/user/dir/file.txt');

console.log(s)

var a = path.relative('C:\\orandea\\test\\aaa', 'C:\\orandea\\impl\\bbb');
console.log(a)
