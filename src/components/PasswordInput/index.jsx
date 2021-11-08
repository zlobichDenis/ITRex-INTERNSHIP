import React, { useState } from "react";
import PropTypes from "prop-types";


export const PasswordInput = ({ placeholder, field, icon }) => {
    const [ isShowingPass, setVisiblePass ] = useState(false);
    const showPassToggle = () => {
        setVisiblePass((isShowingPass) => !isShowingPass);
    };

    return (
        <div className="feedback-field">
            <img width="21" src={icon} alt="icon" />
            <input 
                {...field}
                type={isShowingPass ? 'text' : 'password'}
                placeholder={placeholder}
                className="feedback-field__input feedback-field__input_password"
            />                              
            <div onClick={showPassToggle} className={`feedback-field__icon ${isShowingPass ? 'feedback-field__icon_show' : ''} feedback-field__icon_password`}></div> 
        </div> 
    )
};

PasswordInput.propTypes = {
    placeholder: PropTypes.string,
    field: PropTypes.object,
    icon: PropTypes.any,
}