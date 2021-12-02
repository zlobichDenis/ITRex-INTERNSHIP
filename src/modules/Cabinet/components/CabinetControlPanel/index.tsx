import { ControlPanel } from "./styles";
import { PatientViewControlPanel, DoctorViewControlPanel } from "./components";

type CabinetControlPanelProps = {
  itsPatientUser: boolean,
}

export function CabinetControlPanel ({ itsPatientUser }: CabinetControlPanelProps) {
  return (
  <ControlPanel>
    { itsPatientUser
      ? <PatientViewControlPanel />
      : <DoctorViewControlPanel />}
  </ControlPanel>
  )
};

