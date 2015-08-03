var net = require('net');

var port = 7465;
var address = process.argv[2] ? process.argv[2] : '127.0.0.1';

var socket = net.Socket();

socket.connect(port, address);

var msg = '';
socket.on('data', function(data) {
	msg += data;
});

socket.on('end', function() {
	console.log(msg.length);
});

