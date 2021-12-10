import { DoctorControlPanel, UserAppointmentsList, DoctorTabs } from "../../features";
import { CabinetInfo } from "../../styles";

export function DoctorInfo () {
  return (
    <>
      <DoctorTabs />
      <CabinetInfo>
        <DoctorControlPanel />
        <UserAppointmentsList />
      </CabinetInfo>
    </>
  );
}
