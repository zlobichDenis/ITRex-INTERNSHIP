import { Tittle } from "elements";
import { SortSelect } from "..";
import { InputsWrapper, ControlPanel } from "./styles";
import { useSortDoctorAppointments } from "../../hooks";

export function DoctorControlPanel() {
  const { fetchAppointmentsByDate, fetchAppointmentsByLastName } = useSortDoctorAppointments();

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
