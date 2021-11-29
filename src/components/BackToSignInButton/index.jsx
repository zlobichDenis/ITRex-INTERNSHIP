import React from "react";
import PropTypes from "prop-types";

import { BackArrowSvg } from "assets";
import { RestoreButton } from "./styles";

export const BackToSignInButton = ({ backToSignIn }) => {
  return (
    <RestoreButton onClick={backToSignIn}>
      <img width="21" height="21" src={BackArrowSvg} alt="icon" />
      <span>Restore password</span>
    </RestoreButton>
  );
};

BackToSignInButton.propTypes = {
  backToSignIn: PropTypes.func,
};
