import React from "react";
import PropTypes from 'prop-types';

export const AuthTextInput = ({ field, icon, placeholder }) => {
    return (
        <div className="feedback-field">
            <img width="21" height="21" src={`./img/icon-${icon}.png`} alt="icon"></img>
            <input 
                {...field}
                placeholder={placeholder}
                className="feedback-field__input"
                />
        </div>
    )
};


AuthTextInput.propTypes = {
    icon: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    field: PropTypes.object,
    name: PropTypes.string,
};