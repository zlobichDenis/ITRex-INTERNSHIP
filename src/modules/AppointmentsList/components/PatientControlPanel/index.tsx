import { useRouteMatch } from "react-router-dom";

import { ActionButton } from "components";
import { ActionButtonPaddings, AppPaths, PatientPaths } from "enums";
import { Tittle } from "elements";
import { InputsWrapper, ControlPanel } from "./styles";
import { useRedirect } from "hooks";

export function PatientControlPanel () {
  const { routeToPath } = useRedirect();
  const match = useRouteMatch(`${AppPaths.PATIENT_VIEW}`);

  const redirectToAppointmentForm = () => {
    routeToPath(`${match?.url}${PatientPaths.CREATE_APPOINTMENT}`);
  };

  return (
    <ControlPanel>
      <Tittle>My Appointments</Tittle>
      <InputsWrapper>
        <ActionButton
          padding={ActionButtonPaddings.CREATE_APPOINTMENT}
          role='redirect-button'
          textContent="Create an appointment"
          handleClick={redirectToAppointmentForm}
        />
      </InputsWrapper>
    </ControlPanel>
  );
}
