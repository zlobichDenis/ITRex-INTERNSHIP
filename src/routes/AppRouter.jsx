import React from "react";
import { Switch,
         Route,
         Redirect,
         BrowserRouter as Router } from 'react-router-dom';

import  { AppScreens, AuthStages, appRoutes } from "routes";
import { PrivateRoute } from "./PrivateRoute";

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                {appRoutes.map(({ isPrivate, ...props }, index) => (
                    isPrivate  
                        ? <PrivateRoute key={`path-${index}`} {...props}/>
                        : <Route key={`path-${index}`} {...props} />
                ))
                }
                <Redirect exact from="/" to={`${AppScreens.AUTH}${AuthStages.SIGN_UP}`}/>
            </Switch>
        </Router>
    );
};

export { AppRouter };