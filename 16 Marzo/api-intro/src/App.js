import logo from './logo.svg';
import './App.css';
import Characters from './components/Characters';
import { useState } from 'react';

function App() {

  const [personajes,setPersonajes]=useState([]);

  return (
    <div className="App">
      <Characters personajes={personajes}  setPersonajes={setPersonajes} ></Characters>
    </div>
  );
}

export default App;
