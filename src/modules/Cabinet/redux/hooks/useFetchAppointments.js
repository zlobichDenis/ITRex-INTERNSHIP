import { useEffect } from "react";
import { useSelector, useDispatch  } from "react-redux";

import { fetchDoctorAppointments, fetchPatientAppointments } from "..";
import * as tokenRepository from "store/tokenRepository";

export const useFetchAppointments = (itsPatientUser) => {
  const { fetchStatus, appointments } = useSelector(state => state.appointments);
  const appointmentsError = useSelector(state => state.error);
  const dispatch = useDispatch();
  const token = tokenRepository.getToken();

  useEffect(() => {
    if (itsPatientUser) {
      dispatch(fetchPatientAppointments([20, 0, token]));
    } else {
      dispatch(fetchDoctorAppointments([20, 0, token]));
    }
  }, [dispatch])
  
  return { fetchStatus, appointments, appointmentsError };
}