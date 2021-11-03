import { AuthStages, AppScreens } from "../common/const";
import { patients } from "../mock/patients";
import { doctors } from "../mock/doctors";

export const initialState = {
    activeScreen: AppScreens.AUTH,
    authStage: AuthStages.SIGN_UP,
    patients: patients,
    doctors: doctors,
};