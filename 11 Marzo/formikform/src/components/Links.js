import React, { useState } from 'react';

const Links = () => {

    const [links,setLinks]=useState([{titulo:"primera pestaña",estado:"active"},{titulo:"segunda pestaña",estado:""},{titulo:"tercera pestaña",estado:""}])


    const changeActive = (i) => {

        let newLinks = links.map((elementoArreglo,index)=>{
            index===i?elementoArreglo.estado="active":elementoArreglo.estado="";
            return elementoArreglo;
        })
        setLinks(newLinks);

    }


    return (
        <div>
            <h1>Pestañas</h1>

            <div className='tabs'>
            {
                links.map((elementoArreglo,i)=>{
                    return(<p key={i} className={elementoArreglo.estado} onClick={()=>changeActive(i)} > {elementoArreglo.titulo} </p>)
                })
            }
            </div>

            
            
        </div>
    );
}

export default Links;
