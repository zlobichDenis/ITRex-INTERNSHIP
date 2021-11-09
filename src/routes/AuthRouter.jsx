import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { AppScreens, AuthStages } from "routes";
import { authRoutes } from "routes";

export const AuthRouter = () => {
    return (
        <Switch>
            {authRoutes.map(({ path, component, isConfirmed }) => {
                return <Route exact key={`auth-route-to-${path}`} path={`${AppScreens.AUTH}${path}`} component={component} isConfirmed={isConfirmed} />
            })}
            <Redirect exact from={AppScreens.AUTH} to={`${AppScreens.AUTH}${AuthStages.SIGN_UP}`}/>
        </Switch>
    )
};