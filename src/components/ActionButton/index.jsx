import React from "react";
import PropTypes from "prop-types";

import { ButtonArrowSvg } from "assets";
import { ButtonWrapper, Button } from "./styles";

import Loader from "react-loader-spinner";
import { colors } from "styles";


export const ActionButton = ({
  textContent,
  icon = ButtonArrowSvg,
  type = "submit",
  isDisabled = true,
  itsUserPatient = false,
  itsUserView = false,
  handleClick,
}) => {
  return (
    <ButtonWrapper itsUserView={itsUserView} itsUserPatient={itsUserPatient}>
      <Button onClick={handleClick} type={type} isDisabled={isDisabled}>
        <span>{textContent}</span>
        {icon ? <img height="21" width="21" src={icon} alt="icon" /> : null}
      </Button>
    </ButtonWrapper>
  );
};

ActionButton.propTypes = {
  textContent: PropTypes.string,
  icon: PropTypes.string,
  itsUserPatient: PropTypes.bool,
  itsUserView: PropTypes.bool,
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
  handleClick: PropTypes.func,
};
