import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { SuccessIconSvg, UnsuccessIconSvg, CloseSvg, WaitingSvg } from "assets";
import { FetchStatus } from "const";
import {
  NotificationWrapper,
  NotificationContent,
  NotificationText,
  NotificationTextTittle,
  NotificationMessage,
  CloseButton,
} from "./styles";

export const Notification = ({ message, fetchStatus, isShow, closeNotificationHandle }) => {
  return (
    <NotificationWrapper isShowing={isShow} fetchStatus={fetchStatus}>
      <NotificationContent>
        <img
          src={fetchStatus === FetchStatus.SUCCESS ? SuccessIconSvg : UnsuccessIconSvg}
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
            onClick={closeNotificationHandle}
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
  fetchStatus: PropTypes.string,
  isShow: PropTypes.bool,
  closeNotificationHandle: PropTypes.func,
};
