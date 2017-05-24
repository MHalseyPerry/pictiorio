'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _socket = require('socket.io');

var _socket2 = _interopRequireDefault(_socket);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _reactRouter = require('react-router');

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

// Init
// Frameworks

var server = _http2.default.Server(app);
var io = new _socket2.default(server);

var indexHtml = require('./app/public/index.html.js');

var file = function file(f) {
    return _path2.default.join(__dirname, '/app/public', f || '');
};
app.use(_express2.default.static(file()));

/*
 * Routes all requests to React Router
 */
app.use(function (req, res, next) {
    var context = {};
    var html = _server2.default.renderToString(_react2.default.createElement(
        _reactRouter.StaticRouter,
        {
            location: req.url,
            context: context },
        (0, _routes2.default)()
    ));

    if (context.url) {
        res.writeHead(301, { Location: context.url });
        res.end();
    } else {
        res.write(indexHtml(html));
        res.end();
    }
});

/*
 * WebSocket
 */
io.on('connection', function (socket) {
    return console.log('A user connected');
});

/*
 * Start Listening
 */
server.listen(3000, function () {
    return console.log('App listening on port 3000!');
});
