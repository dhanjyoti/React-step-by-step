// const express = require("express");
// const app = express();
// app.get('',(req, res)=>{
//     console.log("data name ==>>", req.query.name)
//     res.send(`Hello,  ${req.query.name}
//     <a href="/about">Go to about</a>
//     `);
// })

// app.get('/about',(req, res)=>{
//     res.send(`
//         <h1>Hello, this is about page<h1>
//         <input type="text" placeholder="type here"/>
//         <a href="/">Go to home</a>
//     `);
// })

// app.get('/help',(req, res)=>{
//     res.send("Hello, this is help page");
// })
// app.listen(5500);

const express = require('express');
const path = require('path')

const app = express();
const publicPath= path.join(__dirname, 'public');
// console.log(publicPath);
app.get('', (_, res)=>{
    res.sendFile(`${publicPath}/index.html`)
})
app.get('/about', (_, res)=>{
    res.sendFile(`${publicPath}/about.html`)
})
app.get('*', (_, res)=>{
    res.sendFile(`${publicPath}/404.html`)
})

// app.use(express.static(publicPath));

app.listen(5500);