import React from "react";
import { connect } from "react-redux";
import { AuthContainer } from './pages/auth-page/authentification' 
import { DoctorViewContainer } from "./pages/doctor-view-page/doctor-view-container"
import { AppScreens } from "./routes/routes";
import { PatientViewContainer } from "./pages/patient-view-page/patient-view-container";
import { Switch, Route, Redirect } from "react-router-dom";

const AppComponent = () => {

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
};

const mapStateToProps = (state, ownProps) => {
    return Object.assign({}, ownProps);
};

const mapDispatchToProps = () => {
    return {};
};

export const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent);