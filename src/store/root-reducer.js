import { combineReducers } from "redux";
import { initialState } from "./initial-state";
import { activeScreenReducer } from "./reducers/active-screen-reducer";
import { authStageReducer } from "./reducers/auth-stage-reducer";
import { patientsReducer } from "./reducers/patients-reducer";


export const rootReducer = combineReducers({
    activeScreen: activeScreenReducer,
    authStage: authStageReducer,
    patients: patientsReducer,
})