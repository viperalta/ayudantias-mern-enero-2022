import React, { useState,useEffect } from 'react';
import { simpleGet } from '../actions/simpleGet';

const Todo = () => {

    const [personajes, setPersonajes] = useState([]);
    const [totalPaginas,setTotalPaginas]=useState()
    const [paginaSelected,setPaginaSelected]=useState()
    

    useEffect(() => {
        //getPersonajes();
        getNumeroPaginas();
        setPaginaSelected(1);
    }, []);

    useEffect(() => {
        console.log("hola")
        if(paginaSelected<totalPaginas){
            console.log("hola")
            getPersonajes(paginaSelected);
            setPaginaSelected((old)=>old+1);
        }  
    }, [paginaSelected,totalPaginas]);

    useEffect(() => {
       console.log(personajes);
    }, [personajes]);

    const getPersonajes = async(pagina)=>{
        console.log("llegue");
        const response = await simpleGet("https://rickandmortyapi.com/api/character?page="+pagina);
        console.log(response.results);
        setPersonajes((old)=>[...old,...response.results]);
    }

    const getNumeroPaginas = async()=>{
        const response = await simpleGet("https://rickandmortyapi.com/api/character");
        //setNumeroDePaginas(response.info.pages);
        setTotalPaginas(response.info.pages);
    }

    return (
        <div>
             <div className='listado'>
                    <ul>
                    {personajes?.map((personaje,i)=><li>{personaje.name}</li>)}
                    </ul>
                </div>
        </div>
    );
}

export default Todo;
