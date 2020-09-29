import React from 'react';
import './App.css';
import HomePage from './pages/HomePage'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";


function App() {
    return (
        //BEM
        <div className="app">
            <Router>
                <Switch>
                    <Route path='/search'>
                        <h1> This is the search page </h1>
                    </Route>
                    <Route path='/'>
                        <HomePage/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
