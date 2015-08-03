var net = require('net');

var port = 7465;
var server = net.createServer();

server.listen(port, 5);

server.on('connection', function(socket) {
	var i = 0;
	var j = 0;
	var limiti = 1000;
	var limitj = 10;

	var writing = function() {
		var ok;
		do {
			ok = socket.write("" + j);
			if (++j == limitj) {
				j = 0;
				if (++i == limiti) {
					socket.end();
					ok = false;
				}
			}
		} while (ok);
	};

	socket.on('drain', writing);

	writing();
});

