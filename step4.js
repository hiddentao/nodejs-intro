// npm install express

var express = require('express');

// create server
var server = express();


server.get('/', function(req, res) {

/*
  Don't need this here

  res.setHeader('Content-Type', 'text/html');
*/

  res.send(
    '<html>' +
      '<strong>Hello World</strong>' +
      '</html>'
  );
});

// start
server.listen(3000);



