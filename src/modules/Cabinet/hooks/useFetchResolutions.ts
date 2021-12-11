import { useCallback, useEffect } from 'react';

import { useAppSelector, useAppDispatch } from 'store';
import { UserRoles } from 'const';
import {
  fetchDoctorResolutions,
  fetchPatientResolutions,
  getResolutionsFetchStatus,
  getUserResolutions
} from "../redux";
import { resolutionsPagination } from "../const";
import { getUserRoleName } from "modules/AuthentificationForm/redux";

export const useFetchResolutions = () => {
  const roleName = useAppSelector(getUserRoleName);
  const fetchStatus = useAppSelector(getResolutionsFetchStatus);
  const resolutions = useAppSelector(getUserResolutions);
  const dispatch = useAppDispatch();

  const fetchResolutionsWithOffset = useCallback((offset: number) => {
    const paginationWithOffset = { ... resolutionsPagination, offset}
    if (roleName === UserRoles.PATIENT) {
      dispatch(fetchPatientResolutions(paginationWithOffset));
    } else {
      dispatch(fetchDoctorResolutions(paginationWithOffset));
    }
  }, [dispatch]);

  useEffect(() => {
    if (roleName === UserRoles.PATIENT) {
      dispatch(fetchPatientResolutions(resolutionsPagination));
    } else {
      dispatch(fetchDoctorResolutions(resolutionsPagination));
    }
  }, []);

  return { fetchStatus, resolutions, roleName, fetchResolutionsWithOffset }
};