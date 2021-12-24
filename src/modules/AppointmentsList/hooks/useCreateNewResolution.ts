import { useAppDispatch } from "store";
import { createResolution } from "../redux";


export const useCreateNewResolution = (appointmentID: string) => {
  const dispatch = useAppDispatch();

  const dispatchNewResolution = (resolution: string) => {
    dispatch(createResolution({ resolution, appointmentID }))
  };

  return { dispatchNewResolution };
};