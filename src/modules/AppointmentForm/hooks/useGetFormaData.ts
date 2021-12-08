import { useEffect } from 'react';
import { ActionCreator } from 'redux';

import { useAppSelector, useAppDispatch } from 'store';
import { Specialization, Doctor } from 'types';
import { RequestAvailableTimeData } from '../components';

type UseGetFormDataReturnValues = {
  fetchStatus: string,
  allSpecializations: Array<Specialization> | null,
  doctors: Array<Doctor> | null,
  date: Array<string> | null,
  availableHours: Array<string> | null,
}
type ActionPayloadType = RequestAvailableTimeData | string;

export const useGetFormData =
  (actionType: ActionCreator<any>,
    actionPayload?: ActionPayloadType,
    dependencie?: string): UseGetFormDataReturnValues => {
    const {
      specializations: allSpecializations,
      fetchStatus,
      doctors,
      date,
      availableTimes: availableHours,
    } = useAppSelector((state) => state.createdAppointment);
    const dispatch = useAppDispatch();

    useEffect(() => {
      if (actionPayload) {
        dispatch(actionType(actionPayload))
      } else {
        dispatch(actionType())
      }
    }, [dependencie])

    return { allSpecializations, fetchStatus, doctors, date, availableHours };
  };
