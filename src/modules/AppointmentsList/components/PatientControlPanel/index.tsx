import { useRouteMatch } from "react-router-dom";

import { ActionButton } from "components";
import { actionButtonPaddings, AppPaths, PatientPaths } from "enums";
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
          padding={actionButtonPaddings.CREATE_APPOINTMENT}
          role='redirect-button'
          textContent="Create an appointment"
          handleClick={redirectToAppointmentForm}
        />
      </InputsWrapper>
    </ControlPanel>
  );
}
