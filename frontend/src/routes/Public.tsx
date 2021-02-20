import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import routes from "../constants/routes";

import Home from "../pages/Home";
import Products from "../pages/Products";
import Product from "../pages/Product";
import Login from "../pages/Login";
import Register from "../pages/Register";

import Header from "../components/Header";

export default function Public() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path={routes.HOME} component={Home} />
        <Route path={routes.PRODUCTS} component={Products} />
        <Route path={routes.PRODUCT} component={Product} />
        <Route path={routes.LOGIN} component={Login} />
        <Route path={routes.REGISTER} component={Register} />

        <Route children={<Redirect to={routes.LOGIN} />} />
      </Switch>
    </Router>
  );
}
