import React from 'react';

const Planets = (props) => {

    const {objeto} = props;

    return (
        <div>
            <ul className='ul-2'>
                <li>Planeta: {objeto.name}</li>
                <li>Clima: {objeto.climate}</li>
                <li>Diametro: {objeto.diameter}</li>
                <li>Gravedad: {objeto.gravity}</li>
                <li>Población: {objeto.population}</li>
                <li>Terreno: {objeto.terrain}</li>
            </ul>
        </div>
    );
}

export default Planets;
