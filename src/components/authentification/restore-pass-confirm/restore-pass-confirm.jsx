import React from "react";
import { connect } from "react-redux";
import { AuthStages, AppScreens } from "../../../common/const";
import { Link } from 'react-router-dom';

const RestorePassConfirmComponent = () => {

    return (
        <div className="feedback-wrapper feedback-wrapper_restore-password feedback-wrapper_restore-confirm">
            <form className="feedback-form">
                <div className="feedback-restore-password">
                    <Link to={`${AppScreens.AUTH}${AuthStages.SIGN_IN}`} className="feedback-restore__btn">
                        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.499951 7.80005L6.19995 13.4C6.59995 13.8 7.19995 13.8 7.59995 13.4C7.99995 13 7.99995 12.4 7.59995 12L2.69995 7.00005L7.59995 2.00005C7.99995 1.60005 7.99995 1.00005 7.59995 0.600049C7.39995 0.400049 7.19995 0.300049 6.89995 0.300049C6.59995 0.300049 6.39995 0.400049 6.19995 0.600049L0.499951 6.20005C0.0999512 6.70005 0.0999512 7.30005 0.499951 7.80005C0.499951 7.70005 0.499951 7.70005 0.499951 7.80005Z" fill="#A1ABC9"/>
                        </svg>
                    </Link>
                    <span>Restore password</span>
                </div>
                <div className="feedback-message_show feedback-message_restore">
                    <p className="feedback-message__item">
                        <span>An email has been sent to </span>
                        <span className="feedback-message__email">example@exam.com</span> 
                        <span>.Check your inbox, and click the reset link provided.</span>
                    </p>
                </div>
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