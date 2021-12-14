import { useCallback } from "react";

import { useAppDispatch } from "store";
import { Tittle } from "elements";
import { SortSelect } from "..";
import { InputsWrapper, ControlPanel } from "./styles";
import { fetchDoctorAppointments } from "modules/AppointmentsList/redux";
import { appointmentsPagination, DoctorCabinetSortTypes } from "modules/AppointmentsList/const";

export function DoctorControlPanel() {
  const dispatch = useAppDispatch();

  const fetchAppointmentsByLastName = useCallback(() => {
    dispatch(fetchDoctorAppointments({ ...appointmentsPagination, ...DoctorCabinetSortTypes.LAST_NAME }));
  }, [dispatch]);
  const fetchAppointmentsByDate = useCallback(() => {
    dispatch(fetchDoctorAppointments({ ...appointmentsPagination, ...DoctorCabinetSortTypes.DATE }));
  }, [dispatch]);

  return (
    <ControlPanel>
      <Tittle>My Patients</Tittle>
      <InputsWrapper>
        <SortSelect
          fetchSortAppointmentsByName={fetchAppointmentsByLastName}
          fetchSortAppointmentsByDate={fetchAppointmentsByDate}
        />
      </InputsWrapper>
    </ControlPanel>
  );
}