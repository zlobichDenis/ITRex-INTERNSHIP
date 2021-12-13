import { useEffect } from 'react';
import { ActionCreator } from 'redux';

import { useAppSelector, useAppDispatch } from 'store';
import { Specialization, Doctor } from 'types';
import { RequestAvailableTimeData } from '../components';
import {
  getAppointmentFormDataFetchStatus,
  getAvailableHoursForVisit,
  getDate,
  getDoctorsPerSpecialization,
  getSpecializations
} from "../redux";

type UseGetFormDataReturnValues = {
  fetchStatus: string,
  allSpecializations: Array<Specialization> | null,
  doctors: Array<Doctor> | null,
  date: Array<string> | null,
  availableHours: Array<string> | null,
}
type ActionPayloadType = RequestAvailableTimeData | string;

export const useFetchFormData =
  (actionType: ActionCreator<any>,
   actionPayload?: ActionPayloadType,
   dependencie?: string): UseGetFormDataReturnValues => {
    const fetchStatus = useAppSelector(getAppointmentFormDataFetchStatus);
    const allSpecializations = useAppSelector(getSpecializations);
    const doctors = useAppSelector(getDoctorsPerSpecialization);
    const availableHours = useAppSelector(getAvailableHoursForVisit);
    const date = useAppSelector(getDate);

    const dispatch = useAppDispatch();

    useEffect(() => {
      if (actionPayload) {
        dispatch(actionType(actionPayload))
      } else {
        dispatch(actionType())
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dependencie])

    return { allSpecializations, fetchStatus, doctors, date, availableHours };
  };
