import React from "react";
import { connect } from "react-redux";
import { BackToSignInButton } from "../../../../old structure/components/ui/back-to-sign-in-button/back-to-sign-in-button";
import { RestoreMessage } from "../../../../old structure/components/ordinary/restore-message/restore-message";

const RestorePassConfirmComponent = () => {

    return (
        <div className="feedback-wrapper feedback-wrapper_restore-password feedback-wrapper_restore-confirm">
            <form className="feedback-form">
                <BackToSignInButton />
                <RestoreMessage isConfirm={true}/>
            </form>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return Object.assign({}, ownProps, {});
};

const mapDispatchToProps = (disptach) => {
    return {};
};

export const RestorePassConfirm = connect(mapStateToProps, mapDispatchToProps)(RestorePassConfirmComponent);