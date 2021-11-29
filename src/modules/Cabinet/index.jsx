import React from "react";
import { useSelector } from "react-redux";

import { UserRoles } from "const";
import { PatientCabinetRouter } from "routes";
import { DoctorInfo } from "./components";
import { CabinetContentWrapper } from "./styles";


export const UserCabinet = () => {
    const { role_name: roleName } = useSelector(state => state.user.userProfile);

    return (
        <CabinetContentWrapper>
            {roleName === UserRoles.PATIENT
                ? <PatientCabinetRouter />
                : <DoctorInfo />}
        </CabinetContentWrapper>
    )
};

