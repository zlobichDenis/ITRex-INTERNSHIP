import React from "react";
import PropTypes from "prop-types";

import { RestorePassForm, RestorePassConfirm } from "./components";
import { AppScreens, AuthStages } from "routes";

export const RestorePass = ({ location }) => {
  return (
    <>
      {location.pathname ===
      `${AppScreens.AUTH}${AuthStages.RESTORE_CONFIRM}` ? (
        <RestorePassConfirm />
      ) : (
        <RestorePassForm />
      )}
    </>
  );
};

RestorePass.propTypes = {
  isConfirmed: PropTypes.bool,
  location: PropTypes.object,
};
