import React from "react";

import { CabinetHeader } from "components";
import { PatientCabinet } from "modules";
import { CabinetSection, Cabinet } from "../styles";

export const PatientView = () => {
    return (
        <CabinetSection>
            <Cabinet>
                <CabinetHeader  />
                <PatientCabinet />
            </Cabinet>
        </CabinetSection>
    )
};
