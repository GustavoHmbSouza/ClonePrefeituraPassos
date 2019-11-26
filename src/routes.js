import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import home from './pages/home';
import noticias from './pages/noticias';
import historia from './pages/historia';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={home} />
                <Route path="/noticias" exact component={noticias} />
                <Route path="/historia" exact component={historia} />
            </Switch>
        </BrowserRouter>
    );
}
