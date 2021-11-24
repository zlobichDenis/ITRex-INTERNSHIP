import { createSlice } from "@reduxjs/toolkit";

import { FetchStatus } from "const";

const userSlice = createSlice({
  name: "user",
  initialState: {
    fetchStatus: null,
    userProfile: null,
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
    }
  },
});

export const userReducer = userSlice.reducer;
export const { setCurrentUser, responceFetchUserProfile, fetchUserProfile, rejectFetchUserProfile } = userSlice.actions;
