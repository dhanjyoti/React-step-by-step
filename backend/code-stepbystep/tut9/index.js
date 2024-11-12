// const os = require('os');
// console.log(os.arch());
// console.log(os.freemem()/(1024*1024*1024));
// console.log(os.totalmem()/(1024*1024*1024));
// console.log(os.hostname())
// console.log(os.platform())
// console.log(os.userInfo())

const express = require("express");
const EventEmitter = require("events");
const app = express();
const event = new EventEmitter();

let count = 0;

event.on("countAPI", ()=>{
    count++;
    console.log("event called", count);
})

app.get("/", (req, resp)=>{
    resp.send("api called");
    event.emit("countAPI");
})

app.get("/search", (req, resp)=>{
    resp.send("api called");
})

app.get("/update", (req, resp)=>{
    resp.send("api called");
})

app.listen(5001);