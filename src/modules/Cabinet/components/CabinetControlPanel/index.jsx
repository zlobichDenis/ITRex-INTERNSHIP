import React from "react";
import PropTypes from "prop-types";

import { ControlPanel } from "./styles";
import { PatientViewControlPanel, DoctorViewControlPanel } from "./components";

export const CabinetControlPanel = ({ itsPatientUser }) => {
  return (
  <ControlPanel>
    { itsPatientUser
      ? <PatientViewControlPanel />
      : <DoctorViewControlPanel />}
  </ControlPanel>
  )
};

CabinetControlPanel.propTypes = {
  itsPatientUser: PropTypes.bool.isRequired,
}
