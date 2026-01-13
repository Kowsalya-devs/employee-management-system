// server.js
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// DB connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Sql@123",
  database: "employee_db"
});

db.connect(err => {
  if (err) throw err;
  console.log("Database connected");
});

// GET all employees
app.get("/employees", (req, res) => {
  db.query("SELECT * FROM employees", (err, result) => {
    if (err) return res.send(err);
    res.send(result);
  });
});

// GET employee by id
app.get("/employees/:id", (req, res) => {
  db.query(
    "SELECT * FROM employees WHERE id=?",
    [req.params.id],
    (err, result) => {
      if (err) return res.send(err);
      res.send(result);
    }
  );
});

// ADD employee
app.post("/employees", (req, res) => {
  const { name, age, position, department } = req.body;

  if (!name || !age || !position || !department) {  //Validation(prevent empty data)
    return res.send("All fields are required");
  }

  db.query(
    "INSERT INTO employees (name, age, position, department) VALUES (?,?,?,?)",
    [name, age, position, department],
    (err) => {
      if (err) return res.send(err);
      res.send("Employee added");
    }
  );
});

// UPDATE employee
app.put("/employees/:id", (req, res) => {
  const { name, age, position, department } = req.body;

  db.query(
    "UPDATE employees SET name=?, age=?, position=?, department=? WHERE id=?",
    [name, age, position, department, req.params.id],
    (err) => {
      if (err) return res.send(err);
      res.send("Employee updated");
    }
  );
});

// DELETE employee
app.delete("/employees/:id", (req, res) => {
  db.query(
    "DELETE FROM employees WHERE id=?",
    [req.params.id],
    (err) => {
      if (err) return res.send(err);
      res.send("Employee deleted");
    }
  );
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
