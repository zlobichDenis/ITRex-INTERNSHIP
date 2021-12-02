import { ControlPanel } from "./styles";
import { PatientViewControlPanel, DoctorViewControlPanel } from "./components";

export const CabinetControlPanel = ({ itsPatientUser }: any) => {
  return (
  <ControlPanel>
    { itsPatientUser
      ? <PatientViewControlPanel />
      : <DoctorViewControlPanel />}
  </ControlPanel>
  )
};

