import { Switch, Route, Redirect } from "react-router-dom";

import { patientCabinetRoutes } from "routes";
import { AppPaths, PatientPaths } from "const";
import { PrivateRoute } from "./PrivateRoute";

export const PatientCabinetRouter = () => {
  return (
    <Switch>
      {patientCabinetRoutes.map(({ isPrivate, forRole, path, ...props }, index) =>
        (isPrivate && forRole) ? (
          <PrivateRoute key={`path-${index}`} role={forRole} path={path} {...props} />
        ) : (
          <Route key={`path-${index}`} path={path} {...props} />
        )
      )}
      <Redirect from={`${AppPaths.PATIENT_VIEW}`} to={`${AppPaths.PATIENT_VIEW}${PatientPaths.APPOINTMENTS}`} />
    </Switch>
  );
};
