import React from "react";

import { SearchInput, SortSelect } from "components";
import { ControlPanel, InputsWrapper } from "./styles";

export const DoctorViewControlPanel = () => {
    return (
        <ControlPanel>
        <h3>My Patients</h3>
            <InputsWrapper>
                <SearchInput />
                <SortSelect />
            </InputsWrapper>
    </ControlPanel>
    )
};