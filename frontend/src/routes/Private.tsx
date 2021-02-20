import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import routes from "../constants/routes";

import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Products from "../pages/Products";
import Product from "../pages/Product";
import Cart from "../pages/Cart";
import Payment from "../pages/Payment";
import Success from "../pages/Success";

import Header from "../components/Header";

export default function Private() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path={routes.HOME} component={Home} />
        <Route path={routes.PRODUCTS} component={Products} />
        <Route path={routes.PRODUCT} component={Product} />
        <Route path={routes.PROFILE} component={Profile} />
        <Route path={routes.CART} component={Cart} />
        <Route path={routes.PAYMENT} component={Payment} />
        <Route path={routes.SUCCESS} component={Success} />
        <Route children={<Redirect to={routes.PROFILE} />} />
      </Switch>
    </Router>
  );
}
