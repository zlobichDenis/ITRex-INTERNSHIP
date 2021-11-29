import React from "react";
import PropTypes from "prop-types";

import { AlertMessageText } from "./styles";

export const AlertMessage = ({ message }) => {
  return (
    <AlertMessageText>
      <p>{message}</p>
    </AlertMessageText>
  );
};

AlertMessage.propTypes = {
  message: PropTypes.string.isRequired,
};
