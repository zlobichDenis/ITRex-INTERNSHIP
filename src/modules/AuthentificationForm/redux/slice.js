import { createSlice, createAction } from "@reduxjs/toolkit";

import { FetchStatus } from "const";

export const fetchRegistration = createAction('auth/registration');
export const fetchLogin = createAction('auth-login');

const userSlice = createSlice({
  name: "user",
  initialState: {
    fetchStatus: null,
    userProfile: null,
    tokens: {},
  },
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
    setTokens(state, { payload }) {
      return {...state, tokens: payload}
    },
  },
});

export const userReducer = userSlice.reducer;
export const { setCurrentUser, responceFetchUserProfile, fetchUserProfile, rejectFetchUserProfile, setTokens } = userSlice.actions;
