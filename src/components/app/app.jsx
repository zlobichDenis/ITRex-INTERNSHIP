import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { AuthContainer } from "../authentification/auth-container/authentification";
import { DoctorViewContainer } from "../doctor-view/doctor-view-container/doctor-view-container";
import { AppScreens } from "../../common/const";
import { PatientViewContainer } from "../patient-view/patient-view-containet/patient-view-container";
import { Switch, Route, Redirect } from "react-router-dom";

const AppComponent = () => {

    return (
        <Switch>
            <Route path={AppScreens.AUTH}>
                <AuthContainer />;
            </Route>
            <Route path={AppScreens.DOCTOR_VIEW}>
                <DoctorViewContainer />;
            </Route>
            <Route path={AppScreens.PATIENT_VIEW}>
                <PatientViewContainer />
            </Route>
            <Redirect from="/" to={AppScreens.AUTH} />
        </Switch>
    )
};

AppComponent.propTypes = {
    activeScreen: PropTypes.string.isRequired,
};

const mapStateToProps = (state, ownProps) => {
    return Object.assign({}, ownProps);
};

const mapDispatchToProps = () => {
    return {};
};

export const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent);