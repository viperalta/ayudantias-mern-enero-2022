import React, { useState } from 'react';
import axios from 'axios';
import getCharacters from '../actions/getCharacters';

const Characters = (props) => {


    //CRUD - METODO HTTP
    //CREA - POST
    //LEE - GET
    //ACTUALIZA - PUT
    //ELIMINA - DELETE

    //https://rickandmortyapi.com/api/character

   
    const {personajes,setPersonajes}=props;

    const onClick = () => {

        fetch('https://rickandmortyapi.com/api/character')
        .then(response=>response.json())
        .then(response=>{
            console.log(response);
            setPersonajes(response.results)
        })
        .catch((error)=>console.log("fallo el fetch"))

    }

    const onClickAxios = () => {

        axios.get('https://rickandmortyapi.com/api/character')
        .then((response)=>{
        console.log(response)
        setPersonajes(response.data.results);
        console.log("hola");
        })
        .catch((error)=>console.log(error));

    }

    const onClickAsync = async() => {
        console.log("hola primero");
        const response = await getCharacters('https://rickandmortyapi.com/api/character');
        console.log(response);
        console.log("hola");
        setPersonajes(response.results);
        
        
    }

    return (
        <div>
            <button onClick={onClickAxios}>Traer Personajes</button>
<ul>
            {
                personajes.map((personaje,index)=><li key={index} >{personaje.name} </li>)
            }
            </ul>
        </div>
    );
}

export default Characters;
