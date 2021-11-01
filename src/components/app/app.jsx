import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { authStageActionCreator } from "../../store/action-creators/auth-stage-action-creator";
import { AuthContainer } from "../authentification/auth-container/authentification";

const AppComponent = (props) => {
    return <AuthContainer />
};

AppComponent.propTypes = {
    authStage: PropTypes.string.isRequired,
}

const mapStateToProps = (state, ownProps) => {
    return Object.assign({}, ownProps, {
        authStage: state.authStage,
    });
};

const mapDispatchToProps = (disptach) => {
    return {
        onChangeAuthStage: function(authStage) {
            disptach(authStageActionCreator(authStage));
        }
    }
};

export const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent);