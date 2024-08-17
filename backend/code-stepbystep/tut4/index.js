// let a = 20;
// let b = 0;

// let waitingData = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         b = 30;
//         resolve(30)
//     }, 2000)
// })

// waitingData.then((data)=>{
//     console.log(a+data)
// })
// console.log(a+b)


// const express = require("express");
// const app = express();
// app.get('', (request, response)=>{
//     // console.log("data sent by browser ==>>", request.query.name)
//     // response.send("hello, this is home page");
//     // response.send("Welcome, " + request.query.name);
//     response.send(`
//         <h1>hello, this is home page</h1><a href="/about">Go to about page</a>
//     `);
// })

// app.get('/about', (request, response)=>{
//     response.send(`
//         <input type="text" placeholder="User name" value="${request.query.name}" />
//         <a href="/">Go to home page</a>
//         <button>Click me</button>
//     `);
// })

// app.get('/contact', (request, response)=>{
//     response.send([
//         {
//             name: "dhanjyoti",
//             email: "dh@gmail.com"
//         },
//         {
//             name: "dhanjyoti",
//             email: "dh@gmail.com"
//         }
//     ]);
// })
// app.listen(5001);

const express = require("express");
const path = require('path');

const app = express();
const publicPath  = path.join(__dirname, "public");

app.set("view engine", "ejs");

app.get('/profile',(_, resp)=>{
    const user={
        name: "dhanjyoti",
        email: "dj@gmail.com",
        country: "India",
        skills:['js', 'go', 'python']
    }
    resp.render("profile", {user})
})

app.get('/login', (_, resp)=> {
    resp.render('login')
})

// app.use(express.static(publicPath));
app.get('',(_, resp)=>{
    resp.sendFile(`${publicPath}/index.html`)
})
app.get('/about',(_, resp)=>{
    resp.sendFile(`${publicPath}/about.html`)
})
app.get('/help',(_, resp)=>{
    resp.sendFile(`${publicPath}/help.html`)
})
app.get('*',(_, resp)=>{
    resp.sendFile(`${publicPath}/pagenotfound.html`)
})
app.listen(5001);