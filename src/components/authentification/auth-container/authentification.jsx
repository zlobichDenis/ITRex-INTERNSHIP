import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { SignUp } from "../sign-up/sign-up";
import { SignIn } from "../sign-in/sign-in";
import { AppScreens, AuthStages } from "../../../common/const.js";
import { RestorePass } from "../restore-pass/restore-pass";
import { RestorePassConfirm } from "../restore-pass-confirm/restore-pass-confirm";
import { Switch, Route, useRouteMatch } from 'react-router-dom';

const AuthContainerComponent = () => {
    let  { path } = useRouteMatch();
    return (
            <section className="feedback">
                <div className="feedback-container">
                    <Switch>
                        <Route exact path={AppScreens.AUTH}>
                            <SignUp />
                        </Route>
                        <Route exact path={`${path}${AuthStages.SIGN_UP}`}>
                            <SignUp />
                        </Route>
                        <Route exact path={`${path}${AuthStages.SIGN_IN}`}>
                            <SignIn />
                        </Route>
                        <Route exact path={`${path}${AuthStages.RESTORE}`}>
                            <RestorePass />
                        </Route>
                        <Route exact path={`${path}${AuthStages.RESTORE_CONFIRM}`}>
                            <RestorePassConfirm />
                        </Route>
                    </Switch>
                </div>
            </section>
    );
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