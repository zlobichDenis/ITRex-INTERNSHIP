import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import Loader from "react-loader-spinner";

import { Patient } from "./components" 
import { EmptyList } from "../../components";
import { AppointmentsListWrapper, AppointmentsList } from "./styles";
import { fetchDoctorAppointments } from "modules/Cabinet/redux";
import { Tittle } from "elements";

export const UserAppointmentsList = ({ itsPatientUser }) => {
  const { isLoading, appointments } = useSelector(state => state.appointments);
  const dispatch = useDispatch();

  useEffect(() => {
    if (itsPatientUser) {

    } else {
      dispatch(fetchDoctorAppointments([20, 0, sessionStorage.getItem("access_token")]))
    }
  }, [])

  return (
    <AppointmentsListWrapper>
    <Tittle>My Patients</Tittle>
      <AppointmentsList>
      {!isLoading
        ? appointments.length > 0 
            ? appointments.map((appointment, index) => <Patient key={`patient-${appointment.id}-${index}`} appointment={appointment} />)
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
