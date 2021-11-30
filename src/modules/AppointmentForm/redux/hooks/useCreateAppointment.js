import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { push } from "connected-react-router";

import { AppScreens, PatientScreens } from "routes";
import { FetchStatus } from "const";
import { postNewAppointment } from "../slice";

export const useCreateAppointment = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  const { fetchStatus } = useSelector(state => state.createdAppointment);

  const createAppointment = useCallback((formValues) => {
    const { occupation, date: visitDate, doctorName: doctorID, time: date, ...rest } = formValues;
    const appointmentData = { ...rest, doctorID, date }
    
    dispatch(postNewAppointment(appointmentData));
  }, [fetchStatus]);

  useEffect(() => {
    if (fetchStatus === FetchStatus.SUCCESS) {
      dispatch(push(`${AppScreens.PATIENT_VIEW}${PatientScreens.CABINET}`))
    }
  }, [ fetchStatus ]);

  return { createAppointment, fetchStatus }
};
