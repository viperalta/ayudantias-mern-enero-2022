import React from 'react';

const People = (props) => {

    const {objeto} = props;

    return (
        <div>
            <ul className='ul-2'>
                <li>Nombre: {objeto.name}</li>
                <li>Altura: {objeto.height}</li>
                <li>Genero: {objeto.gender}</li>
                <li>Cumpleaños: {objeto.birth_year}</li>
                <li>Color de pelo: {objeto.hair_color}</li>
            </ul>
        </div>
    );
}

export default People;
