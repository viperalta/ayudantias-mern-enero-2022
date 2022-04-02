import React, { useState,useEffect } from 'react';
import { useParams,useHistory } from "react-router-dom";
import { simpleGet } from '../actions/simpleGet';

const Personaje = () => {

    const {id} = useParams();
    const history = useHistory();
    const [personaje, setPersonaje] = useState();

    const volverAPersonajes = () => {
        history.push("/rickandmorty/personajes");
    }

    useEffect(() => {
        getPersonaje();
    }, []);

    const getPersonaje = async()=>{
        const response = await simpleGet("https://rickandmortyapi.com/api/character/"+id);
        console.log(response);
        setPersonaje(response);
    }

    return (
        <div>
            <h2>Personaje id: {id}</h2>
            <h3> {personaje?.name} </h3>
            <h3> {personaje?.species} </h3>
            <img src={personaje?.image}></img>
            <button onClick={volverAPersonajes}>VOLVER</button>
        </div>
    );
}

export default Personaje;
