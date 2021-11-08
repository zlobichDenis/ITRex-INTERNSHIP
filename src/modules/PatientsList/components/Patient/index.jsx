import React from "react"
import PropTypes from 'prop-types';

import { PersonOptionsSvg, DateSvg, AppointmentSvg } from "assets";

export const Patient = ({ patient }) => {
    const { firstName, lastName, photo, date, appointment, isConfirmAppointment } = patient;
    return (
        <li className="doctor-cabinet__patient-item">
        <div className="doctor-cabinet__patient-header">
            <div className="doctor-cabinet__patient-info">
                <img width='48' height="48" src={photo} alt="Patient Photo" />
                <div className="doctor-cabinet__patient-desc">
                    <span className="doctor-cabinet__patient-name">{`${firstName} ${lastName}`}.</span>
                    <div className="doctor-cabinet__patient-status">
                        <svg className={`doctor-cabinet__patient-status-color ${isConfirmAppointment ? "doctor-cabinet__patient-status-color_active" : ""}`} width="8" height="8" viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg">
                            <ellipse cx="3.95637" cy="4" rx="3.95637" ry="4"/>
                        </svg>
                        <span>{`Appointment is ${isConfirmAppointment ? 'confirmed' : 'canceled'}`}</span>
                    </div>
                </div>
            </div>
            <button className="doctor-cabinet__patient-btn">
                <img src={PersonOptionsSvg} width="21" height="21" alt="icon" />
            </button>
        </div>
        <div className="doctor-cabinet__divider"></div>
        <div className="doctor-cabinet__patient-details">
            <div className="doctor-cabinet__patient-date">
                <div className="doctor-cabinet__patient-date-icon">
                    <img src={DateSvg} width="21" height="21" alt="icon" />
                </div>                                              
                <span>{date}</span>
            </div>
            <div className="doctor-cabinet__patient-message">
                <div className="doctor-cabinet__patient-message-icon">
                    <img src={AppointmentSvg} width="21" height="21" alt="icon" />
                </div>                         
                <span>{appointment}</span>
            </div>
        </div>
    </li>
    )
};

Patient.propTypes = {
    patient: PropTypes.object.isRequired,
}