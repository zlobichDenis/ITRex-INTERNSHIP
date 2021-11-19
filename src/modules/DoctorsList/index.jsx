import React from "react";
import PropTypes from 'prop-types';

import { Doctor } from "./components"
import { AppointmentsListWrapper, AppointmentsList } from "../styles";

export const DoctorsList = () => {
    return (
        <AppointmentsListWrapper >
            <AppointmentsList>
                {/* {doctors.map((doctor) => <Doctor key={`doctor-item-${doctor.id}`} doctor={doctor} />)} */}
            </AppointmentsList>
        </AppointmentsListWrapper>
    )
};

// DoctorsListComponent.propTypes = {
// };
