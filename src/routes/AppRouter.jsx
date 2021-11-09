import React from "react";
import { Switch,
         Route,
         Redirect,
         BrowserRouter as Router } from 'react-router-dom';

import  { AppScreens, appRoutes } from "routes";

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                {appRoutes.map(({ component, path }) => {
                    return <Route key={`route-to${path}`} component={component} path={path} />
                })}
                <Redirect from="/" to={AppScreens.AUTH} />
            </Switch>
        </Router>
    );
};

export { AppRouter };