import React from "react";
import { Link } from 'react-router-dom';

import { AuthStages, AppScreens } from "routes";
import { SignInForm } from "./components";


export const SignIn = () => {
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