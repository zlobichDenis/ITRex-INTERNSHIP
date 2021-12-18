import { Switch, Redirect, useRouteMatch } from "react-router-dom";

import { patientCabinetRoutes } from "routes";
import { AppPaths, PatientPaths } from "const";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const PatientCabinetRouter = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      {patientCabinetRoutes.map(({ isPrivate, forRole, path, ...props }, index) =>
        (isPrivate && forRole) ? (
          <PrivateRoute key={`path-${index}`} role={forRole} path={path} {...props} />
        ) : (
          <PublicRoute key={`path-${index}`} path={path} {...props} />
        )
      )}
      <Redirect from={`${AppPaths.PATIENT_VIEW}`} to={`${path}${PatientPaths.APPOINTMENTS}`} />
    </Switch>
  );
};
