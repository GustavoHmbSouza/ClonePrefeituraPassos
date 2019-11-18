import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import home from './pages/home';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={home} />
            </Switch>
        </BrowserRouter>
    );
}
