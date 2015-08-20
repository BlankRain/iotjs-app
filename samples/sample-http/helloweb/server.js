var http = require('http');
var fs = require('fs');


var port = 8080;
var htmlPath = './hello.html';

var server = http.createServer(function(req, res) {
  fs.readFile(htmlPath, function(err, data) {
    if (err) {
      res.writeHead(500);
      res.end(err.toString());
    } else {
      res.writeHead(200, {
        'Content-Type' : 'text/html',
        'Content-Length' : data.length
	  });
      res.end(data);
	}
  });
});

server.listen(port, 5);

