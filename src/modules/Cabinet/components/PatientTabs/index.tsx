import { Link, useLocation, useRouteMatch } from "react-router-dom";

import { CabinetTab } from "components";
import { PatientPaths } from "const";
import { Tabs } from "./styles";
import { PatientTabsSchema } from "../../schemes";

type PatientTabsProps = {
  isDisplay: boolean,
}

export function PatientTabs({ isDisplay }: PatientTabsProps) {
  const { pathname } = useLocation();
  const { url } = useRouteMatch();

  return (
    <Tabs isDisplay={!isDisplay}>
      <Link to={`${url}${PatientPaths.APPOINTMENTS}`}>
        <CabinetTab
          isActive={pathname === `${url}${PatientPaths.APPOINTMENTS}`}
          text={PatientTabsSchema.APPOINTMENTS}
        />
      </Link>
      <Link to={`${url}${PatientPaths.RESOLUTION_LIST}`}>
        <CabinetTab
          isActive={pathname === `${url}${PatientPaths.RESOLUTION_LIST}`}
          text={PatientTabsSchema.RESOLUTIONS}
        />
      </Link>
    </Tabs>
  );
}
