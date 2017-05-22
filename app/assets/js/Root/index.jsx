import React, { Component } from 'react';

import io from 'socket.io-client';
const socket = io();

import Easel from '../Easel';
import Audience from '../Audience';

import Connection from '../classes/Connection.js';

class Root extends Component {
    constructor () {
        super();

        this.connection = new Connection(socket);
    }


    render () {
        return (
            <div>
                <div className="header">
                    <h1>pictorio</h1>
                </div>

                <Easel />

                <Audience />
            </div>
        );
    }
}

export default Root;
