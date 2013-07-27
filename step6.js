// View - but not yet working because no jade installed

var express = require('express');

// create server
var server = express();


server.get('/', function(req, res) {
  // __dirname = folder in which this file is
  res.render(__dirname + '/views/hello_world.jade');
});

// start
server.listen(3000);



