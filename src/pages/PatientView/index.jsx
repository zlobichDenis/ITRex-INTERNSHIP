import React from "react";

import { CabinetHeader } from "components";
import { UserCabinet } from "modules";
import { CabinetSection, Cabinet } from "../styles";

export const PatientView = () => {
  return (
    <CabinetSection>
      <Cabinet>
        <CabinetHeader />
        <UserCabinet />
      </Cabinet>
    </CabinetSection>
  );
};
