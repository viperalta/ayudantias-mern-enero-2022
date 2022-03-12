import React from 'react';
import RegisterForm from '../components/RegisterForm';

const Register = () => {


    const registerUser = (user) => {
        console.log(user)
    }

    return (
        <div>
            <h1>Página de Registro de Usuario</h1>
            <RegisterForm onSubmitProp={registerUser} firstN="" lastN="" email="" rut="" password="" confirmPassword=""  />
        </div>
    );
}

export default Register;
