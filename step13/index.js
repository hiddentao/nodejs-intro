/**
 * Node JS intro
 *
 * This step covers:
 * - POST method
 * - handling form submissions
 */


var express = require('express');

var server = express();

// for parsing form submissions
server.use(express.bodyParser());


server.get('/', function(req, res) {

  var vars = {
    action: '/chatroom'
  };

  res.render(__dirname + '/views/form.jade', vars);

});


server.post('/chatroom', function(req, res) {

  res.render(__dirname + '/views/chatroom.jade', req.body);

});


// start
server.listen(3000);







