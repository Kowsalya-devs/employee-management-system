import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddEmployee() {
  const [data, setData] = useState({
    name: "",
    age: "",
    position: "",
    department: ""
  });

  const navigate = useNavigate();

  const submit = () => {
    if (!data.name || !data.age || !data.position || !data.department) {
      alert("All fields required");
      return;
    }

    axios.post("http://localhost:5000/employees", data)
      .then(() => navigate("/"));
  };

  return (
    <div className="container">
      <div className="form-box">
        <h2>Add Employee</h2>

        <input
          placeholder="Name"
          value={data.name}
          onChange={e => setData({ ...data, name: e.target.value })}
        />

        <input
          type="number"
          placeholder="Age"
          value={data.age}
          onChange={e => setData({ ...data, age: e.target.value })}
        />

        <input
          placeholder="Position"
          value={data.position}
          onChange={e => setData({ ...data, position: e.target.value })}
        />

        <input
          placeholder="Department"
          value={data.department}
          onChange={e => setData({ ...data, department: e.target.value })}
        />

        <button onClick={submit}>Save</button>
      </div>
    </div>
  );
}

export default AddEmployee;
