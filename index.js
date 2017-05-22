// Frameworks
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const React = require('react');
const Router = require('react-router');

//const routes = require('./routes.js');

// Path module (built-in)
const path = require('path');

/*
 * Express Config
 */
const file = f => path.join(__dirname, '/app/public', f || '');
app.use(express.static(file()));

/*
 * Routes
 */
/*app.use( (req, res, next) => {
    const router = Router.create({
        routes,
        location: req.url,
    });
    router.run( (Handler, state) => {
        const html = React.renderToString(<Handler />);
        return res.render('react_page', { html });
    });
});*/
//  / - we don't actually need this defined but it's here for transparency
app.get('/', (req, res) => {
    res.sendFile(file('/index.html'));
});

io.on('connection', socket => console.log('A user connected'));

/*
 * Listen
 */
http.listen(3000, () => console.log('App listening on port 3000!'));
