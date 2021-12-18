import { useRouteMatch } from "react-router-dom";

import { useAppSelector } from "store";
import { CabinetHeader } from "components";
import { UserCabinet } from "modules";
import { useRedirect } from "hooks";
import { PatientPaths } from "const";
import { getUserProfile } from "modules/AuthentificationForm/redux";
import { CabinetSection, Cabinet } from "../styles";

export function PatientView () {
  const { url } = useRouteMatch();
  const { routeToPath }  = useRedirect();
  const userProfile = useAppSelector(getUserProfile);

  const routeToMainPage = () => {
    routeToPath(`${url}${PatientPaths.APPOINTMENTS}`);
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
