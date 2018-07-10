var http = require('http');

var PORT = 7000;

var secondPORT = 7500;



function handleRequest(request, response) {
    response.end("You are a Great Listener!" + request.url);
}

var server = http.createServer(handleRequest);

server.listen(PORT, function() {

    console.log("Server listening on: http://localhost:" + PORT);
});

function secondRequest(request, response) {
    response.end("You are a Horrible Listener!" + request.url);
}

var serverTwo = http.createServer(secondRequest);

serverTwo.listen(secondPORT, function() {

    console.log("Server listening on: http://localhost:" + secondPORT);
});