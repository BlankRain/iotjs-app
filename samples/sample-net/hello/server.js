var net = require('net');

var port = 7468;
var server = net.createServer();

server.listen(port, 5);

server.on('connection', function(socket) {
	socket.end('Hello IoT.js');
});

