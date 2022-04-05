import React,{useState,useEffect} from 'react';
import { useHistory, useParams,Link } from "react-router-dom";
import { simpleGet } from '../actions/simpleGet';
import PeliculaForm from '../components/PeliculaForm';

const Update = () => {

    let { id } = useParams();
  const [pelicula, setPelicula] = useState();

    useEffect(() => {
        getPelicula();
    }, []);

    const getPelicula = async() => {
        const response = await simpleGet("http://localhost:8000/api/peliculas/" + id);
        console.log(response.pelicula);
        setPelicula(response.pelicula);
    }

    const history=useHistory();

    const editarPelicula = (pelicula) => {
        fetch("http://localhost:8000/api/peliculas/update/"+id, {
        method: "PUT",
        body: JSON.stringify(pelicula),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          console.log("pelicula editada");
          console.log(res);
          history.push("/")
        });
    }

    return (
        <div>
            <h1>Actualizar pelicula: {pelicula?.nombre}</h1>
            {pelicula && <PeliculaForm initialNombre={pelicula.nombre} initialDirector={pelicula.director} initialEstreno={pelicula.estreno} onSubmitProp={editarPelicula} ></PeliculaForm>}
            <button onClick={()=>history.push("/")} >VOLVER</button>
        </div>
    );
}

export default Update;
