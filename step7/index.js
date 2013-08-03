/**
 * Node JS intro
 *
 * This step covers:
 * - package.json, use to auto-install dependencies
 * - npm install express --save
 */


var express = require('express');

// create server
var server = express();


server.get('/', function(req, res) {

  res.send(
    '<html>' +
      '<strong>Hello World</strong>' +
    '</html>'
  );
});

// start
server.listen(3000);



