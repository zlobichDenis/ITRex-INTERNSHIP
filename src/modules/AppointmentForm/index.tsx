import { useRouteMatch } from "react-router-dom";

import { Tittle } from "elements";
import { AppPaths, PatientPaths } from "const";
import { UserPath } from "components";
import { useRedirect } from "hooks";
import { AppointmentForm } from "./components";

export function AppointmentFormContainer () {
  const math = useRouteMatch(AppPaths.PATIENT_VIEW);
  const { routeToPath } = useRedirect();

  const routeToAppointmentsList = () => {
    routeToPath(`${math?.url}${PatientPaths.APPOINTMENTS}`)
  };

  return (
    <>
      <UserPath handleClick={routeToAppointmentsList}/>
      <Tittle>
        Make an appointment
      </Tittle>
      <AppointmentForm />
    </>
  )
}

