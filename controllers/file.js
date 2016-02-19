var fs = require('fs');

function homeHandler(req, res) {
    fs.readFile(__dirname + '/../views/index.html', function(error, content) {
        if (error) {
            console.log(error);
            res.writeHead(500, {'Content-Type': 'text/html'});
            res.end(error.toString('utf8'));
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(content.toString('utf8'));
        }
    });
}

function viewHandler(req, res, filename) {
    fs.readFile(__dirname + '/../views/' + filename, function(error, content) {
        if (error) {
            console.log(error);
            res.writeHead(500, {'Content-Type': 'text/html'});
            res.end(error.toString('utf8'));
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(content.toString('utf8'));
        }
    });
}

function resourceHandler(req, res) {
    var ext = req.url.split('.')[1];
    fs.readFile(__dirname + '/../' + req.url, function(error, content) {
        if (error) {
            console.log(error);
            res.writeHead(500, {'Content-Type': 'text/html'});
            res.end(error.toString('utf8'));
        } else {
            res.writeHead(200, {'Content-Type': 'text/' + ext});
            res.end(content.toString('utf8'));
        }
    });
}

function notFoundHandler(req, res) {
    fs.readFile(__dirname + '/../views/404.html', function(error, content) {
        if (error) {
            console.log(error);
            res.writeHead(500, {'Content-Type': 'text/html'});
            res.end(error.toString('utf8'));
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(content.toString('utf8'));
        }
    });
}

module.exports = {
    homeHandler: homeHandler,
    viewHandler: viewHandler,
    resourceHandler: resourceHandler,
    notFoundHandler: notFoundHandler,
};
