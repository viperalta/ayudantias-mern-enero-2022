import React from 'react';

const Starships = (props) => {
    
    const {objeto} = props;

    return (
        <div>
            <ul className='ul-2'>
                <li>Nombre: {objeto.name}</li>
                <li>Modelo: {objeto.model}</li>
                <li>Pasajeros: {objeto.passengers}</li>
                <li>Fabricante: {objeto.manufacturer}</li>
                <li>Valor: {objeto.cost_in_credits}</li>
            </ul>
        </div>
    );
}

export default Starships;
