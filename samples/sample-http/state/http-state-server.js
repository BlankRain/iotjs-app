var http = require('http');


var port = 8080;
var state = '';

var server = http.createServer(function(req, res) {
  var response = function() {
    res.writeHead(200, { 'Content-Type' : 'text/plain', 'Content-Length' : state.length });
    res.end(state);
  };

  if (req.method == 'GET') {
    response();
  } else if (req.method == 'POST') {
    var new_state = ''
    req.on('data', function(data) {
      new_state += data;
    });
    req.on('end', function() {
      state = new_state;
      response();
    });
  }
});

server.listen(port, 5);

