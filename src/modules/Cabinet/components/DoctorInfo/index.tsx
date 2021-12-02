import { CabinetControlPanel, UserAppointmentsList, CabinetTabs } from "..";

import { CabinetInfo } from "../../styles";

export const DoctorInfo = () => {
  return (
    <>
      <CabinetTabs />
      <CabinetInfo>
        <CabinetControlPanel itsPatientUser={false}/>
        {/* <UserAppointmentsList itsPatientUser={false} /> */}
        <UserAppointmentsList />
      </CabinetInfo>
    </>
  );
};
