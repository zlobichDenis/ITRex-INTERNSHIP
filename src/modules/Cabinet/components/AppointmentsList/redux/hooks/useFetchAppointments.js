import { UserRoles } from "const";
import { useEffect } from "react";
import { useSelector, useDispatch  } from "react-redux";

import { fetchDoctorAppointments, fetchPatientAppointments } from "..";

export const useFetchAppointments = () => {
  const { fetchStatus, appointments } = useSelector(state => state.appointments);
  const { role_name: roleName } = useSelector(state => state.user.userProfile);
  const dispatch = useDispatch();

  useEffect(() => {
    if (roleName === UserRoles.PATIENT) {
      dispatch(fetchPatientAppointments({ limit: 20, offset: 0 }));
    } else {
      dispatch(fetchDoctorAppointments({ limit: 20, offset: 0 }));
    }
  }, [dispatch])
  
  return { fetchStatus, appointments, roleName };
}