import React from "react";

import { SearchInput, SortSelect } from "components";
import { Tittle } from "elements";
import { ControlPanel, InputsWrapper } from "modules/styles";

export const DoctorViewControlPanel = () => {
    return (
        <ControlPanel>
        <Tittle>My Patients</Tittle>
            <InputsWrapper>
                <SearchInput />
                <SortSelect />
            </InputsWrapper>
    </ControlPanel>
    )
};