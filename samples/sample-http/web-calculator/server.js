var fs = require('fs');
var http = require('http');


var port = 8080;
var result = '';

var server = http.createServer(function(req, res) {
  if (req.url == '/') {
    onIndex(req, res);
  } else if (req.url == '/calculate') {
    onCalculate(req, res);
  } else {
    res.writeHead(500);
    res.end();
  }
});


function onIndex(req, res) {
  fs.readFile('index.html', function(err, data) {
    if (err) {
      res.writeHead(500);
      res.end();
    } else {
      res.writeHead(200);
      res.end(data);
    }
  });
}

function onCalculate(req, res) {
  var formula = '';

  req.on('data', function(data) {
    formula += data;
  });

  req.on('end', function() {
    res.writeHead(200);
    try {
      result = eval(formula);
    } catch (e) {
    }
    res.end(result);
  });
}

server.listen(port);
