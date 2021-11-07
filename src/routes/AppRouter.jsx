import React from "react";
import { Switch, Route, Redirect } from 'react-router-dom';
import { AuthContainer } from './pages/auth-page/authentification' 
import { DoctorViewContainer } from "./pages/doctor-view-page/doctor-view-container"
import { AppScreens } from "./routes/routes";
import { PatientViewContainer } from "./pages/patient-view-page/patient-view-container";

export const AppRouter = () => {
    return (
        <Switch>
            <Route path={AppScreens.AUTH}>
                <AuthContainer />
            </Route>
            <Route path={AppScreens.DOCTOR_VIEW}>
                <DoctorViewContainer />
            </Route>
            <Route path={AppScreens.PATIENT_VIEW}>
                <PatientViewContainer />
            </Route>
            <Redirect from="/" to={AppScreens.AUTH} />
        </Switch>
    )
}