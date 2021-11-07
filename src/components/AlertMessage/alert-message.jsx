import React from "react";
import PropTypes from 'prop-types';

export const AlertMessage = ({ message }) => {
    
    return (
        <div className="feedback-message feedback-message_show feedback-message_password">
            <p className="feedback-message_text">{message}</p>
        </div> 
    )
};

AlertMessage.propTypes = {
    message: PropTypes.string.isRequired,
}