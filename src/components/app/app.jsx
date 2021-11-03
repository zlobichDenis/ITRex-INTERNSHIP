import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { AuthContainer } from "../authentification/auth-container/authentification";
import { DoctorViewContainer } from "../doctor-view/doctor-view-container/doctor-view-container";
import { AppScreens } from "../../common/const";
import { PatientViewContainer } from "../patient-view/patient-view-containet/patient-view-container";

const AppComponent = (props) => {
    const { activeScreen } = props;
    switch (activeScreen) {
        case AppScreens.AUTH:
            return <AuthContainer />;
        case AppScreens.DOCTOR_VIEW:
            return <DoctorViewContainer />;
        case AppScreens.PATIENT_VIEW:
            return <PatientViewContainer />
        default:
            return <AuthContainer />; 
    };
};

AppComponent.propTypes = {
    activeScreen: PropTypes.string.isRequired,
};

const mapStateToProps = (state, ownProps) => {
    return {
        activeScreen: state.activeScreen,
    };
};

const mapDispatchToProps = () => {
    return {};
};

export const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent);