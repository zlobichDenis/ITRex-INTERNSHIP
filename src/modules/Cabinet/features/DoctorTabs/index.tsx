import { NavLink, useLocation } from "react-router-dom";

import {AppPaths, DoctorPaths} from "const";
import { Tabs } from './styles';
import { CabinetTab } from 'components';
import { DoctorTabsSchema } from "../../schemes";

export const DoctorTabs = () => {
  const { pathname } = useLocation();

  return (
    <Tabs>
      <NavLink to={`${AppPaths.DOCTOR_VIEW}${DoctorPaths.APPOINTMENTS}`}>
        <CabinetTab
          isActive={pathname === `${AppPaths.DOCTOR_VIEW}${DoctorPaths.APPOINTMENTS}`}
          text={DoctorTabsSchema.PATIENTS}/>
      </NavLink>
      <NavLink to={`${AppPaths.DOCTOR_VIEW}${DoctorPaths.RESOLUTION_LIST}`}>
        <CabinetTab
          isActive={pathname === `${AppPaths.DOCTOR_VIEW}${DoctorPaths.RESOLUTION_LIST}`}
          text={DoctorTabsSchema.RESOLUTIONS}/>
      </NavLink>
    </Tabs>
  );
};