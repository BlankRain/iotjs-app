var net = require('net');

var port = 7467;
var server = net.createServer({
	allowHalfOpen: true
});


server.listen(port, 5);

server.on('connection', function(socket) {
	var formula = '';

	socket.on('data', function(data) {
		formula += data;
	});

	socket.on('end', function() {
		socket.end("" + eval(formula));
	});
});

