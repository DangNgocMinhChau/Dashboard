import React from "react";
import { Route, Switch } from "react-router-dom";
import { CART, CHECKOUT, HOMEPAGE } from "../commons/ConstantURL";
import ProductPage from "../pages/products/ProductPage";
import CartPage from "../pages/cart/CartPage";
import ErrorPage from "../pages/ErrorPage";
import CheckoutPage from "../pages/cart/CheckoutPage";

export interface IRoutersHomePageProps {}
const RoutersHomePage: React.FC<IRoutersHomePageProps> = ({ ...props }) => {
  return (
    <Switch>
      <Route path={CART} exact={true} component={CartPage} />
      <Route path={HOMEPAGE} exact={true} component={ProductPage} />
      <Route path={CHECKOUT} exact={true} component={CheckoutPage} />
      <Route path="/*" component={ErrorPage} />
    </Switch>
  );
};
export default RoutersHomePage;
