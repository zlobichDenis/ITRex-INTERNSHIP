import React from "react";
import PropTypes from "prop-types";

import { RestorePassForm, RestorePassConfirm } from "./components";

export const RestorePass = ({ isConfirm }) => {
    return (
        <div className="feedback-wrapper feedback-wrapper_restore-password">
            {isConfirm 
                ? <RestorePassConfirm />
                : <RestorePassForm />}
        </div>
    )
};

RestorePass.propTypes = {
    isConfirm: PropTypes.bool,
};
