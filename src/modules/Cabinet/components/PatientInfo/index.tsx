import { CabinetInfo } from "../../styles";
import { CabinetControlPanel, UserAppointmentsList, CabinetTabs } from "..";

export function PatientInfo () {
  return (
    <>
      <CabinetTabs />
      <CabinetInfo>
        <CabinetControlPanel itsPatientUser={true}/>
        <UserAppointmentsList />
      </CabinetInfo>
    </>
  );
};
