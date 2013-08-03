/**
 * Node JS intro
 *
 * This step covers:
 * - static files - css, js
 * - cookies
 */


var express = require('express');

var server = express();

// for parsing form submissions
server.use(express.bodyParser());

// serve static files, e.g. JS
server.use(express.static(__dirname));


server.get('/', function(req, res) {

  var vars = {
    action: '/chatroom'
  };

  res.render(__dirname + '/views/form.jade', vars);

});


server.post('/chatroom', function(req, res) {

  res.cookie('username', req.body.username);

  res.render(__dirname + '/views/chatroom.jade', req.body);

});


// start
server.listen(3000);





