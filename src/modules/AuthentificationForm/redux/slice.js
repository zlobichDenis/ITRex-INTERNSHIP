import { createSlice, createAction } from "@reduxjs/toolkit";

import { login, getUserProfile } from "services";

export const fetchUserProfile = createAction("auth/profile");

const userSlice = createSlice( {
    name: "user",
    initialState: null,
    reducers: {
        setCurrentUser(_, { payload }) {
            return payload
        }
    }
});

export const userReducer = userSlice.reducer;
export const { setCurrentUser } = userSlice.actions