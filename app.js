const http = require('http');

const path = require('./routes');

const server = http.createServer(path);

server.listen(3000);