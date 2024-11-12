const express = require('express');
require("./config");
const Product = require('./product');
const multer = require('multer');

const app = express();
app.use(express.json());

app.post("/create", async(req, resp)=>{
    let data = new Product(req.body);
    let result = await data.save();
    resp.send(result);
    // console.log(req.body);
    // resp.send("Done");
});

app.get("/list", async (req, resp)=>{
    let data = await Product.find();
    resp.send(data);
})

app.delete("/delete/:_id", async (req, resp)=>{
    let data = await Product.deleteOne(req.params)
    resp.send(data);
})

app.put("/update/:_id", async (req, resp)=>{
    let data = await Product.updateOne(
        req.params,
        {$set: req.body}
    );
    resp.send(data);
})

app.get("/search/:key", async (req, resp)=>{
    let data = await Product.find({
        "$or":[
            {"name":{$regex:req.params.key}},
            {"brand":{$regex:req.params.key}},
            {"category":{$regex:req.params.key}}
        ]
    })
    resp.send(data)
})

const upload = multer({
    storage:multer.diskStorage({
        destination:function(req, file, cb){
            cb(null, "uploads")
        },
        filename:function(req, file, cb){
            cb(null, file.filename + "-" + Date.now() + ".jpg")
        }    
    })
}).single("user_file");
app.post("/upload", upload, (req, resp)=>{
    resp.send("File uploaded")
})

app.listen(5001);  