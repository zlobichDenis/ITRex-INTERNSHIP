import React from "react"
import PropTypes from 'prop-types';

import { PersonOptionsSvg, DateSvg, AppointmentSvg } from "assets";
import { AppointmentsItem, 
        AppointmentsItemHeader, 
        UserInfoWrapper, 
        UserInfo, 
        UserName, 
        AppointmentOptions, 
        UserItemDivider, 
        UserDetails, 
        VisitDate,
        VisitMessage,
        VisitMessageIcon  } from "modules/styles";
import { UserStatus, UserStatusIcon } from "./styles";

export const Patient = ({ patient }) => {
    const { firstName, lastName, photo, date, appointment, isConfirmAppointment } = patient;
    return (
        <AppointmentsItem>
        <AppointmentsItemHeader>
            <UserInfoWrapper>
                <img width='48' height="48" src={photo} alt="Patient Photo" />
                <UserInfo>
                    <UserName>{`${firstName} ${lastName}`}.</UserName>
                    <UserStatus>
                    <UserStatusIcon isActive={isConfirmAppointment ? true : false}/>
                        <span>{`Appointment is ${isConfirmAppointment ? 'confirmed' : 'canceled'}`}</span>
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
                {/* <div className="doctor-cabinet__patient-date-icon"> */}
                    <img src={DateSvg} width="21" height="21" alt="icon" />
                {/* </div>                                               */}
                <span>{date}</span>
            </VisitDate>
            <VisitMessage>
                <VisitMessageIcon>
                    <img src={AppointmentSvg} width="21" height="21" alt="icon" />
                </VisitMessageIcon>                         
                <span>{appointment}</span>
            </VisitMessage>
        </UserDetails>
    </AppointmentsItem>
    )
};

Patient.propTypes = {
    patient: PropTypes.object.isRequired,
}