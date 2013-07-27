// template variables

var express = require('express');

// create server
var server = express();


server.get('/', function(req, res) {
  var vars = {
    title: 'This is data we are passing to the template'
  };

  res.render(__dirname + '/views/hello_world_vars.jade', vars);
});

// start
server.listen(3000);





