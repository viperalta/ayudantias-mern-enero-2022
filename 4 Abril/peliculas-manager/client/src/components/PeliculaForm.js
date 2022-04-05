import React, {useState,useEffect} from 'react';

const PeliculaForm = (props) => {

    const {initialNombre,initialDirector,initialEstreno,onSubmitProp} = props;
    const [nombre, setNombre] = useState(initialNombre); 
    const [director, setDirector] = useState(initialDirector);
    const [estreno, setEstreno] = useState(initialEstreno);

    const onSubmitHandler = e => {
        e.preventDefault();
        console.log({nombre, director,estreno})
        onSubmitProp({nombre, director,estreno});
    }


    return (
        <div>
            <form onSubmit={onSubmitHandler} >
                <div className='group'>
                    <label>Nombre</label><br/>
                    <input type="text" value={nombre} onChange = {(e)=>setNombre(e.target.value)}/>
                </div>
                <div className='group'>
                    <label>Director</label><br/>
                    <input type="text" value={director} onChange = {(e)=>setDirector(e.target.value)}/>
                </div>
                <div className='group'>
                    <label>Estreno</label><br/>
                    <input type="number" value={estreno} onChange = {(e)=>setEstreno(e.target.value)}/>
                </div>
                <button type="submit">Enviar Formulario</button>
            </form>

            
        </div>
    );
}

export default PeliculaForm;
