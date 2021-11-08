import React from "react";
import { Switch,
         Route,
         Redirect,
         BrowserRouter as Router } from 'react-router-dom';

import { Authentification, DoctorView, PatientView } from "../pages";
import { AppScreens } from "./routes";

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path={AppScreens.AUTH}>
                    <Authentification />
                </Route>
                <Route path={AppScreens.DOCTOR_VIEW}>
                    <DoctorView />
                </Route>
                <Route path={AppScreens.PATIENT_VIEW}>
                    <PatientView  />
                </Route>
                <Redirect from="/" to={AppScreens.AUTH} />
            </Switch>
        </Router>
    );
};

export { AppRouter };