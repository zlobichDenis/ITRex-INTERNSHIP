import { createSlice, createAction } from '@reduxjs/toolkit';

import { FetchStatus } from 'enums';
import { UserProfile, SignUp, SignIn } from 'types';

export type UserState = {
  fetchStatus: FetchStatus,
  userProfile: UserProfile,
}

export const fetchRegistration = createAction<SignUp>('auth/registration');
export const fetchLogin = createAction<SignIn>('auth/login');

const initialState = {
  fetchStatus: FetchStatus.DEFAULT,
  userProfile: {},
} as UserState;

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
    responseFetchUserProfile(state) {
      return {...state, fetchStatus: FetchStatus.SUCCESS};
    },
    rejectFetchUserProfile(state) {
      return {...state, fetchStatus: FetchStatus.FAILED};
    },
  },
});

export const userReducer = userSlice.reducer;
export const { setCurrentUser, responseFetchUserProfile, fetchUserProfile, rejectFetchUserProfile } = userSlice.actions;
