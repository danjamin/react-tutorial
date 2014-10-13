import IndexController from 'app/controllers/index';

var Route = ReactRouter.Route;
var Routes = ReactRouter.Routes;

/* jshint trailing:false, quotmark:false, newcap:false */
var Router = (
  <Routes>
    <Route name="index" path="/" handler={IndexController} />
  </Routes>
);

export default Router;
