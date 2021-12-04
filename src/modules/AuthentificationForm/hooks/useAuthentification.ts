import { useCallback } from "react";

import { useAppSelector, useAppDispatch } from "store";
import { SignInFormValues } from "types";
import { fetchLogin, fetchRegistration } from "../redux";

export type LoginRequestParams = SignInFormValues;
export type RegistrationParams = {
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
};

export const useAuthentification = () => {
  const dispatch = useAppDispatch();
  const { userProfile, fetchStatus } = useAppSelector((state) => state.user);

  const loginRequest = useCallback((userData: LoginRequestParams) => {
    dispatch(fetchLogin(userData))
  }, [dispatch]);

  const registrationRequest = useCallback((userData: RegistrationParams) => {
    dispatch(fetchRegistration(userData))
  }, [dispatch]);

  return { userProfile, fetchStatus, registrationRequest, loginRequest };
};
