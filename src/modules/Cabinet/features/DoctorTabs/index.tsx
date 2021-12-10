import { useRedirect } from 'hooks';
import { useAppSelector } from 'store';
import { getUserRoleName } from 'modules/AuthentificationForm/redux';
import { AppPaths, DoctorPaths, PatientPaths, UserRoles } from 'const';
import { Tabs } from './styles';
import { CabinetTab } from 'components';

export const DoctorTabs = () => {
  const { routeToPath } = useRedirect();
  const roleName = useAppSelector(getUserRoleName);

  const routeToResolutionsList = () => {
    routeToPath(`${AppPaths.DOCTOR_VIEW}${DoctorPaths.RESOLUTION_LIST}`);
  };
  const routeToAppointmentsList = () => {
    routeToPath(`${AppPaths.DOCTOR_VIEW}${DoctorPaths.CABINET}`);
  };

  return (
    <Tabs>
      <CabinetTab handleClick={routeToAppointmentsList} text="Patients"/>
      <CabinetTab handleClick={routeToResolutionsList} text="Resolutions"/>
    </Tabs>
  );
};