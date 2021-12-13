import { useCallback } from "react";

import { useAppDispatch } from "store";
import { createResolution } from "../redux";


export const useCreateNewResolution = (appointmentID: string) => {
  const dispatch = useAppDispatch();

  const dispatchNewResolution = useCallback((resolution: string) => {
    dispatch(createResolution({ resolution, appointmentID }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return { dispatchNewResolution };
};