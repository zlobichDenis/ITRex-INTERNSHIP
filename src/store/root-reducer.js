import { combineReducers } from "redux";
import { patientsReducer } from "./reducers/patients-reducer";
import { doctorsReducer } from "./reducers/doctors-reducer";



export const rootReducer = combineReducers({
    patients: patientsReducer,
    doctors: doctorsReducer,
})