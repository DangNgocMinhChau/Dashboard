import React from "react";
import { Route, Switch } from "react-router-dom";
import ProductList from "../components/portals/products/ProductList";
import { PRODUCTSLIST, ORDERLIST } from "../commons/ConstantURL";
import OrderList from "../components/portals/orders/OrderList";
export interface IRouterPortalProps {}
const RoutersPortal: React.FC<IRouterPortalProps> = ({ ...props }) => {
  return (
    <Switch>
      <Route path={PRODUCTSLIST} component={ProductList} />
      <Route path={ORDERLIST} component={OrderList} />
    </Switch>
  );
};

export default RoutersPortal;
