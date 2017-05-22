// Frameworks
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

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
//  / - we don't actually need this defined but it's here for transparency
app.get('/', (req, res) => {
    res.sendFile(file('/index.html'));
});
// /:room - Room ID where ID is [A-Z0-9]{4}
app.get('/:room([A-Z]{4})', (req, res) => {
    res.sendFile(file('/room.html'));
});

io.on('connection', socket => console.log('A user connected'));

/*
 * Listen
 */
http.listen(3000, () => console.log('App listening on port 3000!'));
