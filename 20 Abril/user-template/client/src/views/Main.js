import React from 'react';
import { useUser } from "../contexts/userContext";
import {
    useNavigate,
  } from "react-router-dom";
import logout from '../actions/logout';

const Main = () => {

    const { user, setUser } = useUser();
    const navigate = useNavigate();

    const renderInfo = () => {
        if(user){
            return(<>
            USUARIO LOGUEADO {user.email}
            </>)
        }else{
            return(<>NO HAY USUARIO LOGGUEADO</>)
        }
    }

    const logOut = async () => {
        const { success } = await logout();
        if (success) setUser(null);
        else window.alert("Error, could not log out");
        navigate("/");
      };

    return (
        <div>
            main
            <h2>{renderInfo()} </h2>
            <button onClick={logOut}>LOGOUT</button>
        </div>
    );
}

export default Main;
