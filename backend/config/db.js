// import database library 
const mysql = require("mysql2");  

//creating database connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Sql@123",
  database: "employee_db"
});

//connect to the database
db.connect(err => {
  if (err) throw err;
  console.log("MySQL Connected");
});

//exporting connection
module.exports = db;
