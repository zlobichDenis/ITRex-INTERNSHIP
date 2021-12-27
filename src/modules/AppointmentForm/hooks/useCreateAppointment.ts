import { useEffect } from 'react';
import { useRouteMatch } from "react-router-dom";
import { push } from 'connected-react-router';

import { useAppSelector, useAppDispatch } from 'store';
import { CreateNewAppointmentParams } from "types";
import { postNewAppointment, setDefaultFetchStatus, getAppointmentFormDataFetchStatus } from '../redux';
import { AppPaths, PatientPaths, FetchStatus } from 'enums';


export const useCreateAppointment = () => {
  const dispatch =  useAppDispatch();
  const fetchStatus = useAppSelector(getAppointmentFormDataFetchStatus);
  const match = useRouteMatch(AppPaths.PATIENT_VIEW);

  const createAppointment = (formValues: CreateNewAppointmentParams) => {
    const { occupation, date: visitDate, doctorName: doctorID, time: date, ...rest } = formValues;
    const appointmentData = { ...rest, doctorID, date }

    dispatch(postNewAppointment(appointmentData));
  };

  useEffect(() => {
    if (fetchStatus === FetchStatus.SUCCESS) {
      dispatch(push(`${match?.url}${PatientPaths.APPOINTMENTS}`))
      dispatch(setDefaultFetchStatus());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchStatus]);

  return { createAppointment, fetchStatus }
};
