import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

import { PersonOptionsSvg, DateSvg, AppointmentSvg } from "assets";
import {
  AppointmentsItem,
  AppointmentsItemHeader,
  UserInfoWrapper,
  UserInfo,
  UserName,
  AppointmentOptions,
  UserItemDivider,
  UserDetails,
  VisitDate,
  VisitMessage,
  VisitMessageIcon,
} from "../styles";
import { UserStatus, UserStatusIcon } from "./styles";

export const Patient = ({ appointment }) => {
  const { patient, status, visit_date: date, reason } = appointment;
  const { first_name: firstName, id, last_name: lastName, photo } = patient

  return (
    <AppointmentsItem>
      <AppointmentsItemHeader>
        <UserInfoWrapper>
          <img width="48" height="48" src={photo} alt="Patient Photo" />
          <UserInfo>
            <UserName>{`${firstName} ${lastName}`}.</UserName>
            <UserStatus>
              <UserStatusIcon isActive={status} />
              <span>{`Appointment is ${status}`}</span>
            </UserStatus>
          </UserInfo>
        </UserInfoWrapper>
        <AppointmentOptions>
          <img src={PersonOptionsSvg} width="21" height="21" alt="icon" />
        </AppointmentOptions>
      </AppointmentsItemHeader>
      <UserItemDivider></UserItemDivider>
      <UserDetails>
        <VisitDate>
          <img src={DateSvg} width="21" height="21" alt="icon" />
          <span>{`${moment(date).format("ddd MMM d, YYYY hh:mm A")}-${moment(date).add(1, 'hours').format('hh:mm A')} `}</span>
        </VisitDate>
        <VisitMessage>
          <VisitMessageIcon>
            <img src={AppointmentSvg} width="21" height="21" alt="icon" />
          </VisitMessageIcon>
          <span>{reason}</span>
        </VisitMessage>
      </UserDetails>
    </AppointmentsItem>
  );
};

Patient.propTypes = {
  appointment: PropTypes.object.isRequired,
};
