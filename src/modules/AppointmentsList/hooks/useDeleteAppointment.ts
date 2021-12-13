import { useCallback } from "react";

import { useAppDispatch } from "store";
import { deleteAppointment } from "../redux";

export const useDeleteAppointment = (appointmentID: string) => {
  const dispatch = useAppDispatch();

  const dispatchDeleteAppointment = useCallback(() => {
    dispatch(deleteAppointment(appointmentID));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return { dispatchDeleteAppointment };
};