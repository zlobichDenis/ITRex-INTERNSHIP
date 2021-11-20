import React from "react";
import PropTypes from 'prop-types';

import { Patient } from "./components";
import { EmptyList } from "components";
import { AppointmentsListWrapper, AppointmentsList } from "modules/styles";

export const PatientsList = () => {

    return (
        <AppointmentsListWrapper>
            <AppointmentsList>
                {/* {patients.length > 0 
                    ? patients.map((patient) => <Patient key={`patient-${patient.id}`} patient={patient} />)
                    : <EmptyList />} */}
            </AppointmentsList>
        </AppointmentsListWrapper>
    )
};

// PatientsListComponent.propTypes = {
//     patients: PropTypes.arrayOf(PropTypes.object).isRequired,
// };