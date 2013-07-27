// JSON

var express = require('express');

// create server
var server = express();


server.get('/', function(req, res) {
  var json = {
    result: 'success'
  };

  res.send(json);
});

// start
server.listen(3000);



