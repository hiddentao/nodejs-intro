/**
 * Node JS intro
 *
 * This step covers:
 * - bootstrap CSS
 * - rendering a form
 */


var express = require('express');

// create server
var server = express();


server.get('/', function(req, res) {

  res.render(__dirname + '/views/form.jade');

});

// start
server.listen(3000);



