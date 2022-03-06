import React, {useState,useEffect} from 'react';

const SimpleForm = (props) => {

    const [nombre,setNombre]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    useEffect(() => {
        console.log("ha cambiado una variable");
    }, [nombre,email]);

    const crearUsuario = (e) =>{
        e.preventDefault();
        const nuevoUsuario={nombre,email,password};
        console.log("se ha creado el usuario",nuevoUsuario)
    }


    return (
        <div>
            {props.children}
            {props.propiedad}
            <form onSubmit={crearUsuario}>
                <div>
                    <label htmlFor='nombre'>Nombre</label>
                    <input name="nombre" type="text" onChange={(e)=>setNombre(e.target.value)} />
                </div>
                <div>
                    <label htmlFor='email'>Correo</label>
                    <input name="email" type="text" onChange={(e)=>setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor='password'>Contraseña</label>
                    <input name="password" type="text" onChange={(e)=>setPassword(e.target.value)} />
                </div>
                <input type="submit" value="Crear Usuario"></input>
            </form>

            <h1>DATOS</h1>
            <p> nombre:{nombre} </p>
            <p> email:{email} </p>
            <p> password:{password} </p>
            
        </div>
    );
}

export default SimpleForm;
