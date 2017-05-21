let mix = require('laravel-mix');

const jsOut = file => `app/public/js/${file}`;
const js = file => `app/assets/js/${file}`;

const cssOut = file => `app/public/css/${file}`;
const css = file => `app/assets/css/${file}`;

mix.disableNotifications();

mix.react(js('index.jsx'), jsOut('bundle.js'))
   .sass(css('style.scss'), cssOut('style.css'));
