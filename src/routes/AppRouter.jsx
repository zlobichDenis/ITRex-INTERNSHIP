import React from "react";

import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";

import { AppScreens, AuthStages, appRoutes } from "routes";
import { PrivateRoute } from "./PrivateRoute";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        {appRoutes.map(({ isPrivate, forRole, path, ...props }, index) =>
          forRole ? (
            <PrivateRoute role={forRole} key={`path-${index}`} path={path} {...props} />
          ) : (
            <Route key={`path-${index}`} path={path} {...props} />
          )
        )}
        <Redirect
          exact
          from="/"
          to={`${AppScreens.AUTH}${AuthStages.SIGN_UP}`}
        />
      </Switch>
    </Router>
  );
};

export { AppRouter };
