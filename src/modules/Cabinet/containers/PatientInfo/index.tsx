import { CabinetInfo } from "../../styles";
import { UserAppointmentsList, PatientTabs } from "../../features";
import { PatientCabinetRouter } from "routes";
import { PatientControlPanel } from "../../features";

export function PatientInfo () {
  return (
    <>
      <PatientTabs />
      <CabinetInfo role="patient-tabs">
        <PatientCabinetRouter />
      </CabinetInfo>
    </>
  );
}
