import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { SignUp } from "../sign-up/sign-up";
import { SignIn } from "../sign-in/sign-in";
import { AuthStages } from "../../../common/const.js";
import { RestorePass } from "../restore-pass/restore-pass";
import { RestorePassConfirm } from "../restore-pass-confirm/restore-pass-confirm";

const AuthContainerComponent = (props) => {
    const { authStage } = props;
    let activeAuthStage = null;

    switch (authStage) {
        case AuthStages.SIGN_UP:
            activeAuthStage = <SignUp />;
            break;
        case AuthStages.SIGN_IN:
            activeAuthStage = <SignIn />;
            break;
        case AuthStages.RESTORE:
            activeAuthStage = <RestorePass />
            break;
        case AuthStages.RESTORE_CONFIRM:
            activeAuthStage = <RestorePassConfirm />
            break;
    };

    return (
        <section className="feedback">
            <div className="feedback-container">
                {activeAuthStage}
            </div>
        </section>
    );
};

AuthContainerComponent.propTypes = {
    authStage: PropTypes.string.isRequired,
};

const mapStateToProps = (state, ownProps) => {
    return Object.assign({}, ownProps, {
        authStage: state.authStage,
    });
};

const mapDispatchToProps = () => {
    return {};
};

export const AuthContainer = connect(mapStateToProps, mapDispatchToProps)(AuthContainerComponent);