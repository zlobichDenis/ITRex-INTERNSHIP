import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

import { DateSvg, PersonOptionsSvg, HeartSvg } from "assets";
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

export const Doctor = ({ appointment }) => {
  const { doctor, visit_date: date, reason } = appointment;
  const { first_name: firstName, last_name: lastName, photo } = doctor;

  return (
    <AppointmentsItem role="doctor">
      <AppointmentsItemHeader>
        <UserInfoWrapper>
          <img width="48" height="48" src={photo} alt="Patient Photo" />
          <UserInfo>
            <UserName className="patient-cabinet__doctor-name">{`${firstName} ${lastName}`}</UserName>
          </UserInfo>
        </UserInfoWrapper>
        <AppointmentOptions className="patient-cabinet__doctor-btn">
          <img src={PersonOptionsSvg} width="21" height="21" alt="icon" />
        </AppointmentOptions>
      </AppointmentsItemHeader>
      <UserItemDivider></UserItemDivider>
      <UserDetails>
        <VisitDate>
          <div>
            <img src={DateSvg} width="21" height="21" alt="icon" />
          </div>
          <span>{`${moment(date).format("ddd MMM d, YYYY hh:mm A")}-${moment(date).add(1, 'hours').format('hh:mm A')} `}</span>
        </VisitDate>
        <VisitMessage>
          <VisitMessageIcon>
            <img src={HeartSvg} width="21" height="21" alt="icon" />
          </VisitMessageIcon>
          <span>{reason}</span>
        </VisitMessage>
      </UserDetails>
    </AppointmentsItem>
  );
};

Doctor.propTypes = {
  appointment: PropTypes.object.isRequired,
};
