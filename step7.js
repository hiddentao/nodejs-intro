// npm install jade

var express = require('express');

// create server
var server = express();


server.get('/', function(req, res) {
  res.render(__dirname + '/views/hello_world.jade');
});

// start
server.listen(3000);





