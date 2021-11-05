import React from "react";
import { connect } from "react-redux";
import { AuthStages } from "../../routes/routes";
import { AppScreens } from "../../routes/routes";
import { Link } from 'react-router-dom';
import { SignInForm } from "../../components/smart/sign-in-form.jsx/sign-in-form";


const SignInComponent = () => {
    
    return (
        <div className="feedback-wrapper feedback-wrapper_sign-in">
            <SignInForm />
            <div className="feedback-buttons feedback-buttons_sign-in">
                <Link to={`${AppScreens.AUTH}${AuthStages.RESTORE}`} className="feedback-buttons__forgot">
                    Forgot password? 
                </Link>
                <div className="feedback-text">
                    <p className="feedback-text__quest">Don’t have an account?</p>
                    <Link to={`${AppScreens.AUTH}${AuthStages.SIGN_UP}`} className="feedback-text__link">
                        Sign Up
                    </Link>
                </div>
            </div>
        </div>
    )
};


const mapStateToProps = (state, ownProps) => {
    return Object.assign({}, ownProps);
};

const mapDispatchToProps = (disptach) => {
    return {}
};

export const SignIn = connect(mapStateToProps, mapDispatchToProps)(SignInComponent);