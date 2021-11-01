import { AuthStageActions } from "../actions/auth-state-actions";

export const authStageActionCreator = (stage) => {
    return {
        type: AuthStageActions.CHANGE_AUTH_STATE,
        payload: stage,
    };
};