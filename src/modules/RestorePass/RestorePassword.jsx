import React from "react";
import { connect } from "react-redux";
import { RestorePassForm } from "../../../modules1/restorePassword/restorePassword";

const RestorePassComponent = () => {

    return (
        <div className="feedback-wrapper feedback-wrapper_restore-password">
            <RestorePassForm />
        </div>
    )
}


const mapStateToProps = (state, ownProps) => {
    return Object.assign({}, ownProps);
};

const mapDispatchToProps = (disptach) => {
    return {}
};

export const RestorePass = connect(mapStateToProps, mapDispatchToProps)(RestorePassComponent);