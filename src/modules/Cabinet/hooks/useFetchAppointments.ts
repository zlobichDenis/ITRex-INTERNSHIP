import { UserRoles } from "const";
import { useEffect } from "react";

import { useAppSelector, useAppDispatch } from "store";
import { appointmnetsPagination } from "const"
import { fetchDoctorAppointments, fetchPatientAppointments } from "../redux";

export const useFetchAppointments = () => {
  const { fetchStatus, appointments } = useAppSelector(state => state.appointments);
  const { role_name: roleName } = useAppSelector(state => state.user.userProfile);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (roleName === UserRoles.PATIENT) {
      dispatch(fetchPatientAppointments(appointmnetsPagination));
    } else {
      dispatch(fetchDoctorAppointments(appointmnetsPagination));
    }
  }, [dispatch, roleName])
  
  return { fetchStatus, appointments, roleName };
}