import { useRouteMatch } from "react-router-dom";

import { useAppSelector } from "store";
import { CabinetHeader } from "components";
import { DoctorPaths } from "const";
import { UserCabinet } from "modules";
import { useRedirect } from "hooks";
import { CabinetSection, Cabinet } from "../styles";
import { getUserProfile } from "modules/AuthentificationForm/redux";

export function DoctorView () {
  const { url } = useRouteMatch();
  const { routeToPath }  = useRedirect();
  const userProfile = useAppSelector(getUserProfile);

  const routeToMainPage = () => {
    routeToPath(`${url}${DoctorPaths.APPOINTMENTS}`);
  }

  return (
    <CabinetSection>
      <Cabinet>
        <CabinetHeader userProfile={userProfile} handleClick={routeToMainPage}/>
        <UserCabinet />
      </Cabinet>
    </CabinetSection>
  );
}
