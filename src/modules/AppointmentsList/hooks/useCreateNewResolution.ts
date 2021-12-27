import { useAppDispatch } from "store";
import { postNewResolution } from "../redux";


export const useCreateNewResolution = (appointmentID: string) => {
  const dispatch = useAppDispatch();

  const dispatchNewResolution = (resolution: string) => {
    dispatch(postNewResolution({ resolution, appointmentID }))
  };

  return { dispatchNewResolution };
};