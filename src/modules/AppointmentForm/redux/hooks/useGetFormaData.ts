import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "store";

export const useGetFormData = (actionType: any, actionPayload?: any) => {
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
      dispatch(actionType(actionPayload))
    } else {
      dispatch(actionType())
    }
  }, [actionPayload, actionType, dispatch])

  return { allSpecializations, fetchStatus, doctors, date, availableHours };
};
