import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import {
    BrowserRouter,
    Route
} from 'react-router-dom';

import router from '../../../routes/routes.jsx';
const { routes } = router;

ReactDOM.render(
    <BrowserRouter>
        <div>
            {routes.map(r => (
                <Route
                    key={r.path}
                    path={r.path}
                    component={r.component}
                    exact={r.exact} />
            ))}
        </div>
    </BrowserRouter>,
    document.getElementById('root')
);
