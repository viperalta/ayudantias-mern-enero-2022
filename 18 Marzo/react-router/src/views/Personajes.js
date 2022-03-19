import React, { useEffect, useState } from 'react';
import { simpleGet } from '../actions/simpleGet';
import Personajecard from '../components/PersonajeCard';

const Personajes = () => {

    const [personajes,setPersonajes]=useState();

    useEffect(() => {
        console.log("personajes: "+personajes);
    }, [personajes]);


const onClick = async() => {
    const response = await simpleGet("https://rickandmortyapi.com/api/character");
    console.log(response);
    setPersonajes(response.results);
}


    return (
        <div>
           <h3>Los Personajes</h3>
           <button onClick={onClick}>Traer Personajes</button>
            <ul>
                {true && <>x</>}
                {personajes?personajes.map((personaje,index)=><li key={index}>{personaje.name} </li>):""}
                {personajes?personajes.map((personaje,index)=><img src={personaje.image} />):""}

           </ul>
           <div className='cards'>
               {personajes?personajes.map((personaje,index)=><Personajecard key={index} name={personaje.name} src={personaje.image} ></Personajecard>):""}
           </div>
        </div>
    );
}

export default Personajes;
