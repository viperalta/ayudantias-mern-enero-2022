import React from 'react';

const Films = (props) => {

    const {objeto} = props;

    return (
        <div>
            <ul className='ul-2'>
                <li>Titulo: {objeto?.title}</li>
                <li>Resumen: {objeto.opening_crawl}</li>
                <li>Director: {objeto.director}</li>
                <li>Producer: {objeto.producer}</li>
                <li>Fecha: {objeto.release_date}</li>
            </ul>
        </div>
    );
}

export default Films;
