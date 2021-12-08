import { useEffect } from "react";
import { ActionCreator } from "redux";

import { useAppSelector, useAppDispatch } from "store";
import { RequestAvailableTimeData } from '../components';

type ActionPayloadType = RequestAvailableTimeData | string;

export const useGetFormData = (actionType: ActionCreator<any>, actionPayload?: ActionPayloadType, dependencie?: string) => {
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
