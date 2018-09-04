var url = require('url');

var u1 = url.parse('http://user:pass@host.com:8080/path/to/file?query=string#hash');

console.log(u1)