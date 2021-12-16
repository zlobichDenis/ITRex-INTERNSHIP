import { NavLink } from "react-router-dom";

import { AuthPath, AppPaths } from "const";
import { SignInForm } from "../../components";
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
      <FeedbackButtons>
        <FeedbackTextLink>
          <NavLink
            to={`${AppPaths.AUTH}${AuthPath.RESTORE}`}
            className="feedback-buttons__forgot"
          >
            Forgot password?
          </NavLink>
        </FeedbackTextLink>
        <FeedbackText>
          <FeedbackTextQuestion>Don’t have an account?</FeedbackTextQuestion>
          <FeedbackTextLink>
            <NavLink
              to={`${AppPaths.AUTH}${AuthPath.SIGN_UP}`}
              className="feedback-text__link"
            >
              Sign Up
            </NavLink>
          </FeedbackTextLink>
        </FeedbackText>
      </FeedbackButtons>
    </>
  );
}
