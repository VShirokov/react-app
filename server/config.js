const app = require('./app');
//const debug = require('debug')('server:server');
const http = require('http');
const syncDb = require('./db');

const port = process.env.PORT || '3636';
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => {
    console.log('Express server listening on port ' + server.address().port);
    syncDb();
});
