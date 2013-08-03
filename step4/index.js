/**
 * Node JS intro
 *
 * This step covers:
 * - basic HTTP server
 */



var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200);
  res.end('Hello World');
}).listen(3000);


