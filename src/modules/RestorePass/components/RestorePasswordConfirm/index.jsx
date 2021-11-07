import React from "react";
import { BackToSignInButton } from "../../../../components";
import { RestoreMessage } from "../RestoreMessage";

export const RestorePassConfirm = () => {
    return (
        <form className="feedback-form">
            <BackToSignInButton />
            <RestoreMessage isConfirm={true}/>
        </form>
    )
};
