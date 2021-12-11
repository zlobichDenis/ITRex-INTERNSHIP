import Loader from "react-loader-spinner";

import { FetchStatus, UserRoles } from "const";
import { EmptyList } from "components";
import { AppointmentsListWrapper, AppointmentsList } from "./styles";
import { DoctorControlPanel, PatientControlPanel } from "..";
import { useFetchAppointments } from "../../hooks";
import { createAppointmentsList } from "../../helpers";


export function UserAppointmentsList() {
  const { fetchStatus, appointments, roleName } = useFetchAppointments();

  return (
    <>
      { roleName === UserRoles.PATIENT
        ? <PatientControlPanel />
        : <DoctorControlPanel/> }
      <AppointmentsListWrapper data-testid="appointments-list">
        <AppointmentsList>
          { fetchStatus !== FetchStatus.PENDING
            ? appointments.length > 0
              ? createAppointmentsList(appointments, roleName)
              : <EmptyList/>
            : <Loader
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={3000}/> }
        </AppointmentsList>
      </AppointmentsListWrapper>
    </>
  );
};


