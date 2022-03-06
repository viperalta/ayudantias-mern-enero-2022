import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import { useState } from "react";
import Tabs from "./components/Tabs";

function App() {
  const [contadorGeneral, setContadorGeneral] = useState(0);

  const [contadores, setContadores] = useState([]);
  const [newInicial,setNewInicial]=useState(0);
  const [newTitulo,setNewTitulo]=useState("");

  const addCounter = () => {
    const newCounter = {titulo:newTitulo,inicial:newInicial};
    const arrAux = [...contadores];
    arrAux.push(newCounter);
    setContadores(arrAux);
    console.log(contadores);
  }

  return (
    <div className="App">
      <h1>contador general: {contadorGeneral} </h1>

      <div className="contadores">
        <Counter inicial={10} setContadorGeneral={setContadorGeneral}></Counter>
        <Counter inicial={20} setContadorGeneral={setContadorGeneral}></Counter>
        <Counter inicial={33} setContadorGeneral={setContadorGeneral}></Counter>
        <Counter inicial={5} setContadorGeneral={setContadorGeneral}></Counter>
      </div>

      <hr></hr>

      <h2>agregar nuevo contador</h2>
      <label>Titulo</label>
      <input type="text" onChange={(e)=>setNewTitulo(e.target.value)}></input>
      <label>Valor inicial</label>
      <input type="number" onChange={(e)=>setNewInicial(parseInt(e.target.value))}></input>
      <button onClick={addCounter} >Agregar nuevo contador</button>

      <div className="contadores" >
        {contadores.map((contador)=>{
          return (<>
          <Counter inicial={contador.inicial} titulo={contador.titulo} setContadorGeneral={setContadorGeneral}></Counter>
          </>)
        })}
      </div>

      <hr>
      </hr>

     {/*  <Tabs></Tabs> */}

    </div>
  );
}

export default App;
