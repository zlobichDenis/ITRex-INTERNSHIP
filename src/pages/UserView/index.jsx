import React from "react";

import { CabinetHeader } from "components";
import { Tittle } from "elements";
import { AppointmentForm, UserPath } from "modules";
import { CabinetSection, 
        Cabinet, 
        CabinetContentWrapper, 
        CabinetInfo } from "../styles";

export const UserView = () => {
    return (
        <CabinetSection>
            <Cabinet>
                <CabinetHeader  />
                <CabinetContentWrapper>
                    <CabinetInfo >
                        <UserPath />
                        <Tittle textContent="Make an appointment" />
                        <AppointmentForm  />
                    </CabinetInfo>
                </CabinetContentWrapper>
            </Cabinet>
        </CabinetSection>
    )
};