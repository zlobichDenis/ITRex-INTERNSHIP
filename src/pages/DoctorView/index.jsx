import React from "react";

import { CabinetHeader } from "components";
import { DoctorCabinet } from "modules";
import { CabinetSection, 
        Cabinet } from "../styles";

export const DoctorView = () => {
    return (
         <CabinetSection>
            <Cabinet>
                <CabinetHeader  />
                <DoctorCabinet />
            </Cabinet>
        </CabinetSection>
    )
};