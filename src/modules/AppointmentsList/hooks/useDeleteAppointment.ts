import { useAppDispatch } from "store";
import { deleteAppointment } from "../redux";

export const useDeleteAppointment = (appointmentID: string) => {
  const dispatch = useAppDispatch();

  const dispatchDeleteAppointment = () => {
    dispatch(deleteAppointment(appointmentID));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  };

  return { dispatchDeleteAppointment };
};