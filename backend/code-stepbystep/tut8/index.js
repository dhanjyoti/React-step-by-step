const express = require("express");
const multer = require("multer");
require("./config");
const Product = require("./product");
const app = express();

app.use(express.json());
app.post("/create", async (req, resp) => {
  let data = new Product(req.body);
  let result = await data.save();
  console.log(req.body);
  resp.send(result);
});

app.get("/list", async (req, resp) => {
  let data = await Product.find();
  resp.send(data);
});

app.delete("/delete/:_id", async (req, resp) => {
  console.log(req.parems);
  let data = await Product.deleteOne(req.params);
  resp.send(data);
});

app.put("/update/:_id", async (req, resp) => {
  console.log(req.parems);
  let data = await Product.updateOne(req.params, { $set: req.body });
  resp.send(data);
});

app.get("/search/:key", async (req, resp)=>{
  console.log(req.params.key)
  let data = await Product.find(
  {
    "$or":[
      {"name":{$regex:req.params.key}},
      {"brand":{$regex:req.params.key}},
      {"category":{$regex:req.params.key}}
    ]
  })
  resp.send(data);
})

const upload = multer({
  storage: multer.diskStorage({
    destination:function(req, file, cb){
      cb(null, "uploads")
    },
    filename:function(req, file, cb){
      // cb(null, file.fieldname + "-" + Date.now() + [".jpg", ".svg", ".png"])
      let ext;
      switch (file.mimetype) {
        case 'image/jpeg':
          ext = 'jpg';
          break;
        case 'image/png':
          ext = 'png';
          break;
        case 'image/svg+xml':
          ext = 'svg';
          break;
        default:
          ext = ''; // Set as empty if file type is not supported
      }
  
      if (!ext) {
        // Handle unsupported file types
        return cb(new Error("Unsupported file type!"), false);
      }
  
      // Append the correct extension to the filename
      cb(null, file.fieldname + "-" + Date.now() + "." + ext);
    }
  })
}).single("user_file");

app.post("/upload", upload, (req, resp)=>{
  resp.send("file upload")
});

app.listen(5001);
