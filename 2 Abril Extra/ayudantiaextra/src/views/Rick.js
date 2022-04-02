import React, { useState,useEffect } from 'react';
import { simpleGet } from '../actions/simpleGet';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Personajes from './Personajes';
import Personaje from './Personaje';
import Paginacion from './Paginacion';
import Todo from './Todo';

const Rick = () => {



    return (
        <div>
            <h1>API DE RICK AND MORTY</h1>

        <Router>
            <nav>
                <ul>
                    <li><Link to="/rickandmorty/personajes">Personajes</Link></li>
                    <li><Link to="/rickandmorty/paginacion">Paginacion</Link></li>
                    <li><Link to="/rickandmorty/todo">TODO</Link></li>
                    {/* <li><Link to="/rickandmorty/personaje/:id"></Link></li> */}
                </ul>

                <Switch>
                    <Route path="/rickandmorty/personajes">
                        <Personajes></Personajes>
                    </Route>
                    <Route path="/rickandmorty/paginacion">
                        <Paginacion></Paginacion>
                    </Route>
                    <Route path="/rickandmorty/todo">
                        <Todo></Todo>
                    </Route>
                    <Route path="/rickandmorty/personaje/:id">
                        <Personaje></Personaje>
                    </Route>
                </Switch>
            </nav>
        </Router>
            
        </div>
    );
}

export default Rick;
