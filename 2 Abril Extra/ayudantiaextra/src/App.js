import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Rick from './views/Rick';

function App() {
  return (
    <div className="App">
      <Router>

        <nav>
          <ul>
            <li><Link to="/rickandmorty">Rick and Morty</Link></li>
          </ul>
        </nav>

        <Switch>
          <Route path="/rickandmorty">
            <Rick></Rick>
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
