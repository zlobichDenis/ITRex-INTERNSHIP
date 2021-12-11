import { NavLink, useLocation } from "react-router-dom";

import { CabinetTab } from "components";
import { AppPaths, PatientPaths } from "const";
import { Tabs } from "./styles";
import { PatientTabsSchema } from "../../schemes";

export function PatientTabs() {
  const { pathname } = useLocation();

  return (
    <Tabs>
      <NavLink to={`${AppPaths.PATIENT_VIEW}${PatientPaths.APPOINTMENTS}`}>
        <CabinetTab
          isActive={pathname === `${AppPaths.PATIENT_VIEW}${PatientPaths.APPOINTMENTS}`}
          text={PatientTabsSchema.APPOINTMENTS}
        />
      </NavLink>
      <NavLink to={`${AppPaths.PATIENT_VIEW}${PatientPaths.RESOLUTION_LIST}`}>
        <CabinetTab
          isActive={pathname === `${AppPaths.PATIENT_VIEW}${PatientPaths.RESOLUTION_LIST}`}
          text={PatientTabsSchema.RESOLUTIONS}
        />
      </NavLink>
    </Tabs>
  );
}
