import { combineReducers } from "redux";
import { authStageReducer } from "./reducers/auth-stage-reducer";


export const rootReducer = combineReducers({
    authStage: authStageReducer,
})