// Takes user to chatroom
// npm install socket.io

var express = require('express');

// create server
var server = express()
  , httpServer = require('http').createServer(server)
  , io = require('socket.io').listen(httpServer);


// for parsing form submissions
server.use(express.bodyParser());


// serve static files, e.g. JS
server.use(express.static(__dirname));



server.get('/', function(req, res) {
  var vars = {
    action: '/chatroom'
  };

  res.render(__dirname + '/views/form_with_action.jade', vars);
});


server.post('/chatroom', function(req, res) {
  res.cookie('username', req.body.username);

  res.render(__dirname + '/views/chatroom.jade');
});


var users = {};

// when client connects
io.sockets.on('connection', function (socket) {

  // when client registers itself
  socket.on('register', function(data) {
    // add to user list
    users[data.username] = true;
    // tell everyone else it has joined the room
    socket.broadcast.emit('client_joined', { username: data.username });
  });

  // get all users
  socket.on('get users', function(cb) {
    cb(Object.keys(users));
  });
});


// listen
httpServer.listen(3000);




