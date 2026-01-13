import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditEmployee() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    age: "",
    position: "",
    department: ""
  });

  useEffect(() => {
    axios.get(`http://localhost:5000/employees/${id}`)
      .then(res => setData(res.data[0]));
  }, [id]);

  const update = () => {
    axios.put(`http://localhost:5000/employees/${id}`, data)
      .then(() => navigate("/"));
  };

  return (
    <div className="container">
      <div className="form-box">
        <h2>Edit Employee</h2>

        <input
          value={data.name}
          onChange={e => setData({ ...data, name: e.target.value })}
        />

        <input
          type="number"
          value={data.age}
          onChange={e => setData({ ...data, age: e.target.value })}
        />

        <input
          value={data.position}
          onChange={e => setData({ ...data, position: e.target.value })}
        />

        <input
          value={data.department}
          onChange={e => setData({ ...data, department: e.target.value })}
        />

        <button onClick={update}>Update</button>
      </div>
    </div>
  );
}

export default EditEmployee;
