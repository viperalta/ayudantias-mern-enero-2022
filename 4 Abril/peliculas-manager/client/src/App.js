import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';

function App() {
  return (
    <div className="App">

      <Router>
        <Switch>
          <Route path="/pelicula/:id/edit">
            <Update></Update>
          </Route>
          <Route path="/pelicula/:id">
            <Detail></Detail>
          </Route>
          <Route path="/">
            <Main></Main>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
