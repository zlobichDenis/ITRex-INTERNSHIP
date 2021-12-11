import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { AppPaths, AuthPath } from "const";
import { appRoutes } from "routes";
import { PrivateRoute } from "./PrivateRoute";

const AppRouter = () => {
  return (
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
            to={`${AppPaths.AUTH}${AuthPath.SIGN_UP}`}
          />
      </Switch>
  );
};

export { AppRouter };
