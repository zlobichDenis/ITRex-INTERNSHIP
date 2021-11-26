import { Authentification, DoctorView, PatientView } from "pages";
import { UserRoles } from "const";
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
    forRole: null,
  },
  {
    path: AppScreens.DOCTOR_VIEW,
    component: DoctorView,
    isPrivate: true,
    forRole: UserRoles.DOCTOR,
  },
  {
    path: AppScreens.PATIENT_VIEW,
    component: PatientView,
    isPrivate: true,
    forRole: UserRoles.PATIENT,
  },
];

export const authRoutes = [
  {
    path: `${AppScreens.AUTH}${AuthStages.SIGN_UP}`,
    component: SignUp,
    isPrivate: false,
    forRole: null,
  },
  {
    path: `${AppScreens.AUTH}${AuthStages.SIGN_IN}`,
    component: SignIn,
    isPrivate: false,
    forRole: null,
  },
  {
    path: `${AppScreens.AUTH}${AuthStages.RESTORE}`,
    component: RestorePass,
    isPrivate: false,
    forRole: null,
  },
  {
    path: `${AppScreens.AUTH}${AuthStages.RESTORE_CONFIRM}`,
    component: RestorePass,
    isPrivate: true,
    forRole: null,
  },
];

export const patientCabinetRoutes = [
  {
    path: `${AppScreens.PATIENT_VIEW}${PatientScreens.CABINET}`,
    component: PatientInfo,
    isPrivate: true,
    exact: false,
    forRole: UserRoles.PATIENT
  },
  {
    path: `${AppScreens.PATIENT_VIEW}${PatientScreens.CREATE_APPOINTMENT}`,
    component: AppointmentFormContainer,
    isPrivate: true,
    exact: false,
    forRole: UserRoles.PATIENT,
  },
];
