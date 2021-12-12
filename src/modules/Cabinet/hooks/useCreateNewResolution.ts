import { useCallback } from "react";

import { useAppDispatch } from "store";
import { deleteAppointment, createResolution } from "../redux";


export const useCreateNewResolution = (appointmentID: string) => {
  const dispatch = useAppDispatch();

  const dispatchNewResolution = useCallback((resolution: string) => {
    dispatch(createResolution({ resolution, appointmentID }))
  }, [dispatch]);

  return { dispatchNewResolution };
};