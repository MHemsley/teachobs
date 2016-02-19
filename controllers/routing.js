var fs = require('fs');

function getRouter(req, res) {
    if (req.url === '/') {
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
    } else if (req.url.search('/assessment') === 0) {
        //
    } else if (req.url.search('/review') === 0) {
        //
    } else if (req.url.indexOf('.') > -1) {
        var ext = req.url.split('.')[1];
        fs.readFile(__dirname + '/../public/' + req.url, function(error, content) {
            if (error) {
                console.log(error);
                res.writeHead(500, {'Content-Type': 'text/html'});
                res.end(error.toString('utf8'));
            } else {
                res.writeHead(200, {'Content-Type': 'text/' + ext});
                res.end(content.toString('utf8'));
            }
        });

    } else { // 404

    }
}

function postRouter(req, res) {
    if (req.url.search('/submit') === 0) {

    } else { // 404

    }
}

function router(req, res) {
    if (req.method === "GET") {
        getRouter(req, res);
    } else if (req.method === "POST") {
        postRouter(req, res);
    } else {
        res.writeHead(400, {'Content-Type': 'text/html'});
        res.end('Unsupported HTTP method');
    }
}

module.exports = {
    router: router
};
