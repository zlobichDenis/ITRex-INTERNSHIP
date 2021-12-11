import { NavLink} from "react-router-dom";

import { AppPaths, AuthPath } from "const";
import { SignUpForm } from "../../features";
import {
  FeedbackButtons,
  FeedbackText,
  FeedbackTextQuestion,
  FeedbackTextLink,
} from "../../styles";

export function SignUp () {
  return (
    <>
      <SignUpForm />
      <FeedbackButtons itsSignIn={false}>
        <FeedbackText>
          <FeedbackTextQuestion>Already have an account?</FeedbackTextQuestion>
          <FeedbackTextLink>
            <NavLink to={`${AppPaths.AUTH}${AuthPath.SIGN_IN}`}>
              Sign In
            </NavLink>
          </FeedbackTextLink>
        </FeedbackText>
      </FeedbackButtons>
    </>
  );
};
