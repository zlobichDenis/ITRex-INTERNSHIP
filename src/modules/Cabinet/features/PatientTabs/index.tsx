import { useAppSelector } from "store";
import { CabinetTab } from "components";
import { useRedirect } from "hooks";
import { AppPaths, DoctorPaths, PatientPaths, UserRoles } from "const";
import { Tabs } from "./styles";
import { getUserRoleName } from "modules/AuthentificationForm/redux";

export function PatientTabs () {
  const { routeToPath } = useRedirect();
  const roleName = useAppSelector(getUserRoleName);

  const routeToResolutionsList = () => routeToPath(`${AppPaths.PATIENT_VIEW}${PatientPaths.RESOLUTION_LIST}`);
  const routeToAppointmentsList = () => routeToPath(`${AppPaths.PATIENT_VIEW}${PatientPaths.RESOLUTION_LIST}`);

  return (
    <Tabs>
      <CabinetTab handleClick={routeToAppointmentsList} text="Appointments" />
      <CabinetTab handleClick={routeToResolutionsList} text="Resolutions" />
    </Tabs>
  );
}
