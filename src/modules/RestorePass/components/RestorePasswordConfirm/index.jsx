import React from "react";
import { useHistory } from "react-router";

import { BackToSignInButton } from "../../../../components";
import { RestoreMessage } from "../RestoreMessage";
import { AppScreens, AuthStages } from "../../../../routes";

export const RestorePassConfirm = () => {
    let history = useHistory();
    const backToSignIn = () => history.push(`${AppScreens.AUTH}${AuthStages.SIGN_IN}`);
    return (
        <form className="feedback-form">
            <BackToSignInButton backToSignIn={backToSignIn}/>
            <RestoreMessage isConfirm={true}/>
        </form>
    )
};
