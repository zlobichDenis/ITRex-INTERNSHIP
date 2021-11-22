import React from "react";
import { CabinetControlPanel, UserAppointmentsList, CabinetTabs } from "..";

import { CabinetInfo } from "../../styles";

export const DoctorInfo = () => {
  return (
    <>
      <CabinetTabs />
      <CabinetInfo>
        <CabinetControlPanel />
        <UserAppointmentsList itsPatientUser={true} />
      </CabinetInfo>
    </>
  );
};
