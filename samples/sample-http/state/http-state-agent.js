var http = require('http');


var port = 8080;
var address = process.argv[2];
var method = process.argv[3];
var state = '';

var req_options = {
  host: address,
  port: port,
};

if (method.toUpperCase() == 'GET') {
  req_options.method = 'GET';
} else if (method.toUpperCase() == 'POST') {
  state = process.argv[4];
  req_options.method = 'POST';
  req_options.headers = { 'Content-Length': state.length };
} else {
  console.log('Invalid method: ' + method);
  process.exit(1);
}

var req = http.request(req_options, function(res) {
  var server_state = '';
  res.on('data', function(data) {
    server_state += data;	
  });
  res.on('end', function() {
    console.log('server state: ' + server_state);
  });
});


req.end(state);

