import { Authentification, DoctorView, PatientView } from "pages";
import {
  PatientInfo,
  AppointmentFormContainer,
} from "modules/Cabinet/components";
import {
  SignUp,
  SignIn,
  RestorePass,
} from "modules/AuthentificationForm/components";

export const AuthStages = {
  SIGN_UP: "/sign-up",
  SIGN_IN: "/sign-in",
  RESTORE: "/restore",
  RESTORE_CONFIRM: "/restore-confirm",
};

export const AppScreens = {
  AUTH: "/authentification",
  DOCTOR_VIEW: "/doctor-view",
  PATIENT_VIEW: "/patient-view",
};

export const PatientScreens = {
  CREATE_APPOINTMENT: "/create-appointment",
  CABINET: "/patient-cabinet",
};

export const appRoutes = [
  {
    path: AppScreens.AUTH,
    component: Authentification,
    isPrivate: false,
  },
  {
    path: AppScreens.DOCTOR_VIEW,
    component: DoctorView,
    isPrivate: true,
  },
  {
    path: AppScreens.PATIENT_VIEW,
    component: PatientView,
    isPrivate: true,
  },
];

export const authRoutes = [
  {
    path: AuthStages.SIGN_UP,
    component: SignUp,
    isPrivate: false,
  },
  {
    path: AuthStages.SIGN_IN,
    component: SignIn,
    isPrivate: false,
  },
  {
    path: AuthStages.RESTORE,
    component: RestorePass,
    isPrivate: false,
  },
  {
    path: AuthStages.RESTORE_CONFIRM,
    component: RestorePass,
    isPrivate: true,
  },
];

export const patientCabinetRoutes = [
  {
    path: PatientScreens.CABINET,
    component: PatientInfo,
    isPrivate: true,
    exact: false,
  },
  {
    path: PatientScreens.CREATE_APPOINTMENT,
    component: AppointmentFormContainer,
    isPrivate: true,
    exact: true,
  },
];
