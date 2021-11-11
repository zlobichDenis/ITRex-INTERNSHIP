import React from "react";
import PropTypes from 'prop-types';

import { InputText } from "elements";
import { InputField } from "../styles";

export const AuthTextInput = ({ field, icon, placeholder }) => {
    return (
        <InputField>
            <img width="21" src={icon} alt="icon" />
            <InputText
                {...field}
                placeholder={placeholder}
                >
            </InputText>
        </InputField>
    )
};


AuthTextInput.propTypes = {
    icon: PropTypes.string,
    placeholder: PropTypes.string,
    field: PropTypes.object,
    name: PropTypes.string,
};