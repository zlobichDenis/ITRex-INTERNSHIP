import React from "react";

import { Authentification, DoctorView, PatientView } from "pages";
import { UserRoles, AppScreens, AuthStages, PatientScreens } from "const";
import {
  PatientInfo,
} from "modules/Cabinet/components";
import { AppointmentFormContainer } from "modules/AppointmentForm";
import {
  SignUp,
  SignIn,
  RestorePass,
} from "modules/AuthentificationForm/components";


export type RouteType = {
  path: string,
  component: React.FC,
  isPrivate: boolean,
  forRole: string | null,
  exact?: boolean,
}

export const appRoutes: Array<RouteType> = [
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

export const authRoutes: Array<RouteType> = [
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

export const patientCabinetRoutes: Array<RouteType> = [
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
