import React, { useState,useEffect } from 'react';
import { simpleGet } from '../actions/simpleGet';

const Paginacion = () => {

    const [personajes, setPersonajes] = useState();
    const [paginas,setPaginas]=useState([]);
    const [paginaSelected,setPaginaSelected]=useState()

    useEffect(() => {
        //getPersonajes();
        getNumeroPaginas();
        setPaginaSelected(1);
    }, []);

    useEffect(() => {
        getPersonajes(paginaSelected)
    }, [paginaSelected]);

    const getPersonajes = async(pagina)=>{
        const response = await simpleGet("https://rickandmortyapi.com/api/character?page="+pagina);
        console.log(response);
        setPersonajes(response.results);
    }

    const getNumeroPaginas = async()=>{
        const response = await simpleGet("https://rickandmortyapi.com/api/character");
        //setNumeroDePaginas(response.info.pages);
        console.log(response.info.pages)

        const pagesArray = [];
        for(let i=1;i<response.info.pages;i++){
            const estado=i===1?"active":""
            pagesArray.push({pagina:i,estado:estado});
        }
        setPaginas(pagesArray);
    }

    /* const displayPagination = () => {
        let result = "";

        for(let i = 1;i<numeroDePaginas;i++){
            result+=<div className='page'>i</div>
        }

        console.log(result);

        return result;
    } */

    const changePage = (pagina) => {
        setPaginaSelected(pagina);
    }


    return (
        <div>
            <h2>Paginacion</h2>

            <div className='listado'>
                    <ul>
                    {personajes?.map((personaje,i)=><li>{personaje.name}</li>)}
                    </ul>
                </div>

            <div className='pagination'>
               {paginas.map((page,i)=><button className={`page ${i+1===paginaSelected?"active":""}`} onClick={()=>changePage(i+1)}> {page.pagina} </button>)}
            </div>
        </div>
    );
}

export default Paginacion;
