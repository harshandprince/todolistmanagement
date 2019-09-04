let express=require('express');
let mongoose=require('mongoose');
const request = require('request');
let errorHandler=require('./library/errorHandler');
let socket=require('./socket/socket');
let http=require('http');
let app=express();
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    next();
});
app.use(errorHandler.errorHandler);
let bodyparser=require('body-parser');
let route=require('./routes/routes');
let config=require('./config/config');


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
route.setRouter(app);
app.get('/names',(req,res)=>{
  request(
    { url: 'http://country.io/names.json' },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: err.message });
      }
      res.json(JSON.parse(body));
    }
  )
});
app.get('/phone',(req,res)=>{
  request(
    { url: 'http://country.io/phone.json' },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: err.message });
      }
      res.json(JSON.parse(body));
    }
  )
});
app.use(errorHandler.notFoundHandler);

const server=http.createServer(app);
const socketserver=socket.setSocket(server);

server.listen(config.port);
server.on('error',onError);
server.on('listening',onListening);

function onError(error) {
    if (error.syscall !== 'listen') {
      throw error;
    }
    switch (error.code) {
      case 'EACCES':
        console.log(error.code + ':elavated privileges required', 'serverOnErrorHandler', 10);
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.log(error.code + ':port is already in use.', 'serverOnErrorHandler', 10);
        process.exit(1);
        break;
      default:
        console.log(error.code + ':some unknown error occured', 'serverOnErrorHandler', 10);
        throw error;
    }
  }
  
  function onListening() {
    
    var addr = server.address();
    var bind = typeof addr === 'string'
      ? 'pipe ' + addr
      : 'port ' + addr.port;
    ('Listening on ' + bind);
    console.log('server listening on port' + addr.port, 'serverOnListeningHandler', 10);
    mongoose.connect(config.db.uri);
  
  process.on('unhandledRejection', (reason, p) => {
    console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
  });
}

mongoose.connection.on('open',(err)=>
{
    if(err){
        console.log('error occured in opening connection');
    }
    else{
    console.log('connection opened successfully');
    }
});
mongoose.connection.on('error',(err)=>
{
    console.log('error occured in mongoose connection');
});
