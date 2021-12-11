import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

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
    </Switch>
  );
};
