import React, { useState } from "react";
import PropTypes from "prop-types";

import { InputText } from "elements";
import { InputField, InputIcon } from "../styles";

export const PasswordInput = ({ placeholder, field, icon }) => {
    const [ isShowingPass, setVisiblePass ] = useState(false);
    const showPassToggle = () => {
        setVisiblePass((isShowingPass) => !isShowingPass);
    };

    return (
        <InputField>
            <img width="21" src={icon} alt="icon" />
            <InputText 
                {...field}
                type={isShowingPass ? 'text' : 'password'}
                placeholder={placeholder}
                className="feedback-field__input feedback-field__input_password"
            />   
            <InputIcon onClick={showPassToggle} isShowingPass={isShowingPass}/>                          
        </InputField> 
    )
};

PasswordInput.propTypes = {
    placeholder: PropTypes.string,
    field: PropTypes.object,
    icon: PropTypes.any,
}