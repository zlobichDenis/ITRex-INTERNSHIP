import React from "react";
import { Link } from 'react-router-dom';

import { AppScreens, AuthStages } from "routes";
import { SignUpForm } from "./components";
import { FeedbackWrapper, 
         FeedbackButtons, 
         FeedbackText,
         FeedbackTextQuestion,
         FeedbackTextLink } from "../styles/authentification";


export const SignUp = () => {
    return (
        <FeedbackWrapper>
            <SignUpForm />
            <FeedbackButtons itsSignIn={false}>
                <FeedbackText>
                    <FeedbackTextQuestion>
                        Already have an account?
                    </FeedbackTextQuestion>
                    <FeedbackTextLink>
                        <Link to={`${AppScreens.AUTH}${AuthStages.SIGN_IN}`}>
                            Sign In
                        </Link>
                    </FeedbackTextLink>
                </FeedbackText>
            </FeedbackButtons>
        </FeedbackWrapper>
    )
};

