import { useCallback } from "react";

import { useAppDispatch } from "store";
import { Tittle } from "elements";
import { SortSelect } from "modules/Cabinet/components";
import { InputsWrapper, ControlPanel } from "./styles";
import { fetchDoctorAppointments } from "../../redux";
import { appointmentsPagination, DoctorCabinetSortTypes } from "../../const";

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
