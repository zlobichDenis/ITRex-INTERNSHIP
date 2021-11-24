import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

import { AppScreens, PatientScreens } from "routes";
import { postNewAppointment } from "..";

export const useCreateAppointment = () => {
  const dispatch = useDispatch();
  let history = useHistory();

  const createAppointment = useCallback((formValues) => {
    const { occupation, date: visitDate, doctorName: doctorID, time: date, ...rest } = formValues;
    const appointmentData = { ...rest, doctorID, date }
    dispatch(postNewAppointment(appointmentData));
    history.push(`${AppScreens.PATIENT_VIEW}${PatientScreens.CABINET}`)
  }, [dispatch]);

  return { createAppointment }
};
