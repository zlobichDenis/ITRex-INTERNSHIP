import React from "react";
import PropTypes from 'prop-types';
import { Field } from "formik";

export const AuthTextInput = ({ nameText, type, icon, placeholderText }) => {
    console.log(icon)
    return (
        <div className="feedback-field">
            <img width="21" height="21" src={`./img/icon-${icon}.png`} alt="icon"></img>
            <Field 
                name={nameText}
                type={type}
                placeholder={placeholderText}
                className="feedback-field__input"/>
        </div>
    )
};

AuthTextInput.propTypes = {
    nameText: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    placeholderText: PropTypes.string.isRequired,
};