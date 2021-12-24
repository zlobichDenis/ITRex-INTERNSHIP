import { useLocation } from "react-router-dom";

import { PatientCabinetRouter } from "routes";
import { PatientPaths } from "const";
import { PatientTabs } from "..";
import { CabinetInfo } from "../../styles";


export function PatientInfo () {
  const { pathname } = useLocation()

  return (
    <>
      <PatientTabs isDisplay={pathname.includes(PatientPaths.CREATE_APPOINTMENT)}/>
      <CabinetInfo role="patient-tabs">
        <PatientCabinetRouter />
      </CabinetInfo>
    </>
  );
}
