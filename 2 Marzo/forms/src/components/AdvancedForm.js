import React, { useState,useEffect } from 'react';

const AdvancedForm = () => {

    const [formInfo,setFormInfo]=useState({
        nombre:'',
        email:'',
        password:'',
        confirmPassword:''
    })

    const [errores,setErrores]=useState({
        nombre:'',
        email:'',
        password:'',
        confirmPassword:''
    })

    useEffect(() => {
        console.log(formInfo);
        validarForm();
    }, [formInfo]);

    const onChange = (e) => {
        console.log(e.target.name);

        setFormInfo({
            ...formInfo,
            [e.target.name]:e.target.value
        })

    }

    const validarForm = () => {

        const erroresAux={
            nombre:'',
            email:'',
            password:'',
            confirmPassword:''
        };

        if(nombre.length<5){
            erroresAux.nombre="El nombre es muy corto"
        }

        if(password!==confirmPassword){
            erroresAux.password="Las contraseñas no coinciden";
        }

        //desafio,validar correo con expresion regular

        setErrores(erroresAux);

    }

    const {nombre,email,password,confirmPassword} = formInfo;


    return (
        <div>
            <form /* onSubmit={crearUsuario} */>
                <div>
                    <label htmlFor='nombre'>Nombre</label>
                    <input name="nombre" type="text" onChange={onChange}  />
                    <p className='warning'> {errores.nombre} </p>
                </div>
                <div>
                    <label htmlFor='email'>Correo</label>
                    <input name="email" type="text" onChange={onChange}  />
                </div>
                <div>
                    <label htmlFor='password'>Contraseña</label>
                    <input name="password" type="text" onChange={onChange}  />
                    <p className='warning'> {errores.password} </p>
                </div>
                <div>
                    <label htmlFor='confirmPassword'>Confirmar Contraseña</label>
                    <input name="confirmPassword" type="text" onChange={onChange}  />
                </div>
                <input type="submit" value="Crear Usuario"></input>
            </form>

            <h1>DATOS</h1>
            <p> nombre:{nombre} </p>
            <p> email:{email} </p>
            <p> password:{password} </p>
            <p> Cpassword:{confirmPassword} </p>
            
        </div>
    );
}

export default AdvancedForm;
