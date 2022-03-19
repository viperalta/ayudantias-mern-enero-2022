import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import BoxForm from './components/BoxForm';
import Boxes from './views/Boxes';
import Links from './components/Links';

function App() {

  const [boxes,setBoxes]=useState([]);

  return (
    <div className="App">
      <BoxForm boxes={boxes} setBoxes={setBoxes}></BoxForm>
      <Boxes boxes={boxes} ></Boxes>
      <hr></hr>
      <Links></Links>
    </div>
  );
}

export default App;
