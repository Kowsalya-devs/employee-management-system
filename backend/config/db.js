// package import 
const mysql = require("mysql2");  

//database configuration
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Sql@123",
  database: "employee_db"
});

//database connection execution
db.connect(err => {
  if (err) throw err;
  console.log("MySQL Connected");
});

//Reusability & Export
module.exports = db;
