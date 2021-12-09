import { useEffect } from 'react';

import { useAppSelector, useAppDispatch } from 'store';
import { appointmentsPagination, UserRoles } from 'const';
import { DoctorAppointment, PatientAppointment } from "types";
import {
  fetchDoctorAppointments,
  fetchPatientAppointments,
  getAppointmentsFetchStatus,
  getUserAppointments } from '../redux';
import { getUserRoleName } from "../../AuthentificationForm/redux";

type UseFetchAppointmentsReturnValues = {
  fetchStatus: string,
  appointments: Array<DoctorAppointment | PatientAppointment>,
  roleName: string | null,
}

export const useFetchAppointments = (): UseFetchAppointmentsReturnValues => {
  const fetchStatus = useAppSelector(getAppointmentsFetchStatus);
  const appointments = useAppSelector(getUserAppointments);
  const roleName  = useAppSelector(getUserRoleName);
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