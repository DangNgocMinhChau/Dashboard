import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import ManagerPages from "../pages/portal/layoutManager/ManagerPages";
import RoutersPortal from "./RoutersPortal";
import RoutersHomePage from "./RoutersHomePage";
import { ADMIN, HOMEPAGE } from "../commons/ConstantURL";

export interface IIndexRouterProps {}
const Index: React.FC<IIndexRouterProps> = ({ ...props }) => {
  return (
    <Switch>
      <Route path={ADMIN}>
        <ManagerPages>
          <RoutersPortal />
        </ManagerPages>
      </Route>

      <Route path={HOMEPAGE} >
        <HomePage>
          <RoutersHomePage />
        </HomePage>
      </Route>
    </Switch>
  );
};

export default Index;
