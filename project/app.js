require('../lib/setup').ext( __dirname + "/../lib").ext( __dirname + "/../lib/express/support");
var connect = require('connect');
var sys = require('sys');
var io = require('socket.io-node');


var server = require('express').createServer();
server.configure(function(){
    server.set('views', __dirname + '/views');
    server.use(connect.bodyDecoder());
    server.use(server.router);
    server.use(connect.staticProvider('./static'));
});

var port = 8765;
server.listen( port);
console.log('Listening on http://0.0.0.0:' + port )

server.get('/test', function(req,res){
  res.render('index.ejs', {
    locals : { 
              header: 'This is a header'
             ,footer: 'This is a footer'
             ,title : 'A Test Page'
             ,description: 'Description Here'
             ,author: 'Your Name'
             ,analyticssiteid: 'XXXXXXX'
             ,info: 'And this is info' 
            }
  });
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