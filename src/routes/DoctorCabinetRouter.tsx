import { Switch, Route, Redirect } from "react-router-dom";

import { doctorCabinetRoutes } from "routes";
import { AppPaths, DoctorPaths, PatientPaths } from "const";
import { PrivateRoute } from "./PrivateRoute";

export const DoctorCabinetRouter = () => {
  return (
    <Switch>
      {doctorCabinetRoutes.map(({ isPrivate, forRole, path, ...props }, index) =>
        (isPrivate && forRole) ? (
          <PrivateRoute key={`path-${index}`} role={forRole} path={path} {...props} />
        ) : (
          <Route key={`path-${index}`} path={path} {...props} />
        )
      )}
      <Redirect from={`${AppPaths.DOCTOR_VIEW}`} to={`${AppPaths.DOCTOR_VIEW}${DoctorPaths.CABINET}`} />
    </Switch>
  );
};
