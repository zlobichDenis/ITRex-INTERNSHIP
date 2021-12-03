import { useCallback } from "react";

import { useAppSelector, useAppDispatch } from "store";
import { SignUpFormValues, SignInFormValues } from "types";
import { fetchLogin, fetchRegistration } from "..";

export const useAuthentification = () => {
  const dispatch = useAppDispatch();
  const { userProfile, fetchStatus } = useAppSelector((state) => state.user);

  const loginRequest = useCallback((userData: SignInFormValues) => {
    dispatch(fetchLogin(userData))
  }, [dispatch]);

  const registrationRequest = useCallback((userData: SignUpFormValues) => {
    dispatch(fetchRegistration(userData))
  }, [dispatch]);

  return { userProfile, fetchStatus, registrationRequest, loginRequest };
};
