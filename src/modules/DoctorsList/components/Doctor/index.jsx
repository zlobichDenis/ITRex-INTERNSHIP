import React from "react";
import PropTypes from 'prop-types';

import { DateSvg, PersonOptionsSvg, HeartSvg } from "assets";
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

export const Doctor = ({ doctor }) => {
    const { firstName, lastName, date, appointment, photo } = doctor;
    return (
        <AppointmentsItem>
        <AppointmentsItemHeader>
            <UserInfoWrapper>
                <img width='48' height="48" src={photo} alt="Patient Photo" />
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
                <span>{date}</span>
            </VisitDate>
            <VisitMessage>
                <VisitMessageIcon>
                    <img src={HeartSvg} width="21" height="21" alt="icon" />  
                </VisitMessageIcon>                         
                <span>{appointment}</span>
            </VisitMessage>
        </UserDetails>
    </AppointmentsItem>
    )
};

Doctor.propTypes = {
    doctor: PropTypes.object.isRequired,
}