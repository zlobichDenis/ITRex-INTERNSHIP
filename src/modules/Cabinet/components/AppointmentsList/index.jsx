import React from "react";
import PropTypes from "prop-types";
import Loader from "react-loader-spinner";

import { FetchStatus } from "const";
import { EmptyList } from "../../components";
import { AppointmentsListWrapper, AppointmentsList } from "./styles";
import { useFetchAppointments } from "../../redux";
import { createAppointmentsList } from "../../utils";

export const UserAppointmentsList = ({ itsPatientUser }) => {
  const { fetchStatus, appointments, authError } = useFetchAppointments(itsPatientUser);
  console.log(authError, appointments)
  return (
    <AppointmentsListWrapper>
      <AppointmentsList>
      {fetchStatus !== FetchStatus.PENDING
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
