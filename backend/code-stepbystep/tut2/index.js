const colors = require('colors');
const http = require('http');
const data = require('./data')

// let name = "Dhan";
// (async () => {
//     const chalk = await import('chalk');
//     // console.log("hello".red);
//     // console.log(chalk.default.bgBlue("Hello Dj"));
// })();

// console.log(colors.cyan("Hello world"), name)
// console.log("hello".cyan)

const server = http.createServer((req, res)=> {
    res.writeHead(200, {'Content-Type':'application\json'});
    res.write(JSON.stringify(data));
    res.end();
});

server.listen(8000, ()=> {
    console.log(colors.yellow("Server is listening in port 8000"))
})