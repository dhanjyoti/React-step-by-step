const mysql = require("mysql");
const connectSql = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "name_of_database",
})

connectSql.connect((err)=>{
    if(err){
        console.log("error in connection")
    } else {
        console.log("conected")
    }
})

module.exports = connectSql;