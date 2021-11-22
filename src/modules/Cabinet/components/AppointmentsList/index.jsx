import React from "react";
import PropTypes from "prop-types";

import { Patient } from "./components";
import { EmptyList } from "components";
import { AppointmentsListWrapper, AppointmentsList } from "./styles";

export const UserAppointmentsList = ({ itsPatientUser }) => {
  return (
    <AppointmentsListWrapper>
      <AppointmentsList>
        {/* {patients.length > 0 
            ? patients.map((patient) => <Patient key={`patient-${patient.id}`} patient={patient} />)
            : <EmptyList />} */}
      </AppointmentsList>
    </AppointmentsListWrapper>
  );
};

UserAppointmentsList.propTypes = {
  itsPatientUser: PropTypes.bool.isRequired,
};
