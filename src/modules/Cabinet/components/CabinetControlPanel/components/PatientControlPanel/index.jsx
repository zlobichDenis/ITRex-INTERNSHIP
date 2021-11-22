import React from "react";

import { SortSelect } from "components";
import { Tittle } from "elements";
import { InputsWrapper } from "../styles";
import { ActionButton } from "components";

export const PatientViewControlPanel = () => {
  return (
    <>
      <Tittle>My Appointments</Tittle>
      <InputsWrapper>
        <SortSelect />
        <ActionButton
          textContent="Create an appointment"
          itsUserPatient={true}
        />
      </InputsWrapper>
    </>
  );
};
