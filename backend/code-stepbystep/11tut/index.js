const express = require("express");
const connectDB = require("./config");
const app = express();
app.get("/", (req, res)=>{
    // res.send("route done")
    connectDB.query("SELECT * FROM student", (err, result)=>{
        if(err){
            res.send("error in fetching");
        } else {
            res.send(result)
        }
    })
})

app.listen(5001);