/**
 * Node JS intro
 *
 * This step covers:
 * - using third-party packages
 * - using ExpressJS
 * - npm install express
 */


var express = require('express');

// create server
var server = express();


/* root path */
server.get('/', function(req, res) {

  /* Content-type automatically gets set */
  res.send(
    '<html>' +
      '<strong>Hello World</strong>' +
    '</html>'
  );
});

// start
server.listen(3000);



