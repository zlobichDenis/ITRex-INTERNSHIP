import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice( {
    name: "user",
    initialState: {
        user: null,
    },
    reducers: {
        setCurrentUser(state, { payload }) {
            return payload
        }
    }
});

export default userSlice.reducer;
export const { setCurrentUser } = userSlice.actions