// Frameworks
import express from 'express';
import http from 'http';
import SocketIO from 'socket.io';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';

// Init
import routes from './routes';
const app = express();
const server = http.Server(app);
const io = new SocketIO(server);

const indexHtml = require('./app/public/index.html.js');

import path from 'path';

const file = f => path.join(__dirname, '/app/public', f || '');
app.use(express.static(file()));

/*
 * Routes all requests to React Router
 */
app.use( (req, res, next) => {
    const context = {};
    const html = ReactDOMServer.renderToString(
        <StaticRouter
            location={req.url}
            context={context}>
            {routes()}
        </StaticRouter>
    );

    if (context.url) {
        res.writeHead(301, {Location: context.url});
        res.end();
    } else {
        res.write(indexHtml(html));
        res.end();
    }
});

/*
 * WebSocket
 */
io.on('connection', socket => console.log('A user connected'));

/*
 * Start Listening
 */
server.listen(3000, () => console.log('App listening on port 3000!'));
