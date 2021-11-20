import React from "react";
import { PatientsList, DoctorViewTabs, DoctorViewControlPanel } from "./components";

import {CabinetContentWrapper, 
        CabinetInfo } from "../styles";

export const DoctorCabinet = () => {
    return (
        <CabinetContentWrapper>
            <DoctorViewTabs />
            <CabinetInfo>
                <DoctorViewControlPanel />
                    <PatientsList />
            </CabinetInfo>
        </CabinetContentWrapper>
    )
};