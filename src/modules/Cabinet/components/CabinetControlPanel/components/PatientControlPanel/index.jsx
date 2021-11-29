import React from "react";
import { useHistory } from "react-router";

import { SortSelect } from "components";
import { AppScreens, PatientScreens } from "routes";
import { Tittle } from "elements";
import { InputsWrapper } from "../styles";
import { ActionButton } from "components";

export const PatientViewControlPanel = () => {
  let history = useHistory();
  const routeToAppointmentForm = () => {
    history.push(`${AppScreens.PATIENT_VIEW}${PatientScreens.CREATE_APPOINTMENT}`);
  };

  return (
    <>
      <Tittle>My Appointments</Tittle>
      <InputsWrapper>
        <SortSelect />
        <ActionButton
          textContent="Create an appointment"
          itsUserPatient={true}
          handleClick={routeToAppointmentForm}
        />
      </InputsWrapper>
    </>
  );
};
