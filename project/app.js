require('../lib/setup').ext( __dirname + "/../lib").ext( __dirname + "/../lib/express/support");
var connect = require('connect');
var server = require('express').createServer(
  connect.staticProvider('./static')
);
var sys = require('sys');
var io = require('socket.io-node');

//server.use(connect.router(main));
var port = 8765;
server.listen( port);
console.log('Listening on http://0.0.0.0:' + port )

server.get('/', function(req,res){
  res.send("HELLO");
});

var io = io.listen(server);

io.on('connection', function(client){
	console.log('WE GOT A CONNECTION!!!!!!!');

	client.on('message', function(message){
		console.log('Recieved Message:\n' + sys.inspect(message));
		client.broadcast(message);
		client.send(message);
		console.log('Brodcasted the following message: ' + message);
	});

	client.on('disconnect', function(){
		console.log('WE GOT A DISCONNECT!!!!!!!!!!');
	});
});