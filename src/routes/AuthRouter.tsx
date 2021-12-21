import { Switch, Route, Redirect } from "react-router-dom";

import { AppPaths, AuthPath } from "const";
import { authRoutes } from "routes";

export const AuthRouter = () => {
  return (
    <Switch>
      {authRoutes.map(({ path, component }) => {
        return (
          <Route
            key={`auth-route-to-${path}`}
            path={path}
            component={component}
          />
        );
      })}
      <Redirect from={AppPaths.AUTH} to={`${AppPaths.AUTH}${AuthPath.SIGN_UP}`} />
    </Switch>
  );
};
