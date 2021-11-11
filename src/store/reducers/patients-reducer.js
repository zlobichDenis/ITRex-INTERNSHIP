import { initialState } from "../initial-state";

export const patientsReducer = (state = initialState.patients, action) => {
    const { type, payload } = action;
    switch (type) {
        default:
            return state;
    }
};