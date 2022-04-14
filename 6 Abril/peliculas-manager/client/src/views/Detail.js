import React, {useState,useEffect} from 'react';
import { useHistory, useParams,Link } from "react-router-dom";
import { simpleGet } from '../actions/simpleGet';

const Detail = () => {

    const  {id} = useParams();
    const history = useHistory();

    const [pelicula,setPelicula]=useState();

    useEffect(() => {
        getPelicula();
    }, []);

    const getPelicula = async() => {
        const response = await simpleGet("http://localhost:8000/api/peliculas/" + id);
        console.log(response.pelicula);
        setPelicula(response.pelicula);
    }

    return (
        <div>
            detalle de pelicula: {id}
            <h2>Nombre: {pelicula?.nombre} </h2>
            <h3>Director: {pelicula?.director} </h3>
            <h4>Estreno: {pelicula?.estreno} </h4>
            <Link to={"/pelicula/"+id+"/edit"}>EDITAR PELICULA</Link>
            <button onClick={()=>history.push("/")} >VOLVER</button>
        </div>
    );
}

export default Detail;
