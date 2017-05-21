import React, { Component } from 'react';

import Easel from '../Easel';
import Audience from '../Audience';

class Root extends Component {
    render () {
        return (
            <div>
                <div className="header">
                    <h1>pictionary</h1>
                </div>

                <Easel />

                <Audience />
            </div>
        );
    }
}

export default Root;
