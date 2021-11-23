import React from "react";

import { CabinetInfo } from "../../styles";
import { CabinetControlPanel, UserAppointmentsList, CabinetTabs } from "..";

export const PatientInfo = () => {
  return (
    <>
      <CabinetTabs />
      <CabinetInfo>
        <CabinetControlPanel itsPatientUser={true}/>
        <UserAppointmentsList itsPatientUser={true} />
      </CabinetInfo>
    </>
  );
};
