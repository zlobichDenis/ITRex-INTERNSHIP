import { Switch, Redirect, useRouteMatch } from "react-router-dom";

import { doctorCabinetRoutes } from "routes";
import { AppPaths, DoctorPaths } from "enums";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const DoctorCabinetRouter = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      {doctorCabinetRoutes.map(({ isPrivate, forRole, path, ...props }, index) =>
        (isPrivate && forRole) ? (
          <PrivateRoute key={`path-${index}`} role={forRole} path={path} {...props} />
        ) : (
          <PublicRoute key={`path-${index}`} path={path} {...props} />
        )
      )}
      <Redirect from={`${AppPaths.DOCTOR_VIEW}`} to={`${path}${DoctorPaths.APPOINTMENTS}`} />
    </Switch>
  );
};
