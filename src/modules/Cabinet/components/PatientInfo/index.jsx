import React from "react";
import { useSelector } from "react-redux";

import { CabinetInfo } from "../../styles";
import { CabinetControlPanel, UserAppointmentsList, CabinetTabs } from "..";

export const PatientInfo = () => {
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
