import { UserProfile } from 'types';
import { LoginRequestParams, RegistrationParams } from 'modules/AuthentificationForm/hooks';
import { api } from '../instance';

const EndPoints = {
  registration: () => `auth/registration`,
  login: () => `auth/login`,
  fetchUserData: () => `auth/profile`,
} as const;

export const registration = (userData: RegistrationParams) =>
  api
    .post<string>(EndPoints.registration(), userData)
    .then((responce) => ({ responce }))
    .catch((error) => ({ error }));

export const login = (userData: LoginRequestParams) =>
  api
    .post<string>(EndPoints.login(), userData)
    .then((responce) => ({ responce }))
    .catch((error) => ({ error }));

export const fetchUserData = () =>
  api
    .get<UserProfile>(EndPoints.fetchUserData())
    .then((responce) => ({ responce }))
    .catch((error) => ({ error }));
