$(function(){
  var username = document.cookie.match(/username=([^;]+)/)[1]  // cookie looks like this:   username=my_username

  addUser(username);
});


function addUser(username) {
  $('.userlist ul').append('<li>' + username + '</li>');
}


