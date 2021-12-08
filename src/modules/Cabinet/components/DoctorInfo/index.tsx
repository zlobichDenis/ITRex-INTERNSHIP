import { CabinetControlPanel, UserAppointmentsList, CabinetTabs } from "..";
import { CabinetInfo } from "../../styles";

export function DoctorInfo () {
  return (
    <>
      <CabinetTabs/>
      <CabinetInfo>
        <CabinetControlPanel itsPatientUser={false}/>
        <UserAppointmentsList />
      </CabinetInfo>
    </>
  );
};
