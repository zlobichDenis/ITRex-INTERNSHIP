import React from "react";
import PropTypes from "prop-types";

import { RestorePassForm, RestorePassConfirm } from "./components";
import { FeedbackWrapper } from "../styles/authentification";
import { AppScreens, AuthStages } from "routes";

export const RestorePass = ({ location }) => {
    return (
        <FeedbackWrapper>
            {location.pathname === `${AppScreens.AUTH}${AuthStages.RESTORE_CONFIRM}`
                ? <RestorePassConfirm />
                : <RestorePassForm />}
        </FeedbackWrapper>
    )
};

RestorePass.propTypes = {
    isConfirmed: PropTypes.bool,
    location: PropTypes.object,
};
