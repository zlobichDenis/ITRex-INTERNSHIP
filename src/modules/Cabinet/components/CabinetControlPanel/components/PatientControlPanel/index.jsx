import React from "react";

import { SortSelect, ActionButton } from "components";
import { AppScreens, PatientScreens } from "routes";
import { Tittle } from "elements";
import { InputsWrapper } from "../styles";
import { useRedirect } from "store";

export const PatientViewControlPanel = () => {
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
