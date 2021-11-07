import React from "react";
import PropTypes from 'prop-types';

export const RestoreMessage = ({ isConfirm }) => {
    return (
        <div className="feedback-message_restore">
            <p className="feedback-message__item">
                {isConfirm
                    ?   <><span>An email has been sent to </span>
                        <span className="feedback-message__email">example@exam.com</span> 
                        <span>.Check your inbox, and click the reset link provided.</span></>

                    :   <span>Please use your email address, and we’ll send you the link to reset your password</span>}
            </p>
        </div>
    )
};

RestoreMessage.propTypes = {
    isConfirm: PropTypes.bool.isRequired,
}

