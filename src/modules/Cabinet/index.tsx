import { useAppSelector } from "store";
import { UserRoles } from "enums";
import { PatientInfo, DoctorInfo } from "./components";
import { CabinetContentWrapper } from "./styles";

import { getUserRoleName } from "modules/AuthentificationForm/redux";


export function UserCabinet() {
  const roleName = useAppSelector(getUserRoleName);

  return (
    <CabinetContentWrapper>
      { roleName === UserRoles.PATIENT
        ? <PatientInfo />
        : <DoctorInfo /> }
    </CabinetContentWrapper>
  )
}

