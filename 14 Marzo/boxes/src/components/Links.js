import React, { useEffect, useState } from 'react';

const Links = () => {

    const [links,setLinks]=useState([
        {titulo:"pestaña 1",contenido:"contenido pestaña 1",estado:"active"},
        {titulo:"pestaña 2",contenido:"contenido pestaña 2",estado:""},
        {titulo:"pestaña 3",contenido:"contenido pestaña 3",estado:""}])

        const changeActive = (i) => {
            let newLinks = links.map((elementoArreglo,index)=>{
                index===i?elementoArreglo.estado="active":elementoArreglo.estado="";
                return elementoArreglo;
            })
            setLinks(newLinks);
        }

    return (
        <div>
            <div className='tabs'>

                {links.map((elemento,i)=>{
                    return (<p className={`title ${elemento.estado}`} onClick={()=>changeActive(i)} key={i} > {elemento.titulo} </p>)
                })}

            </div>
            <div className='contents'>
                {
                    links.filter(item=>item.estado==="active").map((item,i)=><p key={i} > {item.contenido} </p>)
                }
            </div>
            
        </div>
    );
}

export default Links;
