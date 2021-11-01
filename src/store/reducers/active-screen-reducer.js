import { initialState } from "../initial-state"
import { ActiveScreenActions } from "../actions/active-screen-actions";

export const activeScreenReducer = (state = initialState.activeScreen, action) => {
    const { type, payload } = action;
    switch (type) {
        case ActiveScreenActions.CHANGE_ACTIVE_SCREEN:
            return payload;
        default:
            return state;
    };
};