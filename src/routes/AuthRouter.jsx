import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { AppScreens, AuthStages } from "routes";
import { authRoutes } from "routes";

export const AuthRouter = () => {
    return (
        <Switch>
            {authRoutes.map(({ path, component }) => {
                return <Route exact key={`auth-route-to-${path}`} path={`${AppScreens.AUTH}${path}`} component={component} />
            })}
        </Switch>
    )
};