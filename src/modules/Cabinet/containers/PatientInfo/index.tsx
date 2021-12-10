import { CabinetInfo } from "../../styles";
import { UserAppointmentsList, PatientTabs } from "../../features";
import { PatientControlPanel } from "../../features";

export function PatientInfo () {
  return (
    <>
      <PatientTabs />
      <CabinetInfo role="patient-tabs">
        <PatientControlPanel />
        <UserAppointmentsList />
      </CabinetInfo>
    </>
  );
};
