var net = require('net');

var port = 7468;

var msg = '';
var socket = new net.Socket();

var address = process.argv[2] ? process.argv[2] : "127.0.0.1";

socket.connect(port, address);

socket.on('data', function(data) {
	msg += data;
});

socket.on('end', function() {
	console.log(msg);
	socket.end();
});

