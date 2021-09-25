import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from './home';
import Signup from './Signup/signup';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/signup" exact component={Signup} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;