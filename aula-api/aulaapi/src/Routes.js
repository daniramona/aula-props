import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import NewUser from './pages/NewUser';

function Routes() {
    return (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/novo_usuario" component={NewUser} />
        </Switch>
    </BrowserRouter>
    );
}

export default Routes;