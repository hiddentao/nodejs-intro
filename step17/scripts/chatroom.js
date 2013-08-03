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

  // when a user leaves
  socket.on('user left', function(data) {
    deleteUser(data.username);
  });

  // when a new msg has been sent
  socket.on('new msg', function(data) {
    addMsg(data);
  });


  // when i enter a new msg
  $('.chatinput form').submit(function(e) {
    e.preventDefault();

    // get the msg
    var msg = $('.chatinput input').val();

    // send to server
    socket.emit('new msg', msg, function() {
      // now add my msg to display
      addMsg({
        username: username,
        msg: msg
      });

      // clear out the msg input
      $('.chatinput input').val(''); // clear input
    });
  });

});


function addUser(username) {
  $('.userlist ul').append('<li>' + username + '</li>');
}


function addMsg(data) {
  $('.chatbox ul').append('<li><strong>' + data.username + ':</strong> ' + data.msg + '</li>');
}


function deleteUser(username) {
  $('.userlist li').each(function(index, elem) {
    var $elem = $(elem);

    if ($elem.text() === username) {
      $elem.remove();
      return false;
    }
  });
}






