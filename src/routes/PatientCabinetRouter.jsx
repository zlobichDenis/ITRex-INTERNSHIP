import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { patientCabinetRoutes, AppScreens, PatientScreens } from "routes";
import { PrivateRoute } from "./PrivateRoute";

export const PatientCabinetRouter = () => {
  return (
    <Switch>
      {patientCabinetRoutes.map(({ isPrivate, exact, ...props }, index) =>
        isPrivate ? (
          <PrivateRoute exact={exact} key={`path-${index}`} {...props} />
        ) : (
          <Route exact={exact} key={`path-${index}`} {...props} />
        )
      )}
    </Switch>
  );
};
