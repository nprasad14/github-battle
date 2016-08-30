var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');
var Raven = require('raven-js')

var sentryKey = 'be69398cafd9403285fd38ebfc95a761'
var sentryApp = '94259'
var sentryURl = 'https://' + sentryKey +'@app.getsentry.com/' + sentryApp
var _APP_INFO = {
    name: 'Github Battle',
    branch : 'video4' ,
    version:'1.0'
}

Raven.config(sentryURl, {
  release: _APP_INFO.version,
  tags: {
    branch: _APP_INFO.branch,
  }
}).install()

//console.log(window.thing.nope)

ReactDOM.render(
    routes,
    document.getElementById('app')
);
