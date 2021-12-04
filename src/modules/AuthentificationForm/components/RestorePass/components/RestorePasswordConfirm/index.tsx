import { useHistory } from "react-router";

import { BackToSignInButton } from "components";
import { RestoreMessage } from "../RestoreMessage";
import { AppScreens, AuthStages } from "const";
import { FeedbackForm } from "modules/Cabinet/styles";

export function RestorePassConfirm () {
  let history = useHistory();
  const backToSignIn = () =>
    history.push(`${AppScreens.AUTH}${AuthStages.SIGN_IN}`);
  return (
    <FeedbackForm>
      <BackToSignInButton backToSignIn={backToSignIn} />
      <RestoreMessage isConfirm={true} />
    </FeedbackForm>
  );
};
