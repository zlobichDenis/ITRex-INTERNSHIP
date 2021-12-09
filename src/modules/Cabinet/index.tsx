import { useAppSelector } from "store";
import { UserRoles } from "const";
import { PatientCabinetRouter } from "routes";
import { DoctorInfo } from "./components";
import { CabinetContentWrapper } from "./styles";

import { getUserRoleName } from "../AuthentificationForm/redux";


export const UserCabinet = () => {
  const roleName = useAppSelector(getUserRoleName);

  return (
    <CabinetContentWrapper>
      {roleName === UserRoles.PATIENT
        ? <PatientCabinetRouter/>
        : <DoctorInfo/>}
    </CabinetContentWrapper>
  )
};

