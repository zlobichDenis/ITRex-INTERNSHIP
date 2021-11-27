import { useEffect } from "react";
import { useSelector, useDispatch  } from "react-redux";

import { fetchDoctorAppointments, fetchPatientAppointments } from "..";

export const useFetchAppointments = (itsPatientUser) => {
  const { fetchStatus, appointments } = useSelector(state => state.appointments);
  const dispatch = useDispatch();

  useEffect(() => {
    if (itsPatientUser) {
      dispatch(fetchPatientAppointments({ limit: 20, offset: 0 }));
    } else {
      dispatch(fetchDoctorAppointments({ limit: 20, offset: 0 }));
    }
  }, [dispatch])
  
  return { fetchStatus, appointments };
}