const mysql = require("mysql");

const connectSql = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"name_of_database"
})

connectSql.connect((err)=>{
    if(err){
        console.log("error connecting to database")
    }else{
        console.log("connected to database")
    }
});

connectSql.query("select * from student",(err, result)=>{
    console.log("result", result)
});