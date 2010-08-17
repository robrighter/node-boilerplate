//setup Dependencies
require('../lib/setup').ext( __dirname + "/../lib").ext( __dirname + "/../lib/express/support");
var connect = require('connect');
var sys = require('sys');
var io = require('socket.io-node');

//Setup Express
var server = require('express').createServer();
server.configure(function(){
    server.set('views', __dirname + '/views');
    server.use(connect.bodyDecoder());
    server.use(server.router);
    server.use(connect.staticProvider('./static'));
});
var port = 8765;
server.listen( port);

//Setup Socket.IO
var io = io.listen(server);
io.on('connection', function(client){
	console.log('Client Connected');
	client.on('message', function(message){
		client.broadcast(message);
		client.send(message);
	});
	client.on('disconnect', function(){
		console.log('Client Disconnected.');
	});
});

console.log('Listening on http://0.0.0.0:' + port )


//Routes
server.get('/', function(req,res){
  res.render('index.ejs', {
    locals : { 
              header: '#Header#'
             ,footer: '#Footer#'
             ,title : 'Page Title'
             ,description: 'Page Description'
             ,author: 'Your Name'
             ,analyticssiteid: 'XXXXXXX' 
            }
  });
});


