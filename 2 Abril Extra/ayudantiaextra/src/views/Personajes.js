import React, { useState,useEffect } from 'react';
import { simpleGet } from '../actions/simpleGet';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


const Personajes = () => {

    const [personajes, setPersonajes] = useState();
    const [personajesFiltrado, setPersonajesFiltrado] = useState();

    useEffect(() => {
        getPersonajes();
    }, []);

    const getPersonajes = async()=>{
        const response = await simpleGet("https://rickandmortyapi.com/api/character");
        console.log(response);
        setPersonajes(response.results);
    }
    
    const filtrarPersonajes = (e) => {
        const filtrados = personajes.filter((personaje)=>{
            //personaje.name.includes(e.target.value)
            const nameMinusculas=personaje.name.toLowerCase();
            const busquedaMinusculas = e.target.value.toLowerCase();
            return nameMinusculas.includes(busquedaMinusculas);
        });
        setPersonajesFiltrado(filtrados);
    }

    return (
        <div>
            <h2>Todos los personajes</h2>
            
            <div className='container'>
                <div className='listado'>
                    <ul>
                    {personajes?.map((personaje,i)=><li> <Link to={"/rickandmorty/personaje/"+personaje.id}> {personaje.name} </Link></li>)}
                    </ul>
                </div>
                <div className='bsuqueda'>
                    <h4>Buscar personaje</h4>
                    <input type="text" onChange={filtrarPersonajes}></input>
                    <ul>
                    {personajesFiltrado?.map((personaje,i)=><li> <Link to={"/rickandmorty/personaje/"+personaje.id}> {personaje.name} </Link></li>)}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Personajes;
