import React from 'react';

import { Authentification, DoctorView, PatientView } from 'pages';
import { UserRoles, AppPaths, AuthPath, PatientPaths, DoctorPaths } from 'const';
import { UserAppointmentsList } from "modules/Cabinet/features";
import { ResolutionsList } from "modules/Cabinet/features";
import { AppointmentFormContainer } from 'modules/AppointmentForm';
import {
  SignUp,
  SignIn,
  RestorePass,
} from 'modules/AuthentificationForm/containers';


export type RouteType = {
  path: string,
  component: React.FC,
  isPrivate: boolean,
  forRole: string | null,
  exact?: boolean,
}


export const appRoutes: Array<RouteType> = [
  {
    path: AppPaths.AUTH,
    component: Authentification,
    isPrivate: false,
    forRole: null,
  },
  {
    path: AppPaths.DOCTOR_VIEW,
    component: DoctorView,
    isPrivate: true,
    forRole: UserRoles.DOCTOR,
  },
  {
    path: AppPaths.PATIENT_VIEW,
    component: PatientView,
    isPrivate: true,
    forRole: UserRoles.PATIENT,
  },
];

export const authRoutes: Array<RouteType> = [
  {
    path: `${AppPaths.AUTH}${AuthPath.SIGN_UP}`,
    component: SignUp,
    isPrivate: false,
    forRole: null,
  },
  {
    path: `${AppPaths.AUTH}${AuthPath.SIGN_IN}`,
    component: SignIn,
    isPrivate: false,
    forRole: null,
  },
  {
    path: `${AppPaths.AUTH}${AuthPath.RESTORE}`,
    component: RestorePass,
    isPrivate: false,
    forRole: null,
  },
  {
    path: `${AppPaths.AUTH}${AuthPath.RESTORE_CONFIRM}`,
    component: RestorePass,
    isPrivate: true,
    forRole: null,
  },
];

export const patientCabinetRoutes: Array<RouteType> = [
  {
    path: `${AppPaths.PATIENT_VIEW}${PatientPaths.APPOINTMENTS}`,
    component: UserAppointmentsList,
    isPrivate: true,
    exact: false,
    forRole: UserRoles.PATIENT
  },
  {
    path: `${AppPaths.PATIENT_VIEW}${PatientPaths.CREATE_APPOINTMENT}`,
    component: AppointmentFormContainer,
    isPrivate: true,
    exact: false,
    forRole: UserRoles.PATIENT,
  },
  {
    path: `${AppPaths.PATIENT_VIEW}${PatientPaths.RESOLUTION_LIST}`,
    component: ResolutionsList,
    isPrivate: true,
    exact: false,
    forRole: UserRoles.PATIENT,
  },
];

export const doctorCabinetRoutes: Array<RouteType> = [
  {
    path: `${AppPaths.DOCTOR_VIEW}${DoctorPaths.APPOINTMENTS}`,
    component: UserAppointmentsList,
    isPrivate: true,
    exact: false,
    forRole: UserRoles.DOCTOR,
  },
  {
    path: `${AppPaths.DOCTOR_VIEW}${DoctorPaths.RESOLUTION_LIST}`,
    component: ResolutionsList,
    isPrivate: true,
    exact: false,
    forRole: UserRoles.DOCTOR,
  },
];
