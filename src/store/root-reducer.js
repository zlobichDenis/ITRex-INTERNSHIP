import { combineReducers } from "redux";
import { activeScreenReducer } from "./reducers/active-screen-reducer";
import { authStageReducer } from "./reducers/auth-stage-reducer";
import { patientsReducer } from "./reducers/patients-reducer";
import { doctorsReducer } from "./reducers/doctors-reducer";



export const rootReducer = combineReducers({
    activeScreen: activeScreenReducer,
    authStage: authStageReducer,
    patients: patientsReducer,
    doctors: doctorsReducer,
})