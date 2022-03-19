import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./views/About";
import Contact from "./views/Contact";
import Home from "./views/Home";
import Rick from "./views/Rick";

function App() {
  return (
    <div className="App">
      <Router>

        <nav>
          <ul>
            <li>
              <Link to="/" >Home</Link>
            </li>
            <li>
              <Link to="/about" >Sobre Nosotros</Link>
            </li>
            <li>
              <Link to="/contact" >Contacto</Link>
            </li>
            <li>
              <Link to="/rickandmorty" >Rick And Morty API</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/rickandmorty">
            <Rick />
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
