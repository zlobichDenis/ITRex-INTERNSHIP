import React from "react";

import { ControlPanel } from "./styles";
import { PatientViewControlPanel, DoctorViewControlPanel } from "./components";

export const CabinetControlPanel = (itsPatientUser) => {
  return (
  <ControlPanel>
    { itsPatientUser
      ? <PatientViewControlPanel />
      : <DoctorViewControlPanel />}
  </ControlPanel>
  )
};
