var fs = require('fs');
var file = require('./file.js');
var assessment = require('./assessment.js');
var review = require('./review.js');
var submit = require('./submit.js');


function getRouter(req, res) {
    if (req.url === '/') {
        file.homeHandler(req, res);
    } else if (req.url.search('/yourstudents') === 0) {
        file.viewHandler(req, res, 'page-students.html');
    } else if (req.url.search('/assessment') === 0) {
        //
    } else if (req.url.search('/review') === 0) {
        //
    } else if (req.url.indexOf('.') > -1) {
        file.resourceHandler(req, res);
    } else { // 404
        file.notFoundHandler(req, res);

    }
}

function postRouter(req, res) {
    if (req.url.search('/submit') === 0) {

    } else { // 404
        file.notFoundHandler(req, res);
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
