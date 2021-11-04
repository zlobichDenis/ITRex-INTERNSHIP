import { initialState } from "../initial-state";

export const doctorsReducer = (state = initialState.doctors, action) => {
    const { type, payload } = action;
    switch (type) {
        default:
            return state;
    }
};