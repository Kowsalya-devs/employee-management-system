//import required packages
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [employees, setEmployees] = useState([]);   //home component & state management
  const navigate = useNavigate();       //Navigation setup

  //fetch employees
  useEffect(() => {
    axios.get("http://localhost:5000/employees")
      .then(res => setEmployees(res.data));
  }, []);

  //delete employee logic
  const deleteEmp = (id) => {
    axios.delete(`http://localhost:5000/employees/${id}`)
      .then(() => window.location.reload());
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Employee Management</h1>
        <button className = "add-btn" onClick={() => navigate("/add")}>Add Employee</button>    
      </div>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Position</th>
            <th>Department</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {employees.map(emp => (     //table body(display array in row wise)
            <tr key={emp.id}>
              <td>{emp.name}</td>
              <td>{emp.age}</td>
              <td>{emp.position}</td>
              <td>{emp.department}</td>
              <td>
                <div className = "action-buttons"></div>
                <button
                  className="edit"
                  onClick={() => navigate(`/edit/${emp.id}`)}>  
                  Edit
                </button>
                <button
                  className="delete"
                  onClick={() => deleteEmp(emp.id)}>   
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
