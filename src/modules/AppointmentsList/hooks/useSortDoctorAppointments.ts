import { useAppDispatch } from "store";
import { fetchDoctorAppointments } from "../redux";
import { appointmentsPagination, DoctorCabinetSortTypes } from "../const";

export const useSortDoctorAppointments = () => {
  const dispatch = useAppDispatch();

  const fetchAppointmentsByLastName = () => {
    dispatch(fetchDoctorAppointments({ ...appointmentsPagination, ...DoctorCabinetSortTypes.LAST_NAME }));
  };
  const fetchAppointmentsByDate = () => {
    dispatch(fetchDoctorAppointments({ ...appointmentsPagination, ...DoctorCabinetSortTypes.DATE }));
  };

  return { fetchAppointmentsByDate, fetchAppointmentsByLastName };
};