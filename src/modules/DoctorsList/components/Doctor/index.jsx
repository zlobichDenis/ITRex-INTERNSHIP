import React from "react";
import PropTypes from 'prop-types';

import { DateSvg, PersonOptionsSvg, HeartSvg } from "assets";

export const Doctor = ({ doctor }) => {
    const { firstName, lastName, date, appointment, photo } = doctor;
    return (
        <li className="patient-cabinet__doctor-item">
        <div className="patient-cabinet__doctor-header">
            <div className="patient-cabinet__doctor-info">
                <img width='48' height="48" src={photo} alt="Patient Photo" />
                <div className="patient-cabinet__doctor-desc">
                    <span className="patient-cabinet__doctor-name">{`${firstName} ${lastName}`}</span>
                </div>
            </div>
            <button className="patient-cabinet__doctor-btn">
                <img src={PersonOptionsSvg} width="21" height="21" alt="icon" />
            </button>
        </div>
        <div className="patient-cabinet__divider"></div>
        <div className="patient-cabinet__doctor-details">
            <div className="patient-cabinet__doctor-date">
                <div className="patient-cabinet__doctor-date-icon">
                    <img src={DateSvg} width="21" height="21" alt="icon" />
                </div>                                              
                <span>{date}</span>
            </div>
            <div className="patient-cabinet__doctor-message">
                <div className="patient-cabinet__doctor-message-icon">
                    <img src={HeartSvg} width="21" height="21" alt="icon" />  
                </div>                         
                <span>{appointment}</span>
            </div>
        </div>
    </li>
    )
};

Doctor.propTypes = {
    doctor: PropTypes.object.isRequired,
}