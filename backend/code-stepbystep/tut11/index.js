const express = require('express');
const connectSql = require('./config');
const app = express();

app.use(express.json());

app.get("/", (req, resp)=>{
    // resp.send("hello dj");
    connectSql.query("select * from student", (err, result)=>{
        if(err){
            resp.send("error in query");
        } else {
            resp.send(result);
        }
    })
})

app.post("/", (req, resp) => {
    const data = req.body;

    // Ensure data is passed and properly logged for debugging
    console.log('Data received:', data);

    connectSql.query("INSERT INTO student SET ?", data, (error, results, fields) => {
        if (error) {
            console.error('Error executing query:', error);  // Log the error for debugging
            return resp.status(500).send("Error in query");   // Send a proper error response
        }

        // Successful insert
        resp.send({ message: "Data inserted successfully", results });
    });
});

app.put("/:id", (req, resp) => {
    const data = [req.body.name, req.body.age, req.params.id];
    connectSql.query("UPDATE student SET name = ?, age = ? where id = ?", data, (err, result, fields)=>{
        if(err) throw err;
        resp.send(result);
    })
    resp.send("update api working")
})

app.delete("/:id", (req, resp) => {
    connectSql.query("DELETE FROM student WHERE id =" + req.params.id, (error, result)=> {
        if(error) throw error;
        resp.send(result);
    })
})


app.listen(5001);