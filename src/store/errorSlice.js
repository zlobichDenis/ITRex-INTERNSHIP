import { createSlice } from "@reduxjs/toolkit";

export const errorSlice = createSlice({
    name: 'error',
    initialState: null,
    reducers: {
        setError: function(_, { payload }) {
            return payload;
        }
    }
});

export const errorReducer = errorSlice.reducer;
export const { setError } = errorSlice.actions;