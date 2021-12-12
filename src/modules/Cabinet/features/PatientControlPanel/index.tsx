import { useRouteMatch } from "react-router-dom";

import { ActionButton } from "components";
import { AppPaths, PatientPaths } from "const";
import { Tittle } from "elements";
import { InputsWrapper, ControlPanel } from "./styles";
import { useRedirect } from "hooks";

export function PatientControlPanel () {
  const { routeToPath } = useRedirect();
  const match = useRouteMatch(`${AppPaths.PATIENT_VIEW}`);

  const redirectToAppointmentForm = () => {
    routeToPath(`${match?.path}${PatientPaths.CREATE_APPOINTMENT}`);
  };

  return (
    <ControlPanel>
      <Tittle>My Appointments</Tittle>
      <InputsWrapper>
        <ActionButton
          width={244}
          role='redirect-button'
          textContent="Create an appointment"
          itsUserPatient={true}
          handleClick={redirectToAppointmentForm}
        />
      </InputsWrapper>
    </ControlPanel>
  );
}
