import React from 'react';

const Species = (props) => {

    const {objeto} = props;

    return (
        <div>
            <ul className='ul-2'>
                <li>Especie: {objeto.name}</li>
                <li>Clasificación: {objeto.classification}</li>
                <li>Designación: {objeto.designation}</li>
                <li>Piel: {objeto.skin_colors}</li>
                <li>Lenguaje: {objeto.language}</li>
            </ul>
        </div>
    );
}

export default Species;
