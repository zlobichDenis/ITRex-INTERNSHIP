import { UserProfile } from 'types';
import { LoginRequestParams, RegistrationParams } from 'modules/AuthentificationForm/hooks';
import { api } from "../instance";


export const registration = (userData: RegistrationParams) =>
  api
    .post<string>("auth/registration", userData)
    .then((responce) => ({ responce }))
    .catch((error) => ({ error }));

export const login = (userData: LoginRequestParams) =>
  api
    .post<string>("auth/login", userData)
    .then((responce) => ({ responce }))
    .catch((error) => ({ error }));

export const getUserProfile = () =>
  api
    .get<UserProfile>("auth/profile")
    .then((responce) => ({ responce }))
    .catch((error) => ({ error }));
