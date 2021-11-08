import React from "react";
import PropTypes from "prop-types";

import { BackArrowSvg } from "../../assets";

export const BackToSignInButton = ({ backToSignIn }) => {
    return (
        <div onClick={backToSignIn} className="feedback-restore-password">
            <img width="21" height="21" src={BackArrowSvg} alt="icon" />
            <span>Restore password</span>
        </div>
    )
};

BackToSignInButton.propTypes = {
    backToSignIn : PropTypes.func,
}