/**
 * Node JS intro
 *
 * This step covers:
 * - template variables
 */


var express = require('express');

// create server
var server = express();


server.get('/', function(req, res) {

  var vars = {
    title: 'This is a title'
  };

  res.render(__dirname + '/views/hello_world.jade', vars);

});

// start
server.listen(3000);





