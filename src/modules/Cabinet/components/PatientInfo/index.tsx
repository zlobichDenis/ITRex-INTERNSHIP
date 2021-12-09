import { CabinetInfo } from "../../styles";
import { CabinetControlPanel, UserAppointmentsList, CabinetTabs } from "..";

export function PatientInfo () {
  return (
    <>
      <CabinetTabs />
      <CabinetInfo role="patient-tabs">
        <CabinetControlPanel />
        <UserAppointmentsList />
      </CabinetInfo>
    </>
  );
};
