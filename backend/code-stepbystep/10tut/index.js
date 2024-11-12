const mysql = require("mysql");

const connectDB = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"",
    database: "name_of_database"
})

connectDB.connect((err)=>{
    if(err){
        console.log("Error connecting to database", err);
    } else {
        console.log("connected");
    }
});

connectDB.query("SELECT * FROM student", (err, result)=>{
    console.log("result", result)
})