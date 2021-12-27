import { useEffect } from 'react';

import { useAppSelector, useAppDispatch } from 'store';
import { appointmentsPagination, UserRoles } from 'enums';
import {
  fetchDoctorAppointments,
  fetchPatientAppointments,
  getAppointmentsFetchStatus,
  getUserAppointments } from '../redux';
import { getUserRoleName } from "modules/AuthentificationForm/redux";

export const useFetchAppointments = () => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, roleName])
  
  return { fetchStatus, appointments, roleName };
}