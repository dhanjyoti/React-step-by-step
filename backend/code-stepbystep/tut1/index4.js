const http = require('http');

function dataControl(req, res){
    res.write("<h1>Hello, This is dhanjyoti</h1>");
    res.end();
}

http.createServer(dataControl).listen(4500);