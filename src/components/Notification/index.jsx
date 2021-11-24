import React, { useState } from "react";
import PropTypes from "prop-types";

import { SuccessIconSvg, UnsuccessIconSvg, CloseSvg } from "assets";
import {
  NotificationWrapper,
  NotificationContent,
  NotificationText,
  NotificationTextTittle,
  NotificationMessage,
  CloseButton,
} from "./styles";

export const Notification = ({ message, isSuccess, isDisplay, handleClose }) => {

  return (
    <NotificationWrapper isShowing={isDisplay} isSuccess={isSuccess}>
      <NotificationContent>
        <img
          src={isSuccess ? SuccessIconSvg : UnsuccessIconSvg}
          width="20"
          height="20"
          alt="success icon"
        />

        <NotificationText>
          <NotificationTextTittle>{message}</NotificationTextTittle>
          <NotificationMessage>
            We show this message if something irreparable has happened. But
            there is nothing irreparable
          </NotificationMessage>
        </NotificationText>

        <CloseButton type="button">
          <img
            onClick={handleClose}
            src={CloseSvg}
            width="15"
            height="15"
            alt="success icon"
          />
        </CloseButton>
      </NotificationContent>
    </NotificationWrapper>
  );
};

Notification.propTypes = {
  message: PropTypes.string,
  isSuccess: PropTypes.bool.isRequired,
  isDisplay: PropTypes.bool.isRequired,
  handleClose: PropTypes.func,
};
