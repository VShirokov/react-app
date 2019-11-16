const app = require('./app');
//const debug = require('debug')('server:server');
const http = require('http');

const port = process.env.PORT || '3636';
app.set('port', port);

const server = http.createServer(app);
server.listen(port);
//server.on('error', onError);
//server.on('listening', onListening);
