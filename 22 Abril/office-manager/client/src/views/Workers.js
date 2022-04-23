import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Workers = () => {
  const [workers, setWorkers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getWorkers();
  }, []);

  const getWorkers = () => {
    axios
      .get("http://localhost:8000/api/workers")
      .then((res) => {
        setWorkers(res.data.workers);
        console.log(res.data);
      })
      .catch((err) => console.log("Error:", err));
  };

  const deleteWorker = (idWorker) => {
    fetch("http://localhost:8000/api/workers/delete/" + idWorker, {
      method: "DELETE",
    })
      .then((res) => res.text()) // or res.json()
      .then((res) => {
        console.log("eliminada: ", res);
        getWorkers();
      });
  };

  return (
    <div>
    <button onClick={()=>navigate("/workers/new")}>CREAR TRABAJADOR</button>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Cargo</th>
            <th scope="col">Accioness</th>
          </tr>
        </thead>
        <tbody>
          {workers.map((worker, i) => (
            <tr>
              <th scope="row">{worker.name}</th>
              <td>{worker.role}</td>
              <td>
                <button onClick={() => navigate("/workers/" + worker._id)}>
                  VER DETALLE
                </button>
                <button onClick={() => deleteWorker(worker._id)}>
                  Eliminar Trabajador
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Workers;
