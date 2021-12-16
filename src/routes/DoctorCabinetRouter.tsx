import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom";

import { doctorCabinetRoutes } from "routes";
import { AppPaths, DoctorPaths } from "const";
import { PrivateRoute } from "./PrivateRoute";

export const DoctorCabinetRouter = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      {doctorCabinetRoutes.map(({ isPrivate, forRole, path, ...props }, index) =>
        (isPrivate && forRole) ? (
          <PrivateRoute key={`path-${index}`} role={forRole} path={path} {...props} />
        ) : (
          <Route key={`path-${index}`} path={path} {...props} />
        )
      )}
      <Redirect from={`${AppPaths.DOCTOR_VIEW}`} to={`${path}${DoctorPaths.APPOINTMENTS}`} />
    </Switch>
  );
};
