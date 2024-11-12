const express = require('express');
const dbConnect = require('./mongodb');
const app = express();
const mongodb = require('mongodb');

app.use(express.json());

app.get('/', async (req, res) => {
    let data = await dbConnect();
    data = await data.find().toArray();
    res.send(data);
});

app.post('/', async (req, res) => {
    let data = await dbConnect();
    let result = await data.insertOne(req.body); // Updated to insertOne
    res.send(result);
});

app.put('/:name', async (req, resp)=> {
    let data = await dbConnect();
    let result = await data.updateOne({name: req.params.name}, {
        $set:req.body
    })
    resp.send({result:"updated"})
})

app.delete("/:id", async(req, resp)=>{
    console.log(req.params.id)
    const data = await dbConnect();
    const result = await data.deleteOne({_id: new mongodb.ObjectId(req.params.id)})
    resp.send(result)
})

app.listen(5001, () => {
    console.log('Server is running on port 5001');
});
