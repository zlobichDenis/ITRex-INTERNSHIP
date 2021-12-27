import { NavLink, useRouteMatch } from "react-router-dom";

import { BackToSignInButton } from "components";
import { useRedirect } from "hooks";
import { RestoreMessage } from "../RestoreMessage";
import { AppPaths, AuthPath } from "enums";
import { FeedbackForm } from "../../styles";

export function RestorePassConfirm () {
  const { path } = useRouteMatch();
  const { routeToPath } = useRedirect()

  const backToSignIn = () => {
    routeToPath(`${AppPaths.AUTH}${AuthPath.SIGN_IN}`)
  };

  return (
    <FeedbackForm>
      <NavLink to={`${path}${AuthPath.SIGN_IN}`}>
        <BackToSignInButton backToSignIn={backToSignIn} />
      </NavLink>
      <RestoreMessage isConfirm={true} />
    </FeedbackForm>
  );
};
