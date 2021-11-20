import React from "react";

import { PatientCabinetRouter } from "routes";
import { CabinetContentWrapper } from "../styles";


export const PatientCabinet = () => {
    return (
        <CabinetContentWrapper>
            <PatientCabinetRouter />
        </CabinetContentWrapper>
    )
};