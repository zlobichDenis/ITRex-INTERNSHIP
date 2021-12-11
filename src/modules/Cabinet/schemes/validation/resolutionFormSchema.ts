import * as Yup from 'yup';

export const resolutionFormSсhema = Yup.object().shape({
  resolution: Yup.string()
    .required('This field is required!')
    .min(10, 'Min 10 symbols')
    .max(300, 'Too long!')
});