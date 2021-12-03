import { ConnectedRouter } from "connected-react-router";
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { AppScreens, AuthStages } from "const";
import { appRoutes } from "routes";
import { history } from "store";
import { PrivateRoute } from "./PrivateRoute";

const AppRouter = () => {
  return (
    <ConnectedRouter history={history}>
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
      </ConnectedRouter>
  );
};

export { AppRouter };
