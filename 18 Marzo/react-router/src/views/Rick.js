import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Episodios from "./Episodios";
import Personajes from "./Personajes";

const Rick = () => {

  return (
    <div>
      <h1>PÁGINA DE LA API DE RICK AND MORTY</h1>
      

      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/rickandmorty/characters">Personajes</Link>
            </li>
            <li>
              <Link to="/rickandmorty/episodes">Episodios</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          
          <Route path="/rickandmorty/characters">
            <Personajes></Personajes>
          </Route>
          <Route path="/rickandmorty/episodes">
            <Episodios></Episodios>
          </Route>
        </Switch>

      </Router>
    </div>
  );
};

export default Rick;
