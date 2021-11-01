import { ActiveScreenActions } from "../actions/active-screen-actions";

export const activeScreenActionCreator = (activeScreen) => {
    return {
        type: ActiveScreenActions.CHANGE_ACTIVE_SCREEN,
        payload: activeScreen,
    };
};