import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Main = () => {
  const [pets, setPets] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/pets")
      .then((res) => {
        setPets(res.data.pets);
        console.log(res.data);
      })
      .catch((err) => console.log("Error:", err));
  }, []);

  return (
    <div>
        <button onClick={()=>navigate("/pets/new")} >CREAR MASCOTA</button>
        <table class="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Type</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {pets.map((pet, i) => (
            <tr>
              <th scope="row">{pet.name}</th>
              <td>{pet.type}</td>
              <td>
                <button onClick={() => navigate("/pets/" + pet._id)}>
                  Details
                </button>
                <button onClick={() => navigate("/pets/" + pet._id + "/edit")}>
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Main;
