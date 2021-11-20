import React from "react";

import { CabinetTab } from "components";
import { Tabs } from "modules/styles";

export const DoctorViewTabs = () => {
    return (
        <Tabs>
            <CabinetTab text="Patients"/>
            <CabinetTab text="Resolutions" />
        </Tabs>
    );
};