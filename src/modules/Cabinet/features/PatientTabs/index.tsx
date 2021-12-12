import { NavLink, useLocation, useRouteMatch } from "react-router-dom";

import { CabinetTab } from "components";
import { AppPaths, PatientPaths } from "const";
import { Tabs } from "./styles";
import { PatientTabsSchema } from "../../schemes";

export function PatientTabs() {
  const { pathname } = useLocation();
  const { url } = useRouteMatch();

  return (
    <Tabs>
      <NavLink to={`${url}${PatientPaths.APPOINTMENTS}`}>
        <CabinetTab
          isActive={pathname === `${url}${PatientPaths.APPOINTMENTS}`}
          text={PatientTabsSchema.APPOINTMENTS}
        />
      </NavLink>
      <NavLink to={`${url}${PatientPaths.RESOLUTION_LIST}`}>
        <CabinetTab
          isActive={pathname === `${url}${PatientPaths.RESOLUTION_LIST}`}
          text={PatientTabsSchema.RESOLUTIONS}
        />
      </NavLink>
    </Tabs>
  );
}
