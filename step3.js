// test/html


var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(
    '<html>' +
      '<strong>Hello World</strong>' +
    '</html>'
  );
}).listen(3000);


