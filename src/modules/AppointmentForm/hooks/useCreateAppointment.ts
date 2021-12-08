import { useCallback, useEffect } from 'react';
import { push } from 'connected-react-router';

import { useAppSelector, useAppDispatch } from 'store';
import { postNewAppointment, setDefaultFetchStatus } from '../redux';
import { AppScreens, PatientScreens, FetchStatus } from 'const';


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
  const { fetchStatus } = useAppSelector(state => state.createdAppointment);

  const createAppointment = useCallback((formValues: CreateNewAppointmentParams) => {
    const { occupation, date: visitDate, doctorName: doctorID, time: date, ...rest } = formValues;
    const appointmentData = { ...rest, doctorID, date }
    
    dispatch(postNewAppointment(appointmentData));
  }, [dispatch]);

  useEffect(() => {
    if (fetchStatus === FetchStatus.SUCCESS) {
      dispatch(push(`${AppScreens.PATIENT_VIEW}${PatientScreens.CABINET}`))
      dispatch(setDefaultFetchStatus());
    }
  }, [fetchStatus]);

  return { createAppointment, fetchStatus }
};
