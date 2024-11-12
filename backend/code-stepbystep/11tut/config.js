const mysql = require("mysql");
const connectDB = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database: "name_of_database"
})

connectDB.connect((err)=> {
    if(err)
    {
        console.log("error in connection")
    }
})

module.exports = connectDB;