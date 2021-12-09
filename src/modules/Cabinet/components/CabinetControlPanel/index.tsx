import { useAppSelector } from "store";
import { UserRoles } from "const";
import { ControlPanel } from "./styles";
import { PatientViewControlPanel, DoctorViewControlPanel } from "./components";


export function CabinetControlPanel () {
  const { role_name: roleName } = useAppSelector(state => state.user.userProfile);

  return (
  <ControlPanel>
    { roleName === UserRoles.PATIENT
      ? <PatientViewControlPanel />
      : <DoctorViewControlPanel /> }
  </ControlPanel>
  )
};

