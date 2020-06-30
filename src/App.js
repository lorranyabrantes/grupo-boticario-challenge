import React from 'react';
import Home from './pages/Home';
import Register from './pages/Register';
import Account from './pages/Account';
import NotFound from './pages/404';

import { isAuthenticated } from "./services/auth";
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import "./App.css";

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props =>
        isAuthenticated() ? (<Component {...props} />) : (<Redirect to={{ pathname: "/", state: { from: props.location } }} />)
      }
    />
);


const App = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/cadastre-se" component={Register} />
            <PrivateRoute path="/account" component={Account} />
            <Route path="*" component={NotFound} />
        </Switch>
    </ BrowserRouter>
)

export default App;