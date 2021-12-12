import { useCallback } from "react";

import { useAppDispatch } from "store";
import { deleteAppointment } from "../redux";

export const useDeleteAppointment = (appointmentID: string) => {
  const dispatch = useAppDispatch();

  const dispatchDeleteAppointment = useCallback(() => {
    dispatch(deleteAppointment(appointmentID));
  }, [dispatch]);

  return { dispatchDeleteAppointment };
};