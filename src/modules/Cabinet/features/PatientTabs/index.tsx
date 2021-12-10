import { CabinetTab } from "components";
import { useRedirect } from "hooks";
import { AppPaths, PatientPaths } from "const";
import { Tabs } from "./styles";

export function PatientTabs () {
  const { routeToPath } = useRedirect();

  const routeToResolutionsList = () => routeToPath(`${AppPaths.PATIENT_VIEW}${PatientPaths.RESOLUTION_LIST}`);
  const routeToAppointmentsList = () => routeToPath(`${AppPaths.PATIENT_VIEW}${PatientPaths.CABINET}`);

  return (
    <Tabs>
      <CabinetTab handleClick={routeToAppointmentsList} text="Appointments" />
      <CabinetTab handleClick={routeToResolutionsList} text="Resolutions" />
    </Tabs>
  );
}
