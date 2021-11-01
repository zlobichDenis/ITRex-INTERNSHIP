import { AuthStageActions } from "../actions/auth-state-actions";
import { initialState } from "../initial-state";

export const authStageReducer = (state = initialState.authStage, action) => {
    const { type, payload } = action;
    switch (type) {
        case AuthStageActions.CHANGE_AUTH_STATE:
            return payload;
        default:
            return state;
    }
};