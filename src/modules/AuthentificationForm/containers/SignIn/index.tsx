import { Link } from "react-router-dom";

import { AuthPath, AppPaths } from "const";
import { SignInForm } from "../../features";
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
            to={`${AppPaths.AUTH}${AuthPath.RESTORE}`}
            className="feedback-buttons__forgot"
          >
            Forgot password?
          </Link>
        </FeedbackTextLink>
        <FeedbackText>
          <FeedbackTextQuestion>Don’t have an account?</FeedbackTextQuestion>
          <FeedbackTextLink>
            <Link
              to={`${AppPaths.AUTH}${AuthPath.SIGN_UP}`}
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
