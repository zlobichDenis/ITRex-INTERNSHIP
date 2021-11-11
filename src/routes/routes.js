import { Authentification, DoctorView, PatientView } from "pages";
import { SignUp, SignIn, RestorePass } from "modules";

export const AuthStages = {
    SIGN_UP: '/sign-up',
    SIGN_IN: '/sign-in',
    RESTORE: '/restore',
    RESTORE_CONFIRM: '/restore-confirm',
};

export const AppScreens = {
    AUTH: '/authentification',
    DOCTOR_VIEW: '/doctor-view',
    PATIENT_VIEW: '/patient-view',
};

export const appRoutes = [
    {
        path: AppScreens.AUTH,
        component: Authentification,
    },
    {
        path: AppScreens.DOCTOR_VIEW,
        component: DoctorView,
    },
    {
        path: AppScreens.PATIENT_VIEW,
        component: PatientView,
    }
];

export const authRoutes = [
    {
        path: AuthStages.SIGN_UP,
        component: SignUp,
    },
    {
        path: AuthStages.SIGN_IN,
        component: SignIn,
    },
    {
        path: AuthStages.RESTORE,
        component: RestorePass, 
    },
    {
        path: AuthStages.RESTORE_CONFIRM,
        component: RestorePass,
    },
];
