import React from "react";
import PropTypes from 'prop-types';
import { Patient } from "../patient/patient";

export const PatientsList = (props) => {
    const  { patients } = props;
    return (
        <ul className="doctor-cabinet__patients-list">
            {patients.map((patient) => <Patient key={`patient-${patient.id}`} patient={patient} />)}
        </ul>
    )
};

PatientsList.propTypes = {
    patients: PropTypes.arrayOf(PropTypes.object).isRequired,
};