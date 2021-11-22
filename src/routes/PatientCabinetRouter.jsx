import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { patientCabinetRoutes, AppScreens, PatientScreens } from "routes";
import { PrivateRoute } from "./PrivateRoute";

export const PatientCabinetRouter = () => {
  return (
    <Switch>
      {patientCabinetRoutes.map(({ isPrivate, path, ...props }, index) =>
        isPrivate ? (
          <PrivateRoute key={`path-${index}`} path={`${AppScreens.PATIENT_VIEW}${path}`} {...props} />
        ) : (
          <Route exact key={`path-${index}`} {...props} />
        )
      )}
      <Redirect from={`${AppScreens.PATIENT_VIEW}`} to={`${AppScreens.PATIENT_VIEW}${PatientScreens.CABINET}`} />
    </Switch>
  );
};
