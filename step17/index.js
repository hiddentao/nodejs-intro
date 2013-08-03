/**
 * Node JS intro
 *
 * This step covers:
 * - Sending a chat message
 * - Show Developer Tool view of Web Socket messages
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

  res.render(__dirname + '/views/chatroom.jade', req.body);

});




var httpServer = require('http').createServer(server)
  , io = require('socket.io').listen(httpServer);

var users = {};

// when client connects
io.sockets.on('connection', function (socket) {

  var username = '';

  // when client registers itself
  socket.on('register', function(data) {
    // save username
    username = data.username;

    // add to user list
    users[username] = true;

    // return the full list of users
    socket.emit('users', Object.keys(users));

    // tell everyone else it has joined the room
    socket.broadcast.emit('user joined', {
      username: data.username
    });
  });


  // when client sends a new msg
  socket.on('new msg', function(msg, cb) {
    socket.broadcast.emit('new msg', {
      username: username,
      msg: msg
    });
    cb(); // return to calling client
  });

  socket.once('disconnect', function() {
    // remove from user list
    delete users[username];

    // tell everyone else it has left the room
    socket.broadcast.emit('user left', {
      username: username
    });
  });

});


// listen
httpServer.listen(3000);










