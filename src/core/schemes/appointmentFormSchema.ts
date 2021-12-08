import * as Yup from 'yup';

export const appointmentSchema = Yup.object().shape(({
  date: Yup.string()
    .required('This field is required!'),
  time: Yup.string()
    .required('This field is required!'),
  doctorName: Yup.string()
    .required('This field is required!'),
  occupation: Yup.string()
    .required('This field is required!'),
  reason: Yup.string()
    .required('This field is required!'),
  note: Yup.string(),
}));