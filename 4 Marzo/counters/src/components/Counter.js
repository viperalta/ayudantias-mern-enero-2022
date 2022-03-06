import React, { useState,useEffect } from 'react';

const Counter = (props) => {

    const [cuenta,setCuenta]=useState(props.inicial);
    const [incremento,setIncremento]=useState(0);

    const aumentar = () => {
        const aux = cuenta+incremento;
        setCuenta(aux);
        props.setContadorGeneral((old)=>old+incremento);
        console.log(cuenta);
        console.log(incremento);
        console.log(props.inicial);
    }

    useEffect(() => {
        props.setContadorGeneral((old)=>old+props.inicial);
    }, []);


    return (
        <div className={`contador ${incremento>10?"red":""}`}>
            <h2>{props.titulo?props.titulo:""}</h2>
            <h4>Valor inicial: {props.inicial} </h4>
            <h3>Cuenta Actual: {cuenta} </h3>
            <input type="number" onChange={(e)=>setIncremento(parseInt(e.target.value))}></input>
            <button onClick={aumentar}>AUMENTAR</button>
        </div>
    );
}

export default Counter;
