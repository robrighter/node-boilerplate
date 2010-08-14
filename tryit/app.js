var connect = require('../connect/lib/connect');
var server = connect.createServer();
server.use(connect.router(main));
var port = 8765;
server.listen( port);
console.log('Listening on http://0.0.0.0:' + port )

function main(app){
  app.get('/', function(req,res){
    var body = "HELLO"
    writeResponse(res, body);
  });
}


function writeResponse(res, body){
  res.writeHead(200, {
    'Content-Type': 'text/html',
     'Content-Length': body.length
  });
  res.end(body, 'utf8');
}