import { useEffect } from "react";
import { ActionCreator } from "redux";

import { useAppSelector, useAppDispatch } from "store";

export const useGetFormData = (actionType: ActionCreator<any>, actionPayload?: any, dependencie?: string) => {
  const {
    specializations: allSpecializations,
    fetchStatus,
    doctors,
    date,
    availableTimes: availableHours,
  } = useAppSelector((state) => state.createdAppointment);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if(actionPayload) {
      console.log(actionPayload)
      dispatch(actionType(actionPayload))
    } else {
      dispatch(actionType())
    }
  }, [dependencie])

  return { allSpecializations, fetchStatus, doctors, date, availableHours };
};
