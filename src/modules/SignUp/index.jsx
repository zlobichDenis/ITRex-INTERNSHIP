import React from "react";
import { Link } from 'react-router-dom';

import { AppScreens, AuthStages } from "../../routes/routes";
import { SignUpForm } from "./components";


const SignUp = () => {
    return (
        <div className="feedback-wrapper feedback-wrapper_sign-up">
            <SignUpForm />
            <div className="feedback-buttons">
                <div className="feedback-text">
                    <p className="feedback-text__quest">Already have an account?</p>
                    <Link to={`${AppScreens.AUTH}${AuthStages.SIGN_IN}`} className="feedback-text__link">
                        Sign In
                    </Link>
                </div>
            </div>
        </div>
    )
};

export { SignUp };
