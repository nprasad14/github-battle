var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var Main = require('../components/Main');
var Home = require('../components/Home');
var PromptContainers = require('../containers/PromptContainers');

var routes = (
    <Router history={hashHistory}>
        <Route path='/' component={Main}>
            <IndexRoute component={Home} />
            <Route path='playerOne' header= 'Player One' component={PromptContainers} />
            <Route path='playerTwo/:playerOne' header='Player Two' component={PromptContainers} />
         </Route>
    </Router>
);

module.exports = routes;
