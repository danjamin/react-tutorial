import IndexRoute from 'app/routes/index';

var Route = ReactRouter.Route;
var Routes = ReactRouter.Routes;

/* jshint trailing:false, quotmark:false, newcap:false */
var Router = (
  <Routes>
    <Route name="index" path="/" handler={IndexRoute} />
  </Routes>
);

export default Router;
