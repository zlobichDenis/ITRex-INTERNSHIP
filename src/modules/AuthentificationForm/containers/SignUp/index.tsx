import { NavLink} from "react-router-dom";

import { AppPaths, AuthPath } from "const";
import { SignUpForm } from "../../components";
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
      <FeedbackButtons >
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
}
