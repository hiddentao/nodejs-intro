$(function(){
  var username = document.cookie.match(/username=([^;]+)/)[1]  // cookie looks like this:   username=my_username

  var socket = io.connect();

  // register
  socket.emit('register', {
    username: username
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

  socket.on('client left', function(data) {
    deleteUser(data.username);
  });


  socket.on('new msg', function(data) {
    addMsg(data);
  });


  // when i enter a new msg
  $('.chatinput form').submit(function(e) {
    e.preventDefault();

    var msg = $('.chatinput input').val();

    socket.emit('new msg', msg, function() {
      addMsg({
        username: username,
        msg: msg
      });

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



