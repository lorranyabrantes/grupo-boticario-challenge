import React from 'react';
import Home from './pages/Home';
import Register from './pages/Register';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import "./App.css"

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/cadastre-se" component={Register} />
        </Switch>
    </ BrowserRouter>
)

export default App;