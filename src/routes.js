import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Main_form from './Detail Form/main_form';
import Home from './home';
import Login from './Login/login';
import Dtutemplate from './Resume Templates/dtutemplate';
import Signup from './Signup/signup';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/signup" exact component={Signup} />
                <Route path="/login" exact component={Login} />
                <Route path="/details" exact component={Main_form} />
                <Route path="/template/dtu" exact component={Dtutemplate} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;