import { SignUpFormValues, SignInFormValues, UserProfile } from 'types';
import { api } from "../instance";


export const registration = (userData: SignUpFormValues) =>
  api
    .post<string>("auth/registration", userData)
    .then((responce) => ({ responce }))
    .catch((error) => ({ error }));

export const login = (userData: SignInFormValues) =>
  api
    .post<string>("auth/login", userData)
    .then((responce) => ({ responce }))
    .catch((error) => ({ error }));

export const getUserProfile = () =>
  api
    .get<UserProfile>("auth/profile")
    .then((responce) => ({ responce }))
    .catch((error) => ({ error }));
