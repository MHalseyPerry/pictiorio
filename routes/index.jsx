import React from 'react';
import {
    Route,
    Switch
} from 'react-router';

import Easel from '../app/assets/js/Easel';

function routes () {
  return (
    <Switch>
        <Route path="/" component={Easel} />
        <Route path="/:id" component={Easel} />
    </Switch>
  );
}

export default routes;
