import { useEffect } from "react";

import { useAppSelector, useAppDispatch } from "store";
import { appointmentsPagination, UserRoles } from "const"
import { fetchDoctorAppointments, fetchPatientAppointments } from "../redux";


export const useFetchAppointments = () => {
  const { fetchStatus, appointments } = useAppSelector(state => state.appointments);
  const { role_name: roleName } = useAppSelector(state => state.user.userProfile);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (roleName === UserRoles.PATIENT) {
      dispatch(fetchPatientAppointments(appointmentsPagination));
    } else {
      dispatch(fetchDoctorAppointments(appointmentsPagination));
    }
  }, [dispatch, roleName])
  
  return { fetchStatus, appointments, roleName };
}