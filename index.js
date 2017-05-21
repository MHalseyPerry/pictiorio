// Express Framework
const express = require('express');
const app = express();

// Path module (built-in)
const path = require('path');

/*
 * Express Config
 */
app.use(express.static(path.join(__dirname, '/app/public')));

/*
 * Routes
 */
//  / - we don't actually need this defined but it's here for transparency
app.get('/', function (req, res) {
    res.sendFile('/index.html');
});

/*
 * Listen
 */
app.listen(3000, function () {
    console.log('App listening on port 3000!');
});
