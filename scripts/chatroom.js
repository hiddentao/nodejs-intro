$(function(){
  var socket = io.connect();

  // register
  socket.emit('register', {
    username: document.cookie.match(/username=([^;]+)/)[1]  // cookie looks like this:   username=my_username
  });

  // get users
  socket.emit('get users', function(data) {
    $('.userlist ul').empty();

    data.forEach(function(username) {
      addUser(username);
    });
  });

  socket.on('client joined', function(data) {
    addUser(data.username);
  });
});


function addUser(username) {
  $('.userlist ul').append('<li>' + username + '</li>');
}


