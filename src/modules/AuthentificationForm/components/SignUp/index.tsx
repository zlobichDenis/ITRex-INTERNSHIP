import { Link } from "react-router-dom";

import { AppScreens, AuthStages } from "const";
import { SignUpForm } from "./components";
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
            <Link to={`${AppScreens.AUTH}${AuthStages.SIGN_IN}`}>Sign In</Link>
          </FeedbackTextLink>
        </FeedbackText>
      </FeedbackButtons>
    </>
  );
};
