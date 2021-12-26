export enum AuthPath {
  SIGN_UP = '/sign-up',
  SIGN_IN = '/sign-in',
  RESTORE = '/restore',
  RESTORE_CONFIRM = '/restore-confirm',
}

export enum AppPaths {
  AUTH = '/authentification',
  DOCTOR_VIEW = '/doctor-view',
  PATIENT_VIEW = '/patient-view',
}

export enum PatientPaths {
  CREATE_APPOINTMENT = '/create-appointment',
  APPOINTMENTS = '/patient-appointments',
  RESOLUTION_LIST = '/patient-resolutions'
}

export enum DoctorPaths {
  APPOINTMENTS = '/doctor-appointments',
  RESOLUTION_LIST = '/doctor-resolutions',
}