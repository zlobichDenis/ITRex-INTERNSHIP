import * as Yup from 'yup';

export const signInSchema = Yup.object().shape(({
    userName: Yup.string()
        .email('Invalid email!')
        .required('This field is required!'),
    password: Yup.string()
        .min(8, 'Password must contain min 8 symbols!')
        .required('This field is required!'),
}));