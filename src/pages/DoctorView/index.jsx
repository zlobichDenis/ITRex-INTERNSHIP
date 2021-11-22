import React from "react";

import { CabinetHeader } from "components";
import { UserCabinet } from "modules";
import { CabinetSection, Cabinet } from "../styles";

export const DoctorView = () => {
  return (
    <CabinetSection>
      <Cabinet>
        <CabinetHeader />
        <UserCabinet itsPatientUser={false} />
      </Cabinet>
    </CabinetSection>
  );
};
