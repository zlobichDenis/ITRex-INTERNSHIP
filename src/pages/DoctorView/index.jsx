import React from "react";
import { CabinetHeader } from "components";
import { PatientsList, DoctorViewTabs, DoctorViewControlPanel } from "modules";

import { CabinetSection, 
        Cabinet, 
        CabinetContentWrapper, 
        CabinetInfo } from "../styles";

export const DoctorView = () => {
    return (
         <CabinetSection>
            <Cabinet>
                <CabinetHeader  />
                <CabinetContentWrapper>
                    <DoctorViewTabs />
                    <CabinetInfo>
                        <DoctorViewControlPanel />
                             <PatientsList />
                    </CabinetInfo>
                </CabinetContentWrapper>
            </Cabinet>
        </CabinetSection>
    )
};