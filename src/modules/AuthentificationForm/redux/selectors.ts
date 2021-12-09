import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "store";
import { UserState } from "./slice";

const userState = (state: RootState): UserState  => state.user;

export const getUserProfile = createSelector(userState, state => state.userProfile);
export const getUserRoleName = createSelector(userState, state => state.userProfile.role_name);
export const getUserProfileFetchStatus = createSelector(userState, state => state.fetchStatus);