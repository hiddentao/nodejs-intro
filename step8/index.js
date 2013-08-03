/**
 * Node JS intro
 *
 * This step covers:
 * - JSON response
 * - Express auto-sets content type correctly
 */


var express = require('express');

var server = express();

server.get('/', function(req, res) {

  var json = {
    result: 'success'
  };

  res.send(json);

});


// start
server.listen(3000);
