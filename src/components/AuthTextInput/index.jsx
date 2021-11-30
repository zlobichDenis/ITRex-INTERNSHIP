import React from "react";
import PropTypes from "prop-types";

import { InputText } from "elements";
import { InputField } from "../styles";

export const AuthTextInput = ({ field, icon, placeholder, role }) => {
  return (
    <InputField>
      {icon ? <img width="21" src={icon} alt="icon" /> : null}
      <InputText role={role} {...field} placeholder={placeholder}></InputText>
    </InputField>
  );
};

AuthTextInput.propTypes = {
  role: PropTypes.string,
  icon: PropTypes.string,
  placeholder: PropTypes.string,
  field: PropTypes.object,
  name: PropTypes.string,
};
