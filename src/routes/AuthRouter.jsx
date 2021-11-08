import React from "react";
import { Switch, Route } from "react-router-dom";

import { AppScreens, AuthStages } from "routes";
import { SignUp, SignIn, RestorePass } from "modules";

export const AuthRouter = () => {
    return (
        <Switch>
            <Route exact path={AppScreens.AUTH}>
                <SignUp />
            </Route>
            <Route exact path={`${AppScreens.AUTH}${AuthStages.SIGN_UP}`}>
                <SignUp />
            </Route>
            <Route exact path={`${AppScreens.AUTH}${AuthStages.SIGN_IN}`}>
                <SignIn />
            </Route>
            <Route exact path={`${AppScreens.AUTH}${AuthStages.RESTORE}`}>
                <RestorePass isConfirm={false}/>
            </Route>
            <Route exact path={`${AppScreens.AUTH}${AuthStages.RESTORE_CONFIRM}`}>
                <RestorePass isConfirm={true}/>
            </Route>
        </Switch>
    )
};