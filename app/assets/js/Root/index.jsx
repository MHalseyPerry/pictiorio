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
                    <img src="/favicon-32x32.png" />
                    <h1>ictorio</h1>
                </div>

                <Easel />

                <Audience />
            </div>
        );
    }
}

export default Root;
