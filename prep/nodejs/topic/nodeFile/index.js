// const fs = require('fs')
// console.log("hello dhanjyoti");
// fs.writeFileSync("Dhan.txt", "djdj");
// console.log("YY",__dirname)

const http = require('http');
http.createServer((req, res)=>{
    res.write("<h2>hello dhanjyoti</h2>");
    res.end();
}).listen(4570);