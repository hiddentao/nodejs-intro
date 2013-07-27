// Renders a form

var express = require('express');

// create server
var server = express();


// for parsing form submissions
server.use(express.bodyParser());



server.get('/', function(req, res) {
  var vars = {
    action: '/signup'
  };

  res.render(__dirname + '/views/form_with_action.jade', vars);
});

server.post('/signup', function(req, res) {
  res.render(__dirname + '/views/form_submitted.jade', req.body);
});


// start
server.listen(3000);





