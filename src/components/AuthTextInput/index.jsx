import React from "react";
import PropTypes from 'prop-types';

export const AuthTextInput = ({ field, icon, placeholder }) => {
    return (
        <div className="feedback-field">
            <img width="21" src={icon} alt="icon" />
            <input 
                {...field}
                placeholder={placeholder}
                className="feedback-field__input"
                />
        </div>
    )
};


AuthTextInput.propTypes = {
    icon: PropTypes.string,
    placeholder: PropTypes.string,
    field: PropTypes.object,
    name: PropTypes.string,
};