import { useRouteMatch } from "react-router-dom";

import { ActionButton } from "components";
import { AppPaths, PatientPaths } from "const";
import { Tittle } from "elements";
import { InputsWrapper, ControlPanel } from "./styles";
import { useRedirect } from "hooks";

export function PatientControlPanel () {
  const { routeToPath } = useRedirect();
  const { path } = useRouteMatch();

  const redirectToAppointmentForm = () => {
    routeToPath(`${path}${PatientPaths.CREATE_APPOINTMENT}`);
  };

  return (
    <ControlPanel>
      <Tittle>My Appointments</Tittle>
      <InputsWrapper>
        <ActionButton
          role='redirect-button'
          textContent="Create an appointment"
          itsUserPatient={true}
          handleClick={redirectToAppointmentForm}
        />
      </InputsWrapper>
    </ControlPanel>
  );
}
