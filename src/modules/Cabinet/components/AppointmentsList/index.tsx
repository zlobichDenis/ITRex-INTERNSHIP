import Loader from "react-loader-spinner";

import { FetchStatus } from "const";
import { EmptyList } from "..";
import { AppointmentsListWrapper, AppointmentsList } from "./styles";
import { useFetchAppointments } from "../../hooks";
import { createAppointmentsList } from "../../utils";

export function UserAppointmentsList () {
  const { fetchStatus, appointments, roleName } = useFetchAppointments();

  return (
    <AppointmentsListWrapper data-testid="appointments-list">
      <AppointmentsList>
      {fetchStatus !== FetchStatus.PENDING
        ? appointments.length > 0 
            ? createAppointmentsList(appointments, roleName)
            : <EmptyList />
        : <Loader 
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000}/>}
      </AppointmentsList>
    </AppointmentsListWrapper>
  );
};

