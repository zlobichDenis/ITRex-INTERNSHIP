import { CabinetControlPanel, UserAppointmentsList, CabinetTabs } from "..";
import { CabinetInfo } from "../../styles";

export function DoctorInfo () {
  return (
    <>
      <CabinetTabs />
      <CabinetInfo>
        <CabinetControlPanel />
        <UserAppointmentsList />
      </CabinetInfo>
    </>
  );
};
