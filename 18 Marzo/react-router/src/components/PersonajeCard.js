import React from 'react';

const Personajecard = (props) => {

    const {name,src}=props;

    return (
        <div className='card'>
            <h1>{name} </h1>
            <img src={src}></img> 
        </div>
    );
}

export default Personajecard;
