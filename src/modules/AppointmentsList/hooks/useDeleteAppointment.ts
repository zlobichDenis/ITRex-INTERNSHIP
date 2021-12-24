import { useAppDispatch } from "store";
import { deleteAppointment } from "../redux";

export const useDeleteAppointment = (appointmentID: string) => {
  const dispatch = useAppDispatch();

  const dispatchDeleteAppointment = () => {
    dispatch(deleteAppointment(appointmentID));
  };

  return { dispatchDeleteAppointment };
};