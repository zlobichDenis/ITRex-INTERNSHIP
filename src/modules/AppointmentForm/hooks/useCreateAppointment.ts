import { useEffect } from 'react';
import { useRouteMatch } from "react-router-dom";
import { push } from 'connected-react-router';

import { useAppSelector, useAppDispatch } from 'store';
import { postNewAppointment, setDefaultFetchStatus, getAppointmentFormDataFetchStatus } from '../redux';
import { AppPaths, PatientPaths, FetchStatus } from 'enums';


type UseCreateAppointmentReturnValues = {
  createAppointment(formValues: CreateNewAppointmentParams): void,
  fetchStatus: string,
}

type CreateNewAppointmentParams = {
  occupation: string,
  date: string,
  doctorName: string,
  time: string,
  note: string,
  reason: string,
}

export const useCreateAppointment = (): UseCreateAppointmentReturnValues => {
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
