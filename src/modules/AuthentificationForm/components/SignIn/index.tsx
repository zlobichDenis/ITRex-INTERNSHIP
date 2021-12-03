import React from "react";
import { Link } from "react-router-dom";

import { AuthStages, AppScreens } from "const";
import { SignInForm } from "./components";
import {
  FeedbackButtons,
  FeedbackText,
  FeedbackTextQuestion,
  FeedbackTextLink,
} from "../../styles";

export function SignIn() {
  return (
    <>
      <SignInForm />
      <FeedbackButtons itsSignIn={true}>
        <FeedbackTextLink>
          <Link
            to={`${AppScreens.AUTH}${AuthStages.RESTORE}`}
            className="feedback-buttons__forgot"
          >
            Forgot password?
          </Link>
        </FeedbackTextLink>
        <FeedbackText>
          <FeedbackTextQuestion>Don’t have an account?</FeedbackTextQuestion>
          <FeedbackTextLink>
            <Link
              to={`${AppScreens.AUTH}${AuthStages.SIGN_UP}`}
              className="feedback-text__link"
            >
              Sign Up
            </Link>
          </FeedbackTextLink>
        </FeedbackText>
      </FeedbackButtons>
    </>
  );
};
