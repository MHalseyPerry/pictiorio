import React from 'react';
import {
    StaticRouter,
    Route
} from 'react-router';

import Easel from '../app/assets/js/Easel';

const routes = [
    <Route path="/" component={Easel} />
];

export default routes;
