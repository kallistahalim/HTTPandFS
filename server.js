var http = require("http");
var fs = require("fs");

var PORT = 7000;

var server = http.createServer(handleRequest);

function handleRequest(req, res) {

    var path = req.url;

    switch (path) {

        case "/":
            return homePage(path, req, res);

        case "/food":
            return favoriteFood(path, req, res);

        case "/movie":
            return favoriteMovie(path, req, res);

    }
}

server.listen(PORT, function () {
    console.log("server listening on: http://localhost:" + PORT);
})

function homePage(url, req, res) {
    fs.readFile(__dirname + "/index.html", function (err, data) {
        res.writeHead(200, {
            'content-type': 'text/html'
        });
        res.end(data);
    })
}

function favoriteFood(url, req, res) {
    var myHTML = "<html><body>" + "<li>candy</li>" + "<li>cookie</li>" + "<li>ice cream</li>" + "<a href='/'>Go Back to Home Page </a>"+ "</body></html>";
    res.writeHead(200, {
        'content-type': 'text/html'
    });
    res.end(myHTML);
}

function favoriteMovie(url, req, res) {
    var myHTML = "<html><body>" + "<li>citizen kane</li>" + "<li>friends</li>" + "<li>big bang theory</li>" + "<a href='/'>Go Back to Home Page</a>"+ "</body></html>";
    res.writeHead(200, {
        'content-type': 'text/html'
    });
    res.end(myHTML);
}