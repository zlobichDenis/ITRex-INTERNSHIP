import React from "react";
import PropTypes from "prop-types";
import Loader from "react-loader-spinner";

import { EmptyList } from "../../components";
import { AppointmentsListWrapper, AppointmentsList } from "./styles";
import { Tittle } from "elements";
import { useFetchAppointments } from "../../redux";
import { createAppointmentsList } from "../../utils";

export const UserAppointmentsList = ({ itsPatientUser }) => {
  const { isLoading, appointments, authError } = useFetchAppointments(itsPatientUser);
  console.log(authError, appointments)
  return (
    <AppointmentsListWrapper>
    <Tittle>My Patients</Tittle>
      <AppointmentsList>
      {!isLoading
        ? appointments.length > 0 
            ? createAppointmentsList(appointments, itsPatientUser)
            : <EmptyList />
        : <Loader 
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000}/>}
      </AppointmentsList>
    </AppointmentsListWrapper>
  );
};

UserAppointmentsList.propTypes = {
  itsPatientUser: PropTypes.bool.isRequired,
};
