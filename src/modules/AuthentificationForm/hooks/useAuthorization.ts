import { useAppSelector, useAppDispatch } from 'store';
import { SignIn, SignUp } from 'types';
import { fetchLogin, fetchRegistration, getUserProfile, getUserProfileFetchStatus } from '../redux';

export const useAuthorization = () => {
  const dispatch = useAppDispatch();
  const userProfile = useAppSelector(getUserProfile);
  const fetchStatus = useAppSelector(getUserProfileFetchStatus);

  const loginRequest = (userData: SignIn) => {
    dispatch(fetchLogin(userData))
  };

  const registrationRequest = (userData: SignUp) => {
    dispatch(fetchRegistration(userData))
  };

  return { userProfile, fetchStatus, registrationRequest, loginRequest };
};
