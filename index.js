var http = require('http');
var routing = require('./controllers/routing.js');
var port = process.env.PORT || 8000;

http.createServer(routing.router).listen(port, function() {
    console.log('Listening on port ' + port + '...');
});
