import React from 'react';
import logout from '../actions/logout';
import { useUser } from "../contexts/userContext";
import {
    useNavigate,
  } from "react-router-dom";


const Main = () => {

    const { user, setUser } = useUser();
    const navigate = useNavigate();

    const renderInfo = () => {
        if(user){
            return(<>
            USUARIO LOGUEADO {user.email}
            </>)
        }else{
            return(<>NO HAY USUARIO</>)
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
            MAIN
            <h2> {renderInfo()} </h2>
            <button onClick={logOut}>LOGOUT</button>
        </div>
    );
}

export default Main;
