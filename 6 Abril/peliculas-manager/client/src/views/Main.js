import React, { useState,useEffect } from 'react';
import { simpleGet } from '../actions/simpleGet';
import PeliculaForm from '../components/PeliculaForm';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Main = () => {

    const [peliculas, setPeliculas] = useState();
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        getPeliculas();
    }, []);

    const getPeliculas = async() => {
        const response = await simpleGet("http://localhost:8000/api/peliculas");
        console.log(response);
        setPeliculas(response.peliculas);
    }

    const crearPelicula = (pelicula) => {
        console.log("desde main:"+pelicula.nombre);

        fetch("http://localhost:8000/api/peliculas/new",{
            method:"POST",
            body:JSON.stringify(pelicula),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              }
        }
        )
        .then((res)=>res.json())
        .then((res)=>{
            console.log("pelicula creada");
            console.log(res);
            if(res.message===""){
                setPeliculas([...peliculas,res.pelicula]);
                setErrors([]);
            }else{
                const errorResponse = res.error.errors;
                const errorArr=[];
                for(const key of Object.keys(errorResponse)){
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            }
            //getPeliculas();
        })

    }

    const eliminarPelicula = (idPelicula) => {
        fetch('http://localhost:8000/api/peliculas/delete/'+idPelicula,{
            method:"DELETE"
        })
        .then(res => res.text()) // or res.json()
        .then(res => {
            console.log("eliminada: ",res);
            getPeliculas();
        })


    }
   

    return (
        <div>
            <PeliculaForm initialNombre="" initialDirector="" initialEstreno="" onSubmitProp={crearPelicula} ></PeliculaForm>
            {errors.map((err)=><div>{err} </div>)}
            {peliculas?.map((pelicula,i)=>{
                return(
                    <div key={i} className="pelicula">
                        <Link to={"pelicula/"+pelicula._id} > {pelicula.nombre} </Link>
                        <button onClick={()=>eliminarPelicula(pelicula._id)} >Eliminar Pelicula</button>
                    </div>
                )
            })}
        </div>
    );
}

export default Main;
