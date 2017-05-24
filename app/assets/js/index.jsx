import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import {
    BrowserRouter,
    Route
} from 'react-router-dom';

import routes from '../../../routes';

ReactDOM.render(
    <BrowserRouter>
        {routes()}
    </BrowserRouter>,
    document.getElementById('root')
);
