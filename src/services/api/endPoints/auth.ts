import { UserProfile, SignUp, SignIn } from 'types';
import { api } from '../instance';

const EndPoints = {
  registration: () => `auth/registration`,
  login: () => `auth/login`,
  fetchUserData: () => `auth/profile`,

} as const;

export const registration = (userData: SignUp) =>
  api
    .post<string>(EndPoints.registration(), userData)
    .then((response) => ({ response }))
    .catch((error) => ({ error }));

export const login = (userData: SignIn) =>
  api
    .post<string>(EndPoints.login(), userData)
    .then((response) => ({ response }))
    .catch((error) => ({ error }));

export const fetchUserData = () =>
  api
    .get<UserProfile>(EndPoints.fetchUserData())
    .then((response) => ({ response }))
    .catch((error) => ({ error }));

