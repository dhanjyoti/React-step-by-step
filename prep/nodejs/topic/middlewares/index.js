const express = require('express');
const reqFilter = require('./middleWare');
const app = express();
const route = express.Router();


// app.use(reqFilter)

route.use(reqFilter);

app.get('/', (req, res)=>{
    res.send("Welcome to Home Page")
})
route.get('/users', (req, res)=>{
    res.send("Welcome to Users page")
})
app.get('/about', (req, res)=>{
    res.send("Welcome to About page")
})
route.get('/contact', (req, res)=>{
    res.send("Welcome to Contact page")
})

app.use('/', route);

app.listen(5500);