import React from "react";
import PropTypes from "prop-types";

import { RestorePassForm, RestorePassConfirm } from "./components";
import { FeedbackWrapper } from "../styles/authentification";

export const RestorePass = ({ isConfirm }) => {
    return (
        <FeedbackWrapper>
            {isConfirm 
                ? <RestorePassConfirm />
                : <RestorePassForm />}
        </FeedbackWrapper>
    )
};

RestorePass.propTypes = {
    isConfirm: PropTypes.bool,
};
