import { useAppSelector, useAppDispatch } from 'store';
import { SignInFormValues } from 'types';
import { fetchLogin, fetchRegistration, getUserProfile, getUserProfileFetchStatus } from '../redux';

export type LoginRequestParams = SignInFormValues;
export type RegistrationParams = {
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
};

export const useAuthentification = () => {
  const dispatch = useAppDispatch();
  const userProfile = useAppSelector(getUserProfile);
  const fetchStatus = useAppSelector(getUserProfileFetchStatus);

  const loginRequest = (userData: LoginRequestParams) => {
    dispatch(fetchLogin(userData))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  };

  const registrationRequest = (userData: RegistrationParams) => {
    dispatch(fetchRegistration(userData))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  };

  return { userProfile, fetchStatus, registrationRequest, loginRequest };
};
