import {
  Switch,
  Redirect,
} from "react-router-dom";

import { AppPaths, AuthPath } from "enums";
import { appRoutes } from "routes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

const AppRouter = () => {
  return (
    <Switch>
      {appRoutes.map(({ isPrivate, forRole, path, ...props }, index) =>
        forRole ? (
          <PrivateRoute role={forRole} key={`path-${index}`} path={path} {...props} />
        ) : (
          <PublicRoute role="route" key={`path-${index}`} path={path} {...props} />
        )
      )}
      <Redirect
        // exact
        from="/"
        to={`${AppPaths.AUTH}${AuthPath.SIGN_UP}`}
      />
    </Switch>
  );
};

export { AppRouter };
