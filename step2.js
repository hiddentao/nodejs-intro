// Basic req/res

var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200);
  res.end('Hello World\n');
}).listen(3000);


