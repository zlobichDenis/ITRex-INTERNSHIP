export const SuccessMessages = {
  CREATED_APPOINTMENT: 'The appointment has been successfully created!',
  DELETE_APPOINTMENTS: 'The appointment has been deleted!',
  LOGIN: 'You have successfully entered!',
  REGISTRATION: 'Your account has been successfully created!',
  CREATE_RESOLUTION: 'The resolution has been successfully created!',
} as const;

export const ErrorMessages = {
  CREATED_APPOINTMENTS: 'Something going wrong. Try again.',
  LOGIN: 'Unsuccessful login!',
  REGISTRATION: 'Unsuccessful registration!',
  DELETE_APPOINTMENTS: 'Something going wrong. Try again.',
  CREATE_RESOLUTION: 'An resolution has already been created for this appointment.',
  FETCH_DATA: 'Your session is probably up. Please restart the page.',
} as const;