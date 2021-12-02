import { useCallback, useEffect } from "react";
import { push } from "connected-react-router";

import { useAppSelector, useAppDispatch } from "store";
import { AppScreens, PatientScreens } from "routes";
import { FetchStatus } from "const";
import { postNewAppointment } from "../slice";

export const useCreateAppointment = () => {
  const dispatch =  useAppDispatch();
  const { fetchStatus } = useAppSelector(state => state.createdAppointment);

  const createAppointment = useCallback((formValues) => {
    const { occupation, date: visitDate, doctorName: doctorID, time: date, ...rest } = formValues;
    const appointmentData = { ...rest, doctorID, date }
    
    dispatch(postNewAppointment(appointmentData));
  }, [dispatch]);

  useEffect(() => {
    if (fetchStatus === FetchStatus.SUCCESS) {
      dispatch(push(`${AppScreens.PATIENT_VIEW}${PatientScreens.CABINET}`))
    }
  }, [dispatch, fetchStatus]);

  return { createAppointment, fetchStatus }
};
