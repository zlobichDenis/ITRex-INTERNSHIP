import React from "react";
import { connect } from "react-redux";
import { SignUp } from "../../containers/sign-up/sign-up";
import { SignIn } from "../../containers/sign-in/sign-in";
import { AppScreens, AuthStages } from "../../routes.js";
import { RestorePass } from "../../containers/restore-pass/restore-pass";
import { RestorePassConfirm } from "../../containers/restore-pass-confirm/restore-pass-confirm";
import { Switch, Route } from 'react-router-dom';

const AuthContainerComponent = () => {

    return (
        <section className="feedback">
            <div className="feedback-container">
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
                        <RestorePass />
                    </Route>
                    <Route exact path={`${AppScreens.AUTH}${AuthStages.RESTORE_CONFIRM}`}>
                        <RestorePassConfirm />
                    </Route>
                </Switch>
            </div>
        </section>
    )
};

const mapStateToProps = (state, ownProps) => {
    return Object.assign({}, ownProps);
};

const mapDispatchToProps = () => {
    return {};
};

export const AuthContainer = connect(mapStateToProps, mapDispatchToProps)(AuthContainerComponent);