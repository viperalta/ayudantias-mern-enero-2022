import logo from './logo.svg';
import './App.css';
import SimpleForm from './components/SimpleForm';
import AdvancedForm from './components/AdvancedForm';


function App() {
  return (
    <div className="App">
      <SimpleForm propiedad="algo" >
        <h1>SOY UN CHILDREN</h1>
      </SimpleForm>
      <AdvancedForm></AdvancedForm>
    </div>
  );
}

export default App;
