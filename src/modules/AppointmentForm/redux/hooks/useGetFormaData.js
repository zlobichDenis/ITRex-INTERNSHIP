import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useGetFormData = (actionType, actionPayload) => {
  const {
    specializations: allSpecializations,
    fetchStatus,
    doctors,
    date,
    availableTimes: availableHours,
  } = useSelector((state) => state.createdAppointment);
  const dispatch = useDispatch();

  useEffect(() => {
    if(actionPayload) {
      dispatch(actionType(actionPayload))
    } else {
      dispatch(actionType())
    }
  }, [actionPayload])

  return { allSpecializations, fetchStatus, doctors, date, availableHours };
};
