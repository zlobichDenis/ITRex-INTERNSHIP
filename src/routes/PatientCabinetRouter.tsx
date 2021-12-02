import { Switch, Route, Redirect } from "react-router-dom";

import { patientCabinetRoutes, AppScreens, PatientScreens } from "routes";
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
      <Redirect from={`${AppScreens.PATIENT_VIEW}`} to={`${AppScreens.PATIENT_VIEW}${PatientScreens.CABINET}`} />
    </Switch>
  );
};
