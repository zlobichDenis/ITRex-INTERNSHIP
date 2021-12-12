import { NavLink, useLocation, useRouteMatch } from "react-router-dom";

import { DoctorPaths} from "const";
import { Tabs } from './styles';
import { CabinetTab } from 'components';
import { DoctorTabsSchema } from "../../schemes";

export const DoctorTabs = () => {
  const { pathname } = useLocation();
  const { url } = useRouteMatch();

  return (
    <Tabs>
      <NavLink to={`${url}${DoctorPaths.APPOINTMENTS}`}>
        <CabinetTab
          isActive={pathname === `${url}${DoctorPaths.APPOINTMENTS}`}
          text={DoctorTabsSchema.PATIENTS}/>
      </NavLink>
      <NavLink to={`${url}${DoctorPaths.RESOLUTION_LIST}`}>
        <CabinetTab
          isActive={pathname === `${url}${DoctorPaths.RESOLUTION_LIST}`}
          text={DoctorTabsSchema.RESOLUTIONS}/>
      </NavLink>
    </Tabs>
  );
};