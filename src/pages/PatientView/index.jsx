import React from "react";

import { CabinetHeader } from "components";
import { DoctorsList, PatientViewTabs, PatientViewControlPanel } from "modules";
import { CabinetSection, 
        Cabinet, 
        CabinetContentWrapper, 
        CabinetInfo } from "../styles";

export const PatientView = () => {
    return (
        <CabinetSection>
            <Cabinet>
                <CabinetHeader  />
                <CabinetContentWrapper>
                    <PatientViewTabs />
                    <CabinetInfo >
                        <PatientViewControlPanel />
                        <DoctorsList />
                    </CabinetInfo>
                </CabinetContentWrapper>
            </Cabinet>
        </CabinetSection>
    )
};
