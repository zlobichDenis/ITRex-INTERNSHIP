import React from "react";

import { CabinetTab } from "components";
import { Tabs } from "modules/styles";

export const PatientViewTabs = () => {
    return (
        <Tabs>
            <CabinetTab text="Profile" />
            <CabinetTab text="Appointments" />
        </Tabs>       
    )
};