/**
 * Node JS intro
 *
 * This step covers:
 * - WebSockets
 * - Socket.IO, server-side and client-side
 * - npm install socket.io --save
 */


var express = require('express');

var server = express();

server.use(express.bodyParser());
server.use(express.static(__dirname));


server.get('/', function(req, res) {

  var vars = {
    action: '/chatroom'
  };

  res.render(__dirname + '/views/form.jade', vars);

});


server.post('/chatroom', function(req, res) {

  res.cookie('username', req.body.username);

  res.render(__dirname + '/views/chatroom.jade');

});




var httpServer = require('http').createServer(server)
  , io = require('socket.io').listen(httpServer);

var users = {};

// when client connects
io.sockets.on('connection', function (socket) {

  // when client registers itself
  socket.on('register', function(data) {
    // add to user list
    users[data.username] = true;

    // return the full list of users
    socket.emit('users', Object.keys(users));

    // tell everyone else it has joined the room
    socket.broadcast.emit('user joined', { username: data.username });
  });

});


// listen
httpServer.listen(3000);










