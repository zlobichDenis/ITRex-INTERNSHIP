import { NavLink, useLocation, useRouteMatch } from "react-router-dom";

import { DoctorPaths} from "const";
import { Tabs } from './styles';
import { CabinetTab } from 'components';
import { DoctorTabsSchema } from "../../schemes";

export const DoctorTabs = () => {
  const { pathname } = useLocation();
  const { path } = useRouteMatch();

  return (
    <Tabs>
      <NavLink to={`${path}${DoctorPaths.APPOINTMENTS}`}>
        <CabinetTab
          isActive={pathname === `${path}${DoctorPaths.APPOINTMENTS}`}
          text={DoctorTabsSchema.PATIENTS}/>
      </NavLink>
      <NavLink to={`${path}${DoctorPaths.RESOLUTION_LIST}`}>
        <CabinetTab
          isActive={pathname === `${path}${DoctorPaths.RESOLUTION_LIST}`}
          text={DoctorTabsSchema.RESOLUTIONS}/>
      </NavLink>
    </Tabs>
  );
};