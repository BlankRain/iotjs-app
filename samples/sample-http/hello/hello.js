var http = require('http');


var port = 8080;
var server = http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type' : 'text/plain' });
  res.end('Hello IoT.js');
});

server.listen(port, 5);

