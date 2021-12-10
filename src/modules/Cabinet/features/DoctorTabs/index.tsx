import { useRedirect } from 'hooks';
import { useAppSelector } from 'store';
import { getUserRoleName } from 'modules/AuthentificationForm/redux';
import { AppPaths, DoctorPaths, PatientPaths, UserRoles } from 'const';
import { Tabs } from './styles';
import { CabinetTab } from 'components';

export const DoctorTabs = () => {
  const { routeToPath } = useRedirect();
  const roleName = useAppSelector(getUserRoleName);
  const routeToResolutionsList = () => routeToPath(`${AppPaths.DOCTOR_VIEW}${DoctorPaths.RESOLUTION_LIST}`);

  return (
    <Tabs>
      <CabinetTab text="Patients"/>
      <CabinetTab handleClick={routeToResolutionsList} text="Resolutions"/>
    </Tabs>
  );
};