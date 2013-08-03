$(function(){

  var username = document.cookie.match(/username=([^;]+)/)[1]  // cookie looks like this:   username=my_username

  var socket = io.connect();

  // register
  socket.emit('register', {
    username: username
  });

  // called once registered
  socket.on('users', function(data) {
    $('.userlist ul').empty();

    data.forEach(function(username) {
      addUser(username);
    });
  });

  // when a new user joins
  socket.on('user joined', function(data) {
    addUser(data.username);
  });
});


function addUser(username) {
  $('.userlist ul').append('<li>' + username + '</li>');
}


