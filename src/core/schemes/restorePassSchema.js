import * as Yup from 'yup';

export const restorePassSchema = Yup.object().shape(({
    email: Yup.string()
        .email('Invalid email!')
        .required('This field is required!'),
}));