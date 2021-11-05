import * as Yup from 'yup';

export const RestorePassSchema = Yup.object().shape(({
    email: Yup.string()
        .email('Invalid email!')
        .required('This field is required!'),
}));