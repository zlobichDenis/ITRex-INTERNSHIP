import { createSlice, createAction } from '@reduxjs/toolkit';

import { FetchStatus } from 'const';
import { UserProfile } from 'types';

type RegistrationPayload = {
  userName: string,
  password: string,
  firstName: string,
  lastName: string,
}

type LoginPayload = {
  userName: string,
  password: string,
}

type fetchUserProfileState = {
  fetchStatus: string,
  userProfile: UserProfile,
}

export const fetchRegistration = createAction<RegistrationPayload>('auth/registration');
export const fetchLogin = createAction<LoginPayload>('auth/login');

const initialState = {
  fetchStatus: '',
  userProfile: {},
} as fetchUserProfileState;

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser(state, { payload }) {
      return {...state, userProfile: payload};
    },
    fetchUserProfile(state) {
      return {...state, fetchStatus: FetchStatus.PENDING}
    },
    responceFetchUserProfile(state) {
      return {...state, fetchStatus: FetchStatus.SUCCESS};
    },
    rejectFetchUserProfile(state) {
      return {...state, fetchStatus: FetchStatus.FAILED};
    },
  },
});

export const userReducer = userSlice.reducer;
export const { setCurrentUser, responceFetchUserProfile, fetchUserProfile, rejectFetchUserProfile } = userSlice.actions;
