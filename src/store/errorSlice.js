import { createSlice } from "@reduxjs/toolkit";

export const errorSlice = createSlice({
    name: 'error',
    initialState: null,
    reducers: {
        setError: function(state, { payload }) {
            return payload;
        }
    }
});

export const errorReducer = errorSlice.reducer;
export const { setError } = errorSlice.actions;