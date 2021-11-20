import { createSlice, createAction } from "@reduxjs/toolkit";

export const fetchUserProfile = createAction("auth/profile");

const userSlice = createSlice( {
    name: "user",
    initialState: null,
    reducers: {
        setCurrentUser(_, { payload }) {
            return { isAuthentificated: true, ...payload }
        }
    }
});

export const userReducer = userSlice.reducer;
export const { setCurrentUser } = userSlice.actions