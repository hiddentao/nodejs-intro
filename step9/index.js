/**
 * Node JS intro
 *
 * This step covers:
 * - JADE templates, default view rendering engine for ExpressJS
 * - npm install jade --save
 * - __dirname - folder in which this file sits
 */


var express = require('express');

var server = express();

server.get('/', function(req, res) {

  res.render(__dirname + '/views/hello_world.jade');

});

// start
server.listen(3000);



