import React from 'react';
import {Formik, Field,Form,ErrorMessage} from "formik";
import * as Yup from "yup";

const RegisterForm = (props) => {

    const {onSubmitProp,firstN,lastN,email,rut,password,confirmPassword}=props;

    return (
        <div>

        <Formik
        
        initialValues={{
            firstName:firstN,
            lastName:lastN,
            email:email,
            rut:rut,
            password:password,
            confirmPassword:confirmPassword
        }}

        validationSchema={Yup.object().shape({
            firstName: Yup.string()
            .min(4,"Tu nombre es muy corto")
            .max(15,"Tu nombre es muy largo")
            .required("Por favor ingresa un nombre"),
            lastName: Yup.string()
            .min(4,"Tu apellido es muy corto")
            .max(15,"Tu apellido es muy largo")
            .required("Por favor ingresa un apellido"),
            email: Yup.string()
            .email("Correo no válido")
            .required("Es obligatorio agregar un correo"),
            rut:Yup.string()
            .matches(/^[0-9]+[-|-]{1}[0-9kK]{1}$/,"el rut no tiene el formato adecuado")
            .required("El rut es obligatorio"),
            password: Yup.string()
            .required("La contraseña es obligatorio")
            .equals([Yup.ref('confirmPassword'),null],"Las contraseñas deben ser iguales")
            .min(8,"La contraseña debe tener al menos 8 caracteres"),
            confirmPassword: Yup.string()
            .required("La confirmacion de contraseña es obligatoria")
            .equals([Yup.ref('password'),null],"Las contraseñas deben ser iguales")
            .min(8,"La confirmacion de contraseña debe tener al menos 8 caracteres"),

        })}

        onSubmit={(values,{setSubmitting})=>{
            //onSubmitProp(values);
            console.log(values);
            onSubmitProp(values);
           /*  const timeOut = setTimeout(()=>{
                console.log(values);
                onSubmitProp(values);
                setSubmitting(false);
                clearTimeout(timeOut);
            },1000) */
        }}

        >
            {({errors,
            touched,
            handleSubmit})=>{

                return (
                    <div>
                        <h2>Formulario de Registro</h2>
                        <Form onSubmit={handleSubmit}>
                            <label htmlFor='firstName'>Nombre</label>
                            <Field id="firstName" type="text" placeholder="Nombre" name="firstName" className="form-control" />
                            {/*  Revisar */}
                            {/* <ErrorMessage name="firstName"> {(msg) => <p className='error'> {msg} </p>} </ErrorMessage> */} 
                            {errors.firstName && touched.firstName && <p className='error'>{errors.firstName} </p>}
                            <label htmlFor='lastName'>Apellido</label>
                            <Field id="lastName" type="text" placeholder="Apellido" name="lastName" className="form-control" />
                            {errors.lastName && touched.lastName && <p className='error'>{errors.lastName} </p>}

                            <label htmlFor='email'>Correo Electrónico</label>
                            <Field id="email" type="text" placeholder="Escribe tu correo" name="email" className="form-control" />
                            {errors.email && touched.email && <p className='error'>{errors.email} </p>}

                            <label htmlFor='rut'>RUT</label>
                            <Field id="rut" type="text" placeholder="Tu Rut" name="rut" className="form-control" />
                            {errors.rut && touched.rut && <p className='error'>{errors.rut} </p>}

                            <label htmlFor='password'>Contraseña</label>
                            <Field id="password" type="text" placeholder="Tu password" name="password" className="form-control" />
                            {errors.password && touched.password && <p className='error'>{errors.password} </p>}

                            <label htmlFor='confirmPassword'> Confirma Contraseña</label>
                            <Field id="confirmPassword" type="text" placeholder="Confirma tu contraseña" name="confirmPassword" className="form-control" />
                            {errors.confirmPassword && touched.confirmPassword && <p className='error'>{errors.confirmPassword} </p>}
<br></br>
                            <button type="submit" disabled={Object.values(errors).length>0} >Registrarse</button>
                        </Form>
                    </div>
                )

            }}

        </Formik>

            
        </div>
    );
}

export default RegisterForm;
