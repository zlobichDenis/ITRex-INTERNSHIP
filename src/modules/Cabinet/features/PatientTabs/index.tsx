import { NavLink, useLocation, useRouteMatch } from "react-router-dom";

import { CabinetTab } from "components";
import { AppPaths, PatientPaths } from "const";
import { Tabs } from "./styles";
import { PatientTabsSchema } from "../../schemes";

export function PatientTabs() {
  const { pathname } = useLocation();
  const { path } = useRouteMatch();

  return (
    <Tabs>
      <NavLink to={`${path}${PatientPaths.APPOINTMENTS}`}>
        <CabinetTab
          isActive={pathname === `${path}${PatientPaths.APPOINTMENTS}`}
          text={PatientTabsSchema.APPOINTMENTS}
        />
      </NavLink>
      <NavLink to={`${path}${PatientPaths.RESOLUTION_LIST}`}>
        <CabinetTab
          isActive={pathname === `${path}${PatientPaths.RESOLUTION_LIST}`}
          text={PatientTabsSchema.RESOLUTIONS}
        />
      </NavLink>
    </Tabs>
  );
}
