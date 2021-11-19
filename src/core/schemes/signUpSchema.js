import * as Yup from 'yup';

export const signUpSchema = Yup.object().shape(({
    firstName: Yup.string()
        .min(2, 'Name must contain min 8 symbols!')
        .max(15, 'Too Long!')
        .required('This field is required!'),
    lastName: Yup.string()
        .min(2, 'Name must contain min 8 symbols!')
        .max(15, 'Too Long!')
        .required('This field is required!'),
    userName: Yup.string()
        .email('Invalid email!')
        .required('This field is required!'),
    password: Yup.string()
        .min(8, 'Password must contain min 8 symbols!')
        .required('This field is required!'),
    passwordConfirm: Yup.string()
        .required('This field is required!')
        .oneOf([Yup.ref("password"), null], "Passwords must match")
}));