import React from "react";

import { SortSelect } from "components";
import { Tittle } from "elements";
import { ControlPanel, InputsWrapper } from "modules/styles";
import { ActionButton } from "components";

export const PatientViewControlPanel = () => {
    return (
        <ControlPanel>
            <Tittle>My Appointments</Tittle>
            <InputsWrapper>
                <SortSelect />
                <ActionButton textContent="Create an appointment" itsUserPatient={true}/>
            </InputsWrapper>
        </ControlPanel>
    )
};