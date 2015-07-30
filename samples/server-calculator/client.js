var net = require('net');

var port = 7467;
var address = process.argv[2];
var formula = process.argv[3];

var socket = new net.Socket();

socket.connect(port, address, function() {
	socket.end(formula);
});

var res = '';

socket.on('data', function(data) {
	res += data;
});

socket.on('end', function() {
	console.log(formula + " = " + res);
});

