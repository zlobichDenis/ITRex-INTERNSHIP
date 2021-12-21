import { useCallback } from "react";

import { useAppDispatch } from "store";
import { fetchDoctorAppointments } from "../redux";
import { appointmentsPagination, DoctorCabinetSortTypes } from "../const";

export const useSortDoctorAppointments = () => {
  const dispatch = useAppDispatch();

  const fetchAppointmentsByLastName = useCallback(() => {
    dispatch(fetchDoctorAppointments({ ...appointmentsPagination, ...DoctorCabinetSortTypes.LAST_NAME }));
  }, [dispatch]);
  const fetchAppointmentsByDate = useCallback(() => {
    dispatch(fetchDoctorAppointments({ ...appointmentsPagination, ...DoctorCabinetSortTypes.DATE }));
  }, [dispatch]);

  return { fetchAppointmentsByDate, fetchAppointmentsByLastName };
};