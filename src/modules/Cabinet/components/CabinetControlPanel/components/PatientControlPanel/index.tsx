import { SortSelect, ActionButton } from "components";
import { AppScreens, PatientScreens } from "routes";
import { Tittle } from "elements";
import { InputsWrapper } from "../styles";
import { useRedirect } from "hooks";

export function PatientViewControlPanel () {
  const { routeToPath } = useRedirect();
  const redirectToAppointmentForm = () => {
    routeToPath(`${AppScreens.PATIENT_VIEW}${PatientScreens.CREATE_APPOINTMENT}`)
  }

  return (
    <>
      <Tittle>My Appointments</Tittle>
      <InputsWrapper>
        <SortSelect />
        <ActionButton
          role={'redirect-button'}
          textContent="Create an appointment"
          itsUserPatient={true}
          handleClick={redirectToAppointmentForm}
        />
      </InputsWrapper>
    </>
  );
};
