import React from "react";
import PropTypes from "prop-types";

import { AlertMessageText } from "./styles";

export const AlertMessage = ({ message, role }) => {
  return (
    <AlertMessageText role={role}>
      <p>{message}</p>
    </AlertMessageText>
  );
};

AlertMessage.propTypes = {
  role: PropTypes.string,
  message: PropTypes.string.isRequired,
};
