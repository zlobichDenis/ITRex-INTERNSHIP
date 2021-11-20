import React from "react";

import { CabinetInfo } from "modules/styles";
import { PatientViewTabs, DoctorsList, PatientViewControlPanel } from "..";

export const PatientInfo = () => {
    return (
        <>
            <PatientViewTabs />
                <CabinetInfo >
                    <PatientViewControlPanel />
                    <DoctorsList />
                </CabinetInfo>
        </>
    )
}