/**
 * Node JS intro
 *
 * This step covers:
 * - setting response content type
 *
 */


var http = require('http');

http.createServer(function (req, res) {

  res.writeHead(200, {
    'Content-Type': 'text/html'
  });


  res.end(
    '<html>' +
      '<strong>Hello World</strong>' +
    '</html>'
  );

}).listen(3000);


