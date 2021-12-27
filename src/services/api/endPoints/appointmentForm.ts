import { api } from 'services';
import { Specialization, Doctor, FetchAvailableTimeParams, PostNewAppointmentParams } from 'types';


const EndPoints = {
  getAllSpecializations: () => `specializations`,
  getDoctorsBySpecialisations: (specializationId: string) => `doctors/specialization/${specializationId}`,
  getAvailableTime: () => 'appointments/time/free',
  postCreatedAppointment: () => 'appointments',
} as const;

export const fetchAllSpecializations = () =>
  api
    .get<Array<Specialization>>(EndPoints.getAllSpecializations())
    .then((response) => ({ response }))
    .catch((error) => ({ error }));

export const getDoctorsBySpecialisations = (specializationId: string) =>
  api
    .get<Array<Doctor>>(EndPoints.getDoctorsBySpecialisations(specializationId))
    .then((response) => ({ response }))
    .catch((error) => ({ error }));

export const fetchAvailableTime = ({ doctorID, date }: FetchAvailableTimeParams) =>
  api
    .get<Array<string>>(EndPoints.getAvailableTime(), {
      params: {
        doctorID: doctorID,
        date: date,
      },
    })
    .then((response) => ({ response }))
    .catch((error) => ({ error }));

export const postCreatedAppointment = (data: PostNewAppointmentParams) =>
  api
    .post(EndPoints.postCreatedAppointment(), data)
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
