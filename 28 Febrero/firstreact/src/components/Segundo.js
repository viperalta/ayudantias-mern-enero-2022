import React, {useEffect,useState} from 'react';

const Segundo = (props) => {

    const [contador,setContador]=useState(props.contador);
    const [edad,setEdad]=useState(props.edad);
    const [arreglo,setArreglo]=useState(["hola","como","estas"]);

    useEffect(() => {
        console.log("renderizacion inicial o contador/edad cambio");
    }, [contador,edad]);


    function apretarBoton() {
        const contadorMasUno=contador+10;
        setContador(contadorMasUno);
    }

    function aumentarEdad() {
        const edadMasUno=edad+1;
        setEdad(edadMasUno);
    }

    return (<>
        <div className="segundo">
            <h1>contador: {contador} </h1>
            <button onClick={()=>apretarBoton()}>Aumentar contador</button>
            <button onClick={()=>aumentarEdad()}>Aumentar edad</button>
            <h1>Edad: {edad} </h1>
            <ul>
                {arreglo.map((elemento)=>{
                    return(<>
                    <li> {elemento} </li>
                    </>)
                })}
            </ul>
            
        </div>
        </>
        
    );
}

export default Segundo;
