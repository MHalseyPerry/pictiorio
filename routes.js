const React = require('react');
const {
    DefaultRoute,
    NotFoundRoute,
    Route
} = require('react-router');

const app = file => `./app/assets/js/${file}`;

const Easel = require(app('Easel'));

module.exports = [
    <Route path="/" handler={Easel} />
];
