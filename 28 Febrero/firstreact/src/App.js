import logo from './logo.svg';
import './App.css';
import Primero from './components/Primero';
import Segundo from './components/Segundo';

function App() {
  return (
    <div className="App">
      {/* <Primero nombre={"Vicente"} edad={10} ></Primero>
      <Primero nombre={"Christian"} edad={15} ></Primero>
      <Primero nombre={"Daniel"} edad={20} ></Primero> */}
      <Segundo contador={0} edad={30} ></Segundo>
    </div>
  );
}

export default App;
