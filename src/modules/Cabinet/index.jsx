import React from "react";
import PropTypes from "prop-types";

import { PatientCabinetRouter } from "routes";
import { DoctorInfo } from "./components";
import { CabinetContentWrapper } from "./styles";


export const UserCabinet = ({ itsPatientUser }) => {
    return (
        <CabinetContentWrapper>
            { itsPatientUser 
                ? <PatientCabinetRouter />
                : <DoctorInfo />}
        </CabinetContentWrapper>
    )
};

UserCabinet.propTypes = {
    itsPatientUser: PropTypes.bool.isRequired,
}